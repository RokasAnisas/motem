import fse from "fs-extra";
import type { FileObj } from "./fileObj.type";

export const compileModule = (fileObj: FileObj): void => {
  const moduleConfig = fse.readFileSync(fileObj.path, 'utf-8');

  console.log(moduleConfig);
};
