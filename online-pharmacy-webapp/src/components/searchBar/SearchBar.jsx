import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "lodash/debounce";
import axios from "axios";
import myContext from "../../context/myContext"; // Adjust import based on your project structure

const SearchBar = () => {
  const context = useContext(myContext);
  const { setLoading } = context;
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      if (!token) {
        throw new Error('Token not found');
      }
      const response = await axios.get("http://localhost:8080/api/public/products", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const productsArray = response.data.content || [];
      setProducts(productsArray);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Debounced Filter Function
  const debouncedFilter = debounce((query) => {
    if (products) {
      const results = products.filter((obj) => obj.productName.toLowerCase().includes(query.toLowerCase())).slice(0, 8);
      setFilteredData(results);
    }
  }, 300);

  useEffect(() => {
    debouncedFilter(search);
    return () => {
      debouncedFilter.cancel();
    };
  }, [search, products]);

  return (
    <div className="position-relative">
      <div className="d-flex justify-content-center mb-2">
        <input
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
          style={{ width: '100%' }}
        />
      </div>

      {search && (
        <div className="position-absolute bg-light border rounded shadow-lg z-index-100 mt-1"
             style={{ width: '100%' }}
        >
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.productId}
                className="p-2 cursor-pointer d-flex align-items-center border-bottom"
                onClick={() => navigate(`/productinfo/${item.productId}`)}
              >
                <img className="w-25 h-25 me-2 rounded" src={item.image} alt={item.productName} />
                <span>{item.productName}</span>
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center p-3">
              <img className="w-50" src="/no-results.png" alt="No results" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
