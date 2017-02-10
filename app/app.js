const fs = require('fs');
const express = require("express");
var app = express();
var path = require("path")
console.log(__dirname)
app.get("/bundle3001.js", (req, rep) => {
    fs.readFile(__dirname + "/dist/bundle3001.js", (err, data) => {
        if (err) {
            console.log(err);
        }
        rep.end(data);
    })
})
app.get("/bundle3000.js", (req, rep) => {
    fs.readFile(__dirname + "/dist/bundle3000.js", (err, data) => {
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
        <h1>` + process.env.port + `</h1>
        <container id="content"></container>
        <script src="/bundle` + process.env.port + `.js"></script>
      </body>
    </html>
  `;
}
const server = app.listen(process.env.port || 3000, () => {
    console.log("listening");
});