import React from 'react';
import { renderToString } from "react-dom/server";

// prerender Obj추가후 매핑.
const App = require('../pages/about/p1.page').default;
const renderServer = () => renderToString(App())
export default function myPlugin(routes) {
  let baseHtml = '';
  return {
    name: 'vite-prerender', // 插件名称
    enforce: 'post', //调整插件被执行顺序
    apply: "build", // 指定插件应用情景

    transformIndexHtml(html, ctx) {
      baseHtml = html;
      const result = html.replace('<!-- ssr -->', renderServer());
      return result
    },
    buildEnd(){
      // 여기서 fs시스템으로 처리.
    }
  }
}