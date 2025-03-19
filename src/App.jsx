import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HeaderContainer from "./components/header/HeaderContainer";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactUs from "./pages/ContactUs";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import FrozenPage from "./pages/FrozenPage";
import FrishPage from "./pages/FrishPage";
import FrozenFruits from "./pages/FrozenFruits";
import FrozenVegetables from "./pages/FrozenVegetables";
import FrishFruits from "./pages/FrishFruits";
import FrishVegetables from "./pages/FrishVegetables";
import DetailsProductPage from "./pages/DetailsProductPage";
import Footer from "./components/footer/Footer";
import WhatsButton from "./components/WhatsButton";

function App() {
  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route path={"*"} element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/frozen" element={<FrozenPage />} />
        <Route
          path="/products/frozen/frozen-fruits"
          element={<FrozenFruits />}
        />
        <Route
          path="/products/frozen/frozen-vegetables"
          element={<FrozenVegetables />}
        />
        <Route path="/products/frish" element={<FrishPage />} />
        <Route path="/products/frish/frish-fruits" element={<FrishFruits />} />
        <Route
          path="/products/frish/frish-vegetables"
          element={<FrishVegetables />}
        />
        <Route path="/products/:id" element={<DetailsProductPage />} />
      </Routes>
      <Footer />
      <WhatsButton />
    </div>
  );
}

export default App;
