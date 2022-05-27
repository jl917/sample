import express from "express";
import React from 'react';
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Router from "./Router";
import fs from 'fs';
import path from 'path';
import compression from 'compression';
import { RecoilRoot } from 'recoil';
import { atomCount, COUNT_DEFAULT_VALUE } from './store';

let app = express();

// 새로고침시 서버에서 axios안 날리는 이슈 있음.

app.use(compression());
app.use('/', express.static('dist', { index: ['default.html'] }));

app.get("*", (req, res) => {

  fs.readFile(path.resolve("./dist/index.html"), "utf-8", (err, data) => {

    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }

    const selector = `<div id="root">`;
    const pointIndex = data.indexOf(selector) + selector.length;
    const start = data.slice(0, pointIndex)
    const end = data.slice(pointIndex)

    const initializeState = ({ set }: any) => {
      set(atomCount, COUNT_DEFAULT_VALUE);
    };
  
    let html = ReactDOMServer.renderToPipeableStream(
      <StaticRouter location={req.url}>
        <RecoilRoot initializeState={initializeState}>
          <Router />
        </RecoilRoot>
      </StaticRouter>,
      {
        onShellReady () {
          // If something errored before we started streaming, we set the error code appropriately.
          res.statusCode = 200;
          res.setHeader('Content-type', 'text/html');
          res.write(start);
          html.pipe(res);
          res.write(end);
        },
        onError (x) {
          console.error(x);
        },
      }
    );
    // return res.send(
    //   data
    //     .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    // );
  });
});

app.listen(3004, () => {
  console.log('server start 3004')
});