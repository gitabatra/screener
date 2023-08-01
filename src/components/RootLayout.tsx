import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header"

function RootLayout(){
    return (<>
    <Header />
    <main>
    <div className="w-full h-screen mt-10 h-screen bg-gray-800 text-white">
        <Outlet />
    </div>
    </main>
    <Footer />
    </>);
}

export default RootLayout