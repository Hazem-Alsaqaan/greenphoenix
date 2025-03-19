import React from "react";
import Landing from "../components/landing/Landing";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ProductsPage from "./ProductsPage";
import WorldSection from "../components/WorldSection";

function HomePage() {
  return (
    <>
      <div className="min-h-screen">
        <Landing />
      </div>
      <AboutPage />
      <ServicesPage />
      <ProductsPage />
      <WorldSection />
    </>
  );
}

export default HomePage;
