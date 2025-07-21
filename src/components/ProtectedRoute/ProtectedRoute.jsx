import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import think from '../../assets/think.gif';

import styles from "./ProtectedRoute.module.css";

export function ProtectedRoute({ element }) {
    const { isAuthenticated, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className={styles.container}>
                <img src={think} alt="Loading..." />
            </div>
        );
    }

    if (isAuthenticated) {
        return element;
    } 

    else {
        return <Navigate to="/" state={{ from: location }} />;
    }
}