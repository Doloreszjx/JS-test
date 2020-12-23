const Koa = require("koa");
const fs = require("fs");
const { resolve } = require("path");
const { rejects } = require("assert");
const app = new Koa();

app.use(async (ctx) => {
  let url = ctx.request.url;
  let html = await route(url);
  ctx.body = html;
});

app.listen(3000, () => {
  console.log("[demo5] is starting at port 3000");
});

// 根据url对应不同路径
async function route(url) {
  let page = "404.html";
  switch (url) {
    case "/":
      page = "index.html";
      break;
    case "/index":
      page = "index.html";
      break;
    case "/detail":
      page = "detail.html";
      break;
    case "/user":
      page = "user.html";
      break;
    default:
      break;
  }
  let html = await render(page);
  return html;
}

// 根据不同路径，读取对应文件
function render(page) {
  return new Promise((resolve, reject) => {
    let pageUrl = `./pages/${page}`;
    fs.readFile(pageUrl, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
