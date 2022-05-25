import express from "express";
import React from 'react';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Router from "./Router";
import fs from 'fs';
import path from 'path';

let app = express();


app.use('/', express.static('dist'));
app.get("*", (req, res) => {
  fs.readFile(path.resolve("./dist/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    let html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <Router />
      </StaticRouter>
    );

    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

app.listen(3004);