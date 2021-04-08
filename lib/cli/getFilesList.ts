import fse from "fs-extra";

export const getFilesList = (dirPath: string): string[] => {
  console.log(dirPath);

  const fileList = fse.readdirSync(dirPath);

  return fileList;
};
