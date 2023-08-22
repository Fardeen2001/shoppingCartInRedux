import { togglecartAction } from "./cart";
import { cartfunctionActions } from "./cartfunction";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://shopping-cart-in-redux-default-rtdb.firebaseio.com/cart.json"
      );
      if (!res.ok) {
        throw new Error("Failed To Fetch Data");
      }
      const data = await res.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartfunctionActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalAmount: cartData.totalAmount,
        })
      );
    } catch (error) {
      dispatch(
        togglecartAction.showNotification({
          status: "error",
          title: "Error!",
          message: "fetching cart data failed!",
        })
      );
    }
  };
};

export const cartSendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      togglecartAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "sending cart data!",
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        "https://shopping-cart-in-redux-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalAmount: cart.totalAmount,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Sending Cart Data Failed");
      }
      await res.json();
    };

    try {
      await sendRequest();
      dispatch(
        togglecartAction.showNotification({
          status: "success",
          title: "Success...",
          message: "sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        togglecartAction.showNotification({
          status: "error",
          title: "Error!",
          message: "sending cart data failed!",
        })
      );
    }
  };
};
