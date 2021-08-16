import React, { useEffect, useState } from "react";
import classes from "./ProductDetailsPage.module.css";
import { useParams } from "react-router";
import useFetchApi from "../../Custom Hooks/Fetch API/useFetchApi";
import { connect } from "react-redux";
import { increaseCartCount } from "../../Redux Files/Actions/increaseCartCount";
import {
  handleCartClick,
  cartCount,
} from "../../Handle Storage/ManageLocalStorage";

function ProductDetailsPage(props) {
  const productId = useParams().id;
  const url = `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`;
  const { apiResults, isLoading } = useFetchApi(url);
  //console.log(apiResults);
  const {
    brand,
    description,
    id,
    isAccessory,
    name,
    photos,
    preview,
    price,
    size,
  } = apiResults;
  //console.log(photos);
  const [imagePos, setimagePos] = useState(0);
  const [imageUrl, setimageUrl] = useState(preview);
  const [cartBtnClassname, setcartBtnClassname] = useState([
    classes.addtoCartBtn,
  ]);
  const changeImage = (pos, imgUrl) => {
    setimagePos(pos);
    setimageUrl(imgUrl);
  };

  const incrementCart = (count) => {
    props.incrementCountFromComponent(count);
  };

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1 className={classes.loadingText}>Loading...</h1>
      ) : (
        <div className={classes.ProductDetailsPageWrapper}>
          <div className={classes.leftDivWrapper}>
            <img src={imageUrl || preview} alt={name} />
          </div>
          <div className={classes.rightDivWrapper}>
            <h1 className={classes.productName}>{name}</h1>
            <h3 className={classes.productBrand}>{brand}</h3>
            <h4 className={classes.sectionHeading}>
              Price: Rs <span className={classes.productPrice}>{price}</span>
            </h4>
            <h3 className={classes.sectionHeading}>Description</h3>
            <p className={classes.productDescription}>{description}</p>
            <div>
              <h3 className={classes.sectionHeading}>Product Preview</h3>
              <div className={classes.smallImagesWrapper}>
                {photos &&
                  photos.map((item, pos) => {
                    const imageClassName = [classes.smallImageDiv];

                    if (pos === imagePos) {
                      imageClassName.length = 0;
                      imageClassName.push(classes.smallImageDivWithBorder);
                    }
                    return (
                      <div
                        key={pos}
                        className={imageClassName}
                        onClick={() => changeImage(pos, item)}
                      >
                        <img src={item} alt={`${name}${pos}`} />
                      </div>
                    );
                  })}
              </div>
            </div>
            <button
              className={cartBtnClassname}
              onClick={() => {
                setcartBtnClassname([classes.bigger]);
                setTimeout(() => {
                  setcartBtnClassname([classes.addtoCartBtn]);
                }, 200);
                handleCartClick(id, name, preview, price);
                incrementCart(cartCount ? cartCount : cartCount + 1);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispach) => ({
  incrementCountFromComponent: (payload) => dispach(increaseCartCount(payload)),
});

export default connect(null, mapDispatchToProps)(ProductDetailsPage);
