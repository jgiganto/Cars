import { createInstance } from "./httpClient/";

const getPaginatedOrders = ({ skip, take }) =>
  createInstance().post("/Orders/All?api-version=1.0", {
    skip,
    take
  });

const getOrderById = ({ id }) =>
  createInstance().get(`Orders?id=${id}&api-version=1.0`);

export { getPaginatedOrders, getOrderById };
