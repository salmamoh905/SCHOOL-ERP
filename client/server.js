// //using proxy
// const express = require("express");

// const { createProxyMiddleware} = require("http-proxy-middleware");



// app
//   .prepare()
//   .then(() => {
//     const server = express();
//     // apply proxy in dev mode
//     if (dev) {
//       server.use(
//         "/api",
//         createProxyMiddleware({
//           target: "http://localhost:8000",
//           changeOrigin: true,
//         })
//       );
//     }

//     server.all("*", (req, res) => {
//       return handle(req, res);
//     });

//     server.listen(3000, (err) => {
//       if (err) throw err;
//       console.log("> Ready on http://localhost:8000");
//     });
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });
