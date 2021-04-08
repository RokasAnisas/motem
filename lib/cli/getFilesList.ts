import fse from "fs-extra";
import type { FileObj } from "./fileObj.type";

export const getFilesList = (dirPath: string): FileObj[] => {
  const filteredFileList = fse.readdirSync(dirPath).filter((file) => {
    const ext = file.substr(file.lastIndexOf(".") + 1).toLowerCase();
    if (ext === "json") {
      return true;
    }
    return false;
  });

  const fileList = filteredFileList.map((file) => {
    return {
      name: file,
      path: `${dirPath}/${file}`,
    };
  });

  return fileList;
};
