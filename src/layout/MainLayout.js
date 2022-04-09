// import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Login from "../components/Login";

const MainLayout = ({children}) => {

    const [log, setLog] = useState({})

    useEffect(() => {
    //    localStorage.setItem('Login', JSON.stringify({auth: false}))
      
       setLog(JSON.parse(localStorage.getItem('Login')))
       console.log(log)
    
    }, []);
   
    
    return (
        <>
        {/* Si utilisateur pas connecté -> Redirection vers LoginPage */}
        {log.auth===true?
        <>
            <Header/>
            <main className="app">
                {children}
            </main>
            <footer>
               {/* <Footer/> */}
            </footer>
        </>
            :<Login/>}

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        </>
    );
}

export default MainLayout;
