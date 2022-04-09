// import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Login from "../components/Login";

const MainLayout = ({children}) => {

    const [log, setLog] = useState({})

    useEffect(() => {
       localStorage.setItem('Auth', JSON.stringify({log: false}))
      
       setLog((localStorage.getItem('Auth')))
       console.log(log)
    }, []);
   
    return (
        <>
        {log.log!=false?
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
