import { Outlet } from "react-router-dom";
import Footer from "../components/ui/footer";
import Navbar from "../components/navbar/Navbar";
import BreadCrumbs from "../components/ui/breadcrumbs";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <BreadCrumbs/>
      <main className="flex-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
