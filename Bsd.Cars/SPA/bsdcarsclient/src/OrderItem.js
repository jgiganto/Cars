import React from "react";

const OrderItem = ({ order }) => (
  <div>
    <ul>
      <li key={order.toString()}>{order.model}</li>
    </ul>
  </div>
);
export { OrderItem };
