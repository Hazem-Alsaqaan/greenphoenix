import React from "react";
import Landing from "../components/landing/Landing";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ProductsPage from "./ProductsPage";

function HomePage() {
  return (
    <>
      <div className="min-h-screen">
        <Landing />
      </div>
      <AboutPage />
      <ServicesPage />
      <ProductsPage />
    </>
  );
}

export default HomePage;
