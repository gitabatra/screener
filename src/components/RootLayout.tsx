import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header"

function RootLayout(){
    return (<>
    <Header />
    <main>
    <div className="w-full min-h-screen mt-10 bg-gray-800 text-white">
        <Outlet />
    </div>
    </main>
    <Footer />
    </>);
}

export default RootLayout