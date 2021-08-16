const INCREMENT = "INCREMENT";
const itemName = "cartData";
let dataList = window.localStorage.getItem(itemName);
let count2 = 0;
if (dataList) {
  dataList = JSON.parse(dataList);
  dataList.map((item) => {
    count2 += item.count;
  });
}

const initialState = {
  count: count2,
};

export const manageCartCount = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
