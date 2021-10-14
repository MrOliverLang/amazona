import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCESS,
} from "../constants/productConstants";

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { laoding: false, error: action.payload };
    default:
      return state;
  }
};
