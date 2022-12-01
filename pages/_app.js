import NavbarPage from "../components/NavbarPage";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return(
  <div className="font-inter bg-[#192645]"> 
    <NavbarPage />
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp;
