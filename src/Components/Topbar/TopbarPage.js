import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./TopbarPage.module.css";

import { connect } from "react-redux";

import { HashLink } from "react-router-hash-link";
import profilePic from "./assets/profile-pic.png";
import edyodaLogo from "./assets/edyoda-logo.png";

function TopbarPage(props) {
  const { count } = props;
  const [isOpen, setisOpen] = useState(false);
  const [verticleNavClass, setverticleNavClass] = useState([
    classes.verticalNavBarWrapper,
  ]);

  const handleNavbar = () => {
    if (isOpen) {
      setverticleNavClass([classes.verticalNavBarWrapper]);
      setisOpen(false);
    } else {
      setverticleNavClass([classes.verticalNavBarWrapperShow]);
      setisOpen(true);
    }
  };

  return (
    <div className={classes.topbarWrapper}>
      <div className={classes.leftDivWrapper}>
        <Link className="routerLinks" to="/">
          <div className={classes.logoWrapper}>
            <h4>
              <span>SHOP</span>LANE
            </h4>
          </div>
        </Link>

        <div className={classes.midDivWrapper}>
          <HashLink className={classes.hashlinkStyles} to="#clothing_section">
            CLOTHING
          </HashLink>
          <HashLink
            className={classes.hashlinkStyles}
            to="#accessories_section"
          >
            ACCESSORIES
          </HashLink>
        </div>
      </div>

      <div className={classes.rightDivWrapper}>
        <div>
          <i class="fas fa-search"></i>
        </div>
        <Link className="routerLinks" to="/cart">
          <div className={classes.cartWrapper}>
            <div className={classes.cartCountWrapper}>
              <p>{count}</p>
            </div>

            <i class="fas fa-shopping-cart"></i>
          </div>
        </Link>

        <div className={classes.avatarWrapper}>
          <img src={profilePic} alt="avatar" />
        </div>
        <div onClick={handleNavbar} className={classes.hamburgerWrapper}>
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div className={verticleNavClass}>
        <HashLink
          onClick={handleNavbar}
          className={classes.hashlinkStylesnavbar}
          to="/"
        >
          HOME
        </HashLink>
        <HashLink
          onClick={handleNavbar}
          className={classes.hashlinkStylesnavbar}
          to="#clothing_section"
        >
          CLOTHING
        </HashLink>
        <HashLink
          onClick={handleNavbar}
          className={classes.hashlinkStylesnavbar}
          to="#accessories_section"
        >
          ACCESSORIES
        </HashLink>
      </div>
      <img className={classes.edyodaLogo} src={edyodaLogo} alt="logo" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps, null)(TopbarPage);
