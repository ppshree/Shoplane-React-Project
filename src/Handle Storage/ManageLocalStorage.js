const itemName = "cartData";
let cartCount = 0;
const handleCartClick = (id, name, preview, price) => {
  let productArr = [];
  let productObj = {
    id: id,
    name: name,
    preview: preview,
    price: price,
    count: 1,
  };
  let productList = window.localStorage.getItem(itemName);
  if (productList === null || productList === "") {
    productArr.push(productObj);
    window.localStorage.setItem(itemName, JSON.stringify(productArr));
  } else {
    //console.log(productList);
    addDataToStorage(productObj);
    let dataList = JSON.parse(window.localStorage.getItem(itemName));
    let count = 0;
    dataList.map((item) => {
      count += item.count;
    });
    cartCount = count;
  }
};

const addDataToStorage = (obj) => {
  let isMatched = false; //initialy set it to false
  let productList = JSON.parse(window.localStorage.getItem(itemName));

  productList.map((item, pos) => {
    //check if same id found
    if (obj.id === item.id) {
      item.count += 1;
      productList[pos] = item;
      window.localStorage.setItem(itemName, JSON.stringify(productList));
      //console.log("Id Matched!");
      isMatched = true; // if same items are found then we are setting it to true
    } else {
      isMatched = false; //else we are setting it to false
    }
  });
  if (!isMatched) {
    //if id is not matched then we are adding it to storage
    productList.push(obj);
    window.localStorage.setItem(itemName, JSON.stringify(productList));
    //console.log("Id not Matched!");
  }
};

export { handleCartClick, cartCount };
