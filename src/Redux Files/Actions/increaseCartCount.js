export const increaseCartCount = (payload) => {
  return {
    type: "INCREMENT",
    payload,
  };
};
