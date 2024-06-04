import "./productscontainer.css";
import { useEffect, useState } from "react";
import ProductsCart from "./ProductsCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "./fetchSlice";

function ProductsContainer() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { data } = useSelector((state) => state.fetch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const filtered = data.filter((item) =>
        ["category", "description", "title"].some((prop) =>
          item[prop].toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredProducts(filtered);
    }
  }, [search, data]);

  return (
    <div className="products-container">
      <nav>
        <h1>Shopping Zone</h1>
        <input
          type="search"
          placeholder="search here"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{
              color: "white",
              fontSize: "2rem",
              marginRight: "1rem",
              cursor: "pointer",
            }}
            onClick={() => navigate("/favourites")}
          />
        </div>
      </nav>

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductsCart key={product.id} product={product} id={product.id} />
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}

export default ProductsContainer;
