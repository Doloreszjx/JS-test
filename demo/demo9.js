const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
  if (ctx.url === "/index") {
    // ctx.cookies.set(name, value, [options])
    ctx.cookies.set("myName", "Dolores", {
      domain: "127.0.0.1", // cookie所在域名；
      path: "/index", //cookie所在路径；
      maxAge: "1000*60*60*24", //cookie有效时长；
      expires: "2020-12-28", //cookies失效时间；
      httpOnly: false,
      overwrite: false,
    });
    ctx.body = "cookie is okk";
  } else {
    if (ctx.cookies.get("myName")) {
      ctx.body = ctx.cookies.get("myName");
    } else {
      ctx.body = "cookie is none";
    }
  }
});

app.listen(8080, () => {
  console.log("[demo9] is starting at port 8080");
});
