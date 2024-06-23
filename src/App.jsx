import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";
import { Suspense, lazy } from "react";

const App = () => {
  const Men = lazy(() => import("./components/Collections/Men"));
  const Women = lazy(() => import("./components/Collections/Women"));
  const Kids = lazy(() => import("./components/Collections/Kids"));
  const Jeans = lazy(() => import("./components/Collections/Jeans"));
  const Tshirt = lazy(() => import("./components/Collections/Tshirt"));
  const Shirt = lazy(() => import("./components/Collections/Shirt"));
  const Trouser = lazy(() => import("./components/Collections/Trouser"));

  return (
    <div className="px-[4vw]">
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections/men" element={<Men />} />
            <Route path="/collections/women" element={<Women />} />
            <Route path="/collections/kids" element={<Kids />} />
            <Route path="/collections/tshirts" element={<Tshirt />} />
            <Route path="/collections/shirts" element={<Shirt />} />
            <Route path="/collections/trousers" element={<Trouser />} />
            <Route path="/collections/jeans" element={<Jeans />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
