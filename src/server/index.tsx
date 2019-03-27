import express from "express";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router";
import React from "react";
import {Provider} from "react-redux";
import {Routes} from "../App";
import {IAppState} from "../store/IAppState";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {logger} from "redux-logger";
import {createMainReduce} from "../store/reducers";

const app = express();

const Middleware =
  process.env.NODE_ENV === "development"
    ? applyMiddleware(thunkMiddleware, logger)
    : applyMiddleware(thunkMiddleware);

app.use(express.static("public"));

const handleRender = (req: any, res: any): void => {
  const reducers = createMainReduce();
  const store = createStore(
    reducers,
    Middleware,
  );
  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>);

  // Grab the initial state from our Redux store
  const preLoadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preLoadedState));
};

const renderFullPage = (html: string, preLoadedState: IAppState): string => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preLoadedState).replace(/</g, "\\u003c")}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `;
};

app.get("*", handleRender);

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
