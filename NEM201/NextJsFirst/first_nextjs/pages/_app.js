import Navbar from '../Components/Navbar'
import '../styles/Home.css'

function MyApp({ Component, pageProps }) {
  return  (
 <>
 <Navbar />
    <Component {...pageProps} />
 </>
 )
}

export default MyApp
