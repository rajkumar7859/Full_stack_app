import axios from "axios";
import { useFetch } from "../CustomHook/useFetch";
import "../index.css";

const url = async () => {
  let res = await axios.get("https://fakestoreapi.com/products");
  let newData = await res.data;
  return newData;
};

const Products = () => {
  const { loading, error, data } = useFetch(url);
  if (loading) {
    return <div>Loading........</div>;
  } else if (error) {
    return <div>error........</div>;
  } else
    return (
      <div className="App">
        <h1>Products</h1>
        {data?.map((item) => (
          <div key={item.id}>
            <img style={{ width: "50px" }} src={item.image} />
            {item.title}
          </div>
        ))}
      </div>
    );
};
export default Products;
