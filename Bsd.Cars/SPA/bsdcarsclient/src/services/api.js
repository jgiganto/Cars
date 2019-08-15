import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:59329/api/Orders?id=1&api-version=1.0",
  responseType: "json"
});

// const getHttpInstance = axios.create({
//   baseURL: "http://localhost:59329/api/",
//   timeout: 1000
// });

// //   const data = {
// //     skip: 0,
// //     take: 3
// //   };

// export default {
//   orders: {
//     get: () =>
//       getHttpInstance({
//         url: "Orders/All",
//         method: "post",
//         data: {
//           skip: 0,
//           take: 3
//         }
//       })
//   }
// };
