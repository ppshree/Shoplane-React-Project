import { manageCartCount } from "../../Redux Files/Reducers/cartCountReducer";
import { createStore } from "redux";

const store = createStore(manageCartCount);

export default store;
