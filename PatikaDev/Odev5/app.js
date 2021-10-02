var http = require("http");

http
  .createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>INDEX SAYFASI</h1>");
    } else if (url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>ABOUT SAYFASI</h1>");
    } else if (url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>CONTACT SAYFASI</h1>");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h2>404 SAYFA BULUNAMADI</h1>");
    }

    res.end();
  })
  .listen(5000);
