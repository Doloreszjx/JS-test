// const Koa = require("koa");
// const app = new Koa();

// app.use(async (ctx) => {
//   ctx.body = "hello world";
// });

// app.listen(3001);
// console.log("starting at port 3001");

function longTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("one second age");
    }, 1000);
  });
}

async function test() {
  const v = await longTime();
  console.log(v);
}

test();
