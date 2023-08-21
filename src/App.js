import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const togglecart = useSelector((state) => state.togglecart.isCartOpen);
  return (
    <Layout>
      {togglecart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
