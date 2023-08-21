import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { cartAction } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  //const cart = useSelector(state=>state.cart.isCartOpen)
  const cartHandler = () => {
    dispatch(cartAction.openCart());
  };
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
