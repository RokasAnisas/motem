import fse from "fs-extra";
import type { FileObj } from "./fileObj.type";

export const compileModule = (fileObj: FileObj): void => {
  const moduleFileString = fse.readFileSync(fileObj.path, 'utf-8');
  const parsed = JSON.parse(moduleFileString);

  console.log(parsed);
};
