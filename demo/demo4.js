const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const app = new Koa();

app.use(bodyparser());
app.use(async (ctx) => {
  if (ctx.url === "/" && ctx.method === "GET") {
    let htmlForm = `
      <h1>we will use post method to post this from.</h1>
      <form method="POST" action="/">
        username: <input name="username" />
        password: <input name="password" />
        <button type="submit">submit</button>
      </form>
    `;
    ctx.body = htmlForm;
  } else if (ctx.url === "/" && ctx.method === "POST") {
    let postData = ctx.request.body;
    ctx.body = postData;
  } else {
    ctx.body = "404!";
  }
});

app.listen(8090, () => {
  console.log("[demo3] is starting at port 8090");
});
