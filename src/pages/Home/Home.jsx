import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default Home