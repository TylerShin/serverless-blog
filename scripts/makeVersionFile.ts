import * as FS from "fs-extra";
import * as DeployConfig from "./config";

export default function makeVersionFile(TAG: string) {
  FS.writeFileSync(`${DeployConfig.APP_DEST}${DeployConfig.VERSION_FILE_NAME}`, TAG);
}
