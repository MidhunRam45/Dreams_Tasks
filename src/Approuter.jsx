import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrudContainer from "./tasks/redux/crud/CrudContainer";
import CreateCrud from "./tasks/redux/crud/CreateCrud";
import UpdateCrud from "./tasks/redux/crud/UpdateCrud";
import ProductsContainer from "./tasks/prouducts/ProductsContainer";
import FavouritesContainer from "./tasks/prouducts/FavouritesContainer";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<CrudContainer />} /> */}
        <Route path="/create" element={<CreateCrud />} />
        <Route path="/update/:id" element={<UpdateCrud />} />
        {/* <Route path="/" element={<ProductsContainer />} /> */}
        <Route path="/favourites" element={<FavouritesContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
