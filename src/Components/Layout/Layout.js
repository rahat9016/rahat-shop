import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Layout = (props) => {
  const { home, children } = props;
  return (
    <div>
      <header className="sticky top-0 z-50">
        <Header home={home} />
      </header>
      <main className={"z-1"}>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
