const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  // ctx.body = `hello word ${ctx.query}`;
  ctx.body = ctx.querystring;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("[demo8] is starting at port 3000");
});
