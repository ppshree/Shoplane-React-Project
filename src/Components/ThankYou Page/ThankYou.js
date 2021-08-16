import classes from "./ThankYou.module.css";
import React from "react";
import whitetick from "./assets/white-tick.png";

export default function ThankYou() {
  return (
    <div className={classes.thankyouPageWrapper}>
      <div className={classes.tickWrapper}>
        <img src={whitetick} alt="tick-image" />
      </div>
      <div className={classes.mainpageHeadingWrapper}>
        <h1>Order Placed Successfully!!</h1>
        <p>We have sent you an email with the order details.</p>
      </div>
    </div>
  );
}
