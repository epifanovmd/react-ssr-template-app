import express from "express";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router";
import React from "react";
import {store} from "../store/store";
import {Provider} from "react-redux";
import {Routes} from "../App";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {

  const markup = renderToString(
    <Provider store={store}>
      <>
        <StaticRouter location={req.url} context={{}}>
          <Routes/>
        </StaticRouter>
      </>
    </Provider>);

  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>SSR with RR</title>
    <script src="/bundle.js" defer></script>
  </head>

  <body>
  <div id="app">${markup}</div>
  </body>
  </html>
`);
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});