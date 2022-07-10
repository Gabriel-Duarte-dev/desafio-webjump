import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FilterProvider } from "./Context/filter";
import { Home } from "./pages/Home";
import { Produtos } from "./pages/Produtos";

const Router = () => {
  return (
    <BrowserRouter>
      <FilterProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:product" element={<Produtos />} />
        </Routes>
      </FilterProvider>
    </BrowserRouter>
  );
};

export default Router;
