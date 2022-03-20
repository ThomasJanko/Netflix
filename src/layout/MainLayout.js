// import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({children}) => {
    return (
        <>
        //v-if page sign in
            <Header/>
            <main>
                {children}
            </main>
            <footer>
               {/* <Footer/> */}
            </footer>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        </>
    );
}

export default MainLayout;
