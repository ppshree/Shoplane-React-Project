import "./App.css";
import TopbarPage from "./Components/Topbar/TopbarPage";
import FooterPage from "./Components/Footer/FooterPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ProductDetailsPage from "./Components/ProductDetails/ProductDetailsPage";
import CartPage from "./Components/CartPage/CartPage";
import ThankYou from "./Components/ThankYou Page/ThankYou";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopbarPage />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/product/:id" component={ProductDetailsPage}></Route>
          <Route path="/cart" component={CartPage}></Route>
          <Route path="/thank-you" component={ThankYou}></Route>
        </Switch>
        <FooterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
