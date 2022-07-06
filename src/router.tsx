import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Produtos } from "./pages/Produtos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/catalogo/:product" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
