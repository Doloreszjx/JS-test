const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

// allowedMethods处理的业务是当所有路由中间件执行完成之后,
//若ctx.status为空或者404的时候,丰富response对象的header头.
app.use(router.routes()).use(router.allowedMethods());

router
  .get("/", (ctx, next) => {
    ctx.body = "index.js";
  })
  .get("/user", (ctx, next) => {
    ctx.body = "user.js";
  });

app.listen("3000", () => {
  console.log("[demo6] is starting at port 3000");
});
