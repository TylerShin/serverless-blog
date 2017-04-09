const fs = require("fs");
const SERVICE_NAME = "tylor-blog";

export default function handler(event: any, context: any) {
  let ssr: any;
  let version: string;
  try {
    const ssrBuffer = fs.readFileSync("./bundle.js");
    version = fs.readFileSync("./version");
    const ssrString = ssrBuffer.toString();
    ssr = eval(ssrString);
  } catch (e) {
    console.log(e);
    context.done(e);
  }
  const path = event.path;

  let realPath = "/";
  if (path !== SERVICE_NAME) {
    realPath = path.replace(`${SERVICE_NAME}/`, "");
  }

  console.log("event ===================================", event);
  console.log("context ===================================", context);
  ssr.serverSideRender(realPath, `https://s3.amazonaws.com/tylor-blog-assets/desktop_web/${version}_bundle.js`)
    .then((result: any) => {
      const response = {
        statusCode: 200,
        headers: {
          "Content-Type": "text/html",
          "Access-Control-Allow-Origin": "*",
          "Cache-control": "max-age=300",
        },
        body: result,
      };
      context.done(null, response);
    })
    .catch((err: Error) => {
      console.error(err);
    });
}
