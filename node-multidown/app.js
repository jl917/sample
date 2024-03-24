const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("public"));

function getRange(range) {
  var match = /bytes=([0-9]*)-([0-9]*)/.exec(range);
  const requestRange = {};
  if (match) {
    if (match[1]) requestRange.start = Number(match[1]);
    if (match[2]) requestRange.end = Number(match[2]);
  }
  return requestRange;
}

app.get("/api/getFile", async (req, res) => {
  const { filename } = req.query;
  console.log(req.method);

  const { size } = fs.statSync(path.join(__dirname, "./files/", filename));

  if(req.method === 'HEAD'){
    res.set("content-length", size);
  }
  const range = req.headers["range"];

  if (!range) {
    fs.createReadStream(path.join(__dirname, "./files/", filename)).pipe(res);
    // res.sendFile(path.join(__dirname, "./files/", filename));
    return;
  }
  const { start, end } = getRange(range);

  if (start >= size || end >= size) {
    console.log(123);
    res.status(416);
    res.send("206");
    return;
  }

  res.status(206);
  res.set("Accept-Ranges", "bytes");
  res.set("Content-Range", `bytes ${start}-${end ? end : size - 1}/${size}`);

  fs.createReadStream(path.join(__dirname, "./files/", filename), {start, end}).pipe(res)

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
