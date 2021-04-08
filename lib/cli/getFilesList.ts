import fse from "fs-extra";

export const getFilesList = (dirPath: string): void => {
  console.log(dirPath);

  fse.readdirSync(dirPath).forEach((file) => {
    console.log(file);
  });
};
