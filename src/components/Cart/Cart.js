import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cartFunctions.items);
  const totalAmount = useSelector((state) => state.cartFunctions.totalAmount);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((items) => (
          <CartItem
            item={{
              id: items.id,
              title: items.name,
              price: items.price,
              quantity: items.quantity,
              total: items.totalPrice,
            }}
          />
        ))}
      </ul>
      <h3>Total Amount: ${totalAmount}</h3>
    </Card>
  );
};

export default Cart;
