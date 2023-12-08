import Navbar from "@components/navbar";
import { LayoutProps } from "@/types/Layout";
import Sidebar from "@components/sidebar";
import { Fragment } from "react";

const Layout = ({children}: LayoutProps) => {
    return (
       <Fragment>
            <Navbar />
            <Sidebar />
            {children}
       </Fragment>
    );
}
 
export default Layout;