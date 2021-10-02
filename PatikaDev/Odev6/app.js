const Koa = require("koa");
const app = new Koa();

app.use(function* (next) {
  if (this.request.path === "/index") {
    this.response.body = `<h1>Home Page</h1>`;
  }
  if (this.request.path === "/about") {
    this.response.body = `<h1>About Page</h1>`;
  }
  if (this.request.path === "/contact") {
    this.response.body = `<h1>Contact Page</h1>`;
  }
});

app.listen(3000);
