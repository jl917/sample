import express from "express";
import React from 'react';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Router from "./Router";
import fs from 'fs';
import path from 'path';
import compression from 'compression';
import { RecoilRoot } from 'recoil';
import { atomCount } from './store';

let app = express();

app.use(compression());
app.use('/', express.static('dist', { index: ['default.html'] }));

app.get("*", (req, res) => {

  const initializeState = ({ set }: any) => {
    set(atomCount, 5);
  };
  fs.readFile(path.resolve("./dist/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    let html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <RecoilRoot initializeState={initializeState}>
          <Router />
        </RecoilRoot>
      </StaticRouter>
    );

    return res.send(
      data
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

app.listen(3004, () => {
  console.log('server start 3004')
});