const Koa = require("koa");
const app = new Koa();

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
    let postData = await parsePostData(ctx);
    ctx.body = postData;
  } else {
    ctx.body = "404!";
  }
});

// 解析接收到的表单数据
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.on("data", (data) => {
        postdata += data;
      });
      ctx.req.addListener("end", function () {
        let parseData = parseQueryStr(postdata);
        resolve(parseData);
      });
    } catch (error) {
      reject(error);
    }
  });
}

// 将接收到的数据json格式化
function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split("&");
  console.log(queryStrList);
  // for of
  //直接是拿不bai到数组的index,可以du利用entries()方法将数组转换为可迭zhi代的对象entries();
  //注意第一个参数是index,第二个是数组单元;同理有keys()，values()方法;
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split("=");
    console.log(itemList);
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}

app.listen(3000, () => {
  console.log("[demo3] is starting at port 3000");
});
