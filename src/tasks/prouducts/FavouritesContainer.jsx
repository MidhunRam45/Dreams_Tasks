import { useSelector } from "react-redux";
import "./favouritescontainer.css";
import ProductsCart from "./ProductsCart";

function FavouritesContainer() {
  const pro = useSelector((state) => state.products);

  console.log(pro);

  return (
    <div className="fav-container">
      {pro ? (
        pro.map((data) => (
          <ProductsCart product={data} id={data.id} remove={true} />
        ))
      ) : (
        <h1>No products</h1>
      )}
    </div>
  );
}

export default FavouritesContainer;
