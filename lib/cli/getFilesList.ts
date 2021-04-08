import fse from "fs-extra";
import { readModule } from "./readModule";
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
    const filePath = `${dirPath}/${file}`;
    const moduleContents = readModule(filePath);

    return {
      fileName: file,
      path: filePath,
      name: moduleContents.name,
      description: moduleContents.description,
    };
  });

  return fileList;
};
