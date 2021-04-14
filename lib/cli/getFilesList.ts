import fse from "fs";
import { readModule } from "./readModule";
import type { ModuleHead } from "./types/ModuleHead.type";

export const getFilesList = (dirPath: string): ModuleHead[] => {
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
