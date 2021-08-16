import React from "react";
import classes from "./FooterPage.module.css";
import { Link } from "react-router-dom";

export default function FooterPage() {
  return (
    <div>
      <footer>
        <div>
          <p className={classes.footerHeading}>Online Store</p>
          <Link to="/" className={classes.footerLink}>
            Men Clothing
          </Link>
          <Link to="/" className={classes.footerLink}>
            Women Clothing
          </Link>
          <Link to="/" className={classes.footerLink}>
            Men Accessories
          </Link>
          <Link to="/" className={classes.footerLink}>
            Women Accessories
          </Link>
        </div>
        <div>
          <p className={classes.footerHeading}>Helpful Links</p>
          <Link to="/" className={classes.footerLink}>
            Home
          </Link>
          <Link to="/" className={classes.footerLink}>
            About
          </Link>
          <Link to="/" className={classes.footerLink}>
            Contact
          </Link>
        </div>
        <div>
          <p className={classes.footerHeading}>Partners</p>
          <Link to="/" className={classes.footerLink}>
            Zara
          </Link>
          <Link to="/" className={classes.footerLink}>
            Pantaloons
          </Link>
          <Link to="/" className={classes.footerLink}>
            Levis
          </Link>
          <Link to="/" className={classes.footerLink}>
            UCB
          </Link>
          <Link to="/" className={classes.footerLink}>
            + Many More
          </Link>
        </div>
        <div>
          <p className={classes.footerHeading}>Address</p>
          <p className={classes.extraMargin}>Building 101</p>
          <p className={classes.extraMargin}>Central Avenue</p>
          <p className={classes.extraMargin}>LA - 902722</p>
          <p className={classes.extraMargin}>United States</p>
        </div>
      </footer>
    </div>
  );
}
