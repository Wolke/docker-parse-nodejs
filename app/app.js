const fs = require('fs');
const express = require("express");
var app = express();
var path = require("path")

app.get("/bundle.js", (req, rep) => {
    fs.readFile(__dirname + "/dist/bundle.js", (err, data) => {
        if (err) {
            console.log(err);
        }
        rep.end(data);
    })
})
app.get("/bundle.js.map", (req, rep) => {
    fs.readFile(__dirname + "/dist/bundle.js.map", (err, data) => {
        if (err) {
            console.log(err);
        }
        rep.end(data);
    })
})

app.get("/", (req, rep) => {
    rep.end(renderFullPage());
});
app.get("/test", (req, rep) => {
    rep.end(renderFullPage());
});

function renderFullPage() {
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        </script>
      </head>
      <body>
        <container id="content"></container>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}
const server = app.listen(process.env.port || 3000, () => {
    console.log("listening");
});