import React from "react";
import { NavBar } from "./NavBar";
import Head from "next/head";
import Footer from "./footer/Footer";
import { Map } from "./Map";
import Contactanos, { ContactUs } from "./ContactUs";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
      </Head>
      <NavBar />
      <div className="container ">{children}</div>
      <ContactUs />
      <Map />
      <Footer />
    </>
  );
};
