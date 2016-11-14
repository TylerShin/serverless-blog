import * as DeployConfig from "./config";
const s3 = require("s3");

export default function pushToS3(NEW_TAG: string) {
  console.log("Start to upload dist files to S3");

  const s3Client = s3.createClient(DeployConfig.S3_CLIENT_OPTIONS);

  let uploader: DeployConfig.S3ClientUploaderOptions;

  return new Promise((resolve, reject) => {
    uploader = s3Client.uploadFile({
      localFile: DeployConfig.DEPLOY_TARGET_FILE,
      s3Params: {
        Bucket: DeployConfig.BUCKET,
        Key: `${DeployConfig.PREFIX}/${NEW_TAG}_bundle.js`,
        CacheControl: "public, max-age=604800",
      },
    });

    uploader.on("error", (err: Error) => {
      console.error("unable to sync:", err.stack);
      reject(err);
    });
    uploader.on("progress", () => {
      console.log("progress", uploader.progressAmount, uploader.progressTotal);
    });
    uploader.on("end", (res: any) => {
      console.log("result", res);
      console.log("END to upload dist files to S3");
      resolve();
    });
  })
    .catch((err) => {
      console.error(err);
    });
}
