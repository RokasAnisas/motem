import fse from "fs-extra";
import type { FileObj } from "./fileObj.type";

export const getFilesList = (dirPath: string): FileObj[] => {
  console.log(dirPath);

  const fileList = fse.readdirSync(dirPath).map((file) => ({
    name: file,
    path: `${process.cwd()}/${file}`,
  }));

  return fileList;
};
