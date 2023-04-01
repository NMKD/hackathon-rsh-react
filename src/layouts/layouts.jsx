import { Outlet } from "react-router-dom";
import Haeder from "../components/ui/header";
import Footer from "../components/ui/footer";

const Layout = () => {
  return (
        <div className="container 2xl">
            <Haeder />
            <Outlet />
            <Footer />
        </div>
  );
};

export default Layout;
