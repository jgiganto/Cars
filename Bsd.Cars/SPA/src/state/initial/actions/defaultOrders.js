import { createAction } from "redux-act";

import { getPaginatedOrders, getOrderById } from "../../../services";

const GET_DEFAULT_ORDERS_REQUEST = "GET_DEFAULT_ORDERS_REQUEST";
const GET_DEFAULT_ORDERS_DONE = "GET_DEFAULT_ORDERS_DONE";
const GET_DEFAULT_ORDERS_ERROR = "GET_DEFAULT_ORDERS_ERROR";

const GET_ORDER_BY_ID_REQUEST = "GET_ORDER_BY_ID_REQUEST";
const GET_ORDER_BY_ID_DONE = "GET_ORDER_BY_ID_DONE";
const GET_ORDER_BY_ID_ERROR = "GET_ORDER_BY_ID_ERROR";

const getDefaultOrdersRequest = createAction(GET_DEFAULT_ORDERS_REQUEST);
const getDefaultOrdersDone = createAction(GET_DEFAULT_ORDERS_DONE);
const getDefaultOrdersError = createAction(GET_DEFAULT_ORDERS_ERROR);

const getOrderByIdRequest = createAction(GET_ORDER_BY_ID_REQUEST);
const getOrderByIdDone = createAction(GET_ORDER_BY_ID_DONE);
const getOrderByIdError = createAction(GET_ORDER_BY_ID_ERROR);

const getDefaultOrders = () => async dispatch => {
  dispatch(getDefaultOrdersRequest);
  try {
    const orders = await getPaginatedOrders({ skip: 0, take: 10 });
    dispatch(getDefaultOrdersDone(orders));
  } catch (error) {
    dispatch(getDefaultOrdersError());
  }
};

const getOrder = () => async dispatch => {
  dispatch(getOrderByIdRequest);
  try {
    const order = await getOrderById({ id: 58 });
    dispatch(getOrderByIdDone(order));
  } catch (error) {
    dispatch(getOrderByIdError());
  }
};

export { getDefaultOrders, getDefaultOrdersDone, getOrder, getOrderByIdDone };
