const Koa = require("koa");
const views = require("koa-views");
const path = require("path");

const app = new Koa();

// 加载模块引擎
// path.join(__dirname, dir): 拼接路径，__dirname：绝对路径
// path.resolve()中的/会被解析为根目录
app.use(
  views(path.join(__dirname, "./pages/view"), {
    extension: "ejs",
  })
);

app.use(async (ctx) => {
  let title = "hello world";
  await ctx.render("index", { title });
});

app.listen(3000, () => {
  console.log("[demo10] is starting at 3000");
});
