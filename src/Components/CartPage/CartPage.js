import axios from "axios";
import React, { useEffect } from "react";
import classes from "./CartPage.module.css";
import { increaseCartCount } from "../../Redux Files/Actions/increaseCartCount";

import { connect } from "react-redux";

function CartPage(props) {
  let finalPrice = 0;
  const itemName = "cartData";
  let dataList = window.localStorage.getItem(itemName);
  if (dataList === null || dataList === "") {
    //console.log("No data Found");
  } else {
    dataList = JSON.parse(dataList);
  }

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  const emptyCart = (count) => {
    props.incrementCountFromComponent(count);
  };

  const placeOrder = () => {
    let dataList = window.localStorage.getItem(itemName);
    if (dataList === null || dataList === "") {
      //console.log("No data Found");
    } else {
      console.log("Data Found in storage");
      dataList = JSON.parse(dataList);
      let productArray = [];
      dataList.map((item) => {
        productArray.push(item);
      });
      let dataObj = {
        amount: finalPrice,
        products: productArray,
      };
      axios
        .post("https://5d76bf96515d1a0014085cf9.mockapi.io/order", dataObj)
        .then(() => {
          alert("Order Placed Successfully");
          window.localStorage.setItem(itemName, []);
          props.history.push("/thank-you");
          finalPrice = 0;
          emptyCart(0);
        })
        .catch((err) => {
          console.log(err);
        });

      //console.log(props);
    }
  };

  return (
    <div className={classes.cartPageWrapper}>
      <h1 className={classes.mainHeading}>Checkout</h1>
      <div>
        <h3 className={classes.headingText}>
          Total Items:{" "}
          <span className={classes.totalCartCount}>
            {dataList && dataList.length}
          </span>{" "}
        </h3>
      </div>
      <div className={classes.checkOutDivWrapper}>
        <div className={classes.leftDivWrapper}>
          {dataList ? (
            dataList.map((item, pos) => {
              const { preview, name, count, price } = item;
              finalPrice += parseInt(price) * parseInt(count);
              return (
                <div key={pos} className={classes.checkOutItemDiv}>
                  <div className={classes.checkoutImgWrapper}>
                    <img src={preview} alt={name} />
                  </div>
                  <div className={classes.checkoutItemInfoWrapper}>
                    <h3 className={classes.checkoutItemName}>{name}</h3>
                    <p className="checkout-item-count">x{count}</p>
                    <p className="checkout-item-price">Amout: Rs {price} </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <h1>No Items Found!</h1>
            </div>
          )}
        </div>
        <div className={classes.rightDivWrapper}>
          <h3 className="section-heading">Total Amount</h3>
          <p>
            Amount: Rs <span className="checkout-price">{finalPrice}</span>{" "}
          </p>
          <button onClick={placeOrder} className={classes.placeOrderBtnSmall}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispach) => ({
  incrementCountFromComponent: (payload) => dispach(increaseCartCount(payload)),
});

export default connect(null, mapDispatchToProps)(CartPage);
