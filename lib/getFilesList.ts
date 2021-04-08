import fse from "fs-extra";

export const getFilesList = (dir: string): void => {
  if (typeof dir === "string") {
    const directoryPath = `${process.cwd()}/${dir}`;

    console.log(directoryPath);

    fse.readdirSync(directoryPath).forEach((file) => {
      console.log(file);
    });
  }
};
