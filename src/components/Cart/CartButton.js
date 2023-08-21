import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { togglecartAction } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(
    (state) => state.cartFunctions.totalQuantity
  );
  const cartHandler = () => {
    dispatch(togglecartAction.openCart());
  };
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
