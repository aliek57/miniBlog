import { db } from '../firebase/config'

import {
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export const useAuth = () => {
    const [loading, setLoading ] = useState(null)
    const [error, setError ] = useState(null)
    const [ cancelled, setCancelled ] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if(cancelled) {
            return 
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)
            toast.success("Usuário cadastrado com sucesso!")

            return user
        } catch (err) {
            let systemErrorMessage;

            if (err.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
            } else if (err.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado.";
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
            }

            setError(systemErrorMessage)
            setLoading(false)
            toast.error(systemErrorMessage);
        }
    }

    const logout = () => {
        checkIfIsCancelled();

        signOut(auth);
    };

    const login = async (data) => {
        checkIfIsCancelled();
    
        setLoading(true);
        setError(false);
    
        try {
          const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
          setError(null);
          toast.success("Usuário autenticado!");
          return userCredential.user;
        } catch (err) {    
          let systemErrorMessage;
    
          if (err.message.includes("user-not-found")) {
            systemErrorMessage = "Usuário não encontrado.";
          } else if (err.message.includes("wrong-password")) {
            systemErrorMessage = "Senha incorreta.";
          } else {
            systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
          }
    
          setError(systemErrorMessage);
          toast.error(systemErrorMessage);
          return null;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth, 
        createUser,
        error,
        loading,
        login,
        logout
    }
}