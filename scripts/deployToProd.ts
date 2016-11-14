import pushToS3 from "./pushToS3";

const NEW_TAG: string = (new Date()).toISOString().replace(/:/g, "-");

async function deployToProd() {
  await pushToS3(NEW_TAG);
}

deployToProd();
