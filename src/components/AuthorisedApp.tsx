import Sidebar from "./Sidebar.tsx";
import Footer from "./layout/Footer.tsx";
import MainContent from "./layout/MainContent.tsx";

export default function AuthorisedApp({logOut}: { logOut: () => void }) {
    return (
        <>
            <MainContent></MainContent>
            <Sidebar logOut={logOut}></Sidebar>
            <Footer></Footer>
        </>

    )
}
