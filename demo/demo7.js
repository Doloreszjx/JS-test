// 层级路由

const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

// // 层级添加方式：1. 前缀
// const router = new Router({
//   prefix:'/jspang'
// })

// /home路径下的页面
let home = new Router();
home
  .get("/home_1", async (ctx) => {
    ctx.body = "home_1";
  })
  .get("/home_2", async (ctx) => {
    ctx.body = "home_2";
  });

// /page路径下的页面
let page = new Router();
page
  .get("/page_1", async (ctx) => {
    ctx.body = "page_1";
  })
  .get("/page_2", async (ctx) => {
    ctx.body = "page_2";
  });

// 挂载所有的子页面
let index = new Router();
index
  .use("/home", home.routes(), home.allowedMethods())
  .use("/page", page.routes(), page.allowedMethods());

app.use(index.routes()).use(index.allowedMethods());

app.listen(3000, () => {
  console.log("[demo7] is starting at port 3000");
});
