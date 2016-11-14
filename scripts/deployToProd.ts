import pushToS3 from "./pushToS3";
import makeVersionFile from "./makeVersionFile";

const NEW_TAG: string = (new Date()).toISOString().replace(/:/g, "-");

async function deployToProd() {
  await pushToS3(NEW_TAG);
  makeVersionFile(NEW_TAG);
}

deployToProd();
