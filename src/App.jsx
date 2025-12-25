import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import ScrollToTop from "./share/ScrollToTop";
import Footer from "./pages/Footer";

// 🔹 Lazy loaded pages
const Hero = lazy(() => import("./pages/Hero"));
const Product = lazy(() => import("./pages/Product"));
const Cart = lazy(() => import("./pages/Cart"));
const Details = lazy(() => import("./pages/Details"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />

      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen gap-2">
            <span className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-3 h-3 bg-black rounded-full animate-bounce"></span>
          </div>

        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="producs" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="details" element={<Details />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Suspense>

      <Footer />
    </HashRouter>
  );
};

export default App;
