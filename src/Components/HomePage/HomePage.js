import React, { useEffect } from "react";
import useFetchApi from "../../Custom Hooks/Fetch API/useFetchApi";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "./slider/img1.png";
import img2 from "./slider/img2.png";
import img3 from "./slider/img3.png";
import img4 from "./slider/img4.png";

export default function HomePage() {
  const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
  const { apiResults, isLoading } = useFetchApi(url);
  //console.log(apiResults);
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);
  return (
    <div className={classes.HomePageWrapper}>
      <div>
        {isLoading ? (
          <h1 className={classes.loadingText}>Loading...</h1>
        ) : (
          <div>
            <Slider />
            <ClothingSection apiResults={apiResults} />
            <AccessoriesSection apiResults={apiResults} />
          </div>
        )}
      </div>
    </div>
  );
}

function ClothingSection(props) {
  const { apiResults } = props;
  return (
    <div id="clothing_section" className={classes.productSectionsWrapper}>
      <h1 className={classes.homepageHeadings}>Clothing for Men and Women</h1>
      <div className={classes.itemCardWrapper}>
        {apiResults.map((item) => {
          const { brand, id, isAccessory, name, preview, price } = item;
          if (!isAccessory) {
            return (
              <Link key={id} className={classes.itemCard} to={`/product/${id}`}>
                <div>
                  <img src={preview} alt={name} />
                  <div className={classes.cardInfoWrapper}>
                    <h3 className={classes.carditemName}>{name}</h3>
                    <p>{brand}</p>
                    <h3 className={classes.carditemPrice}>Rs {price}</h3>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
function AccessoriesSection(props) {
  const { apiResults } = props;
  return (
    <div id="accessories_section" className={classes.productSectionsWrapper}>
      <h1 className={classes.homepageHeadings}>
        Accessories for Men and Women
      </h1>
      <div className={classes.itemCardWrapper}>
        {apiResults.map((item) => {
          const { brand, id, isAccessory, name, preview, price } = item;
          if (isAccessory) {
            return (
              <Link key={id} className={classes.itemCard} to={`/product/${id}`}>
                <div>
                  <img src={preview} alt={name} />
                  <div className={classes.cardInfoWrapper}>
                    <h3 className={classes.carditemName}>{name}</h3>
                    <p>{brand}</p>
                    <h3 className={classes.carditemPrice}>Rs {price}</h3>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div className={classes.sliderWrapper}>
      <AliceCarousel
        autoPlay
        autoPlayInterval="2000"
        infinite
        disableButtonsControls
      >
        <img src={img1} alt="img1" className={classes.sliderImages} />
        <img src={img2} alt="img2" className={classes.sliderImages} />
        <img src={img3} alt="img3" className={classes.sliderImages} />
        <img src={img4} alt="img4" className={classes.sliderImages} />
      </AliceCarousel>
    </div>
  );
}
