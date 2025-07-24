import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'

import styles from './Create.module.css'

const Create = () => {
  return (
    <div className={styles.create}>
      <Navbar/>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <Footer/>
    </div>
  )
}

export default Create
