import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
