import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { cartSendData, fetchCartData } from "./store/cart-actions";

let initialState = true;

function App() {
  const togglecart = useSelector((state) => state.togglecart.isCartOpen);
  const cart = useSelector((state) => state.cartFunctions);
  const notification = useSelector((state) => state.togglecart.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (initialState) {
      initialState = false;
      return;
    }
    dispatch(cartSendData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {togglecart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
