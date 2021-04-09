import fse from 'fs-extra';
import { ModifyFile } from "./types/ModifyFile.type";

export const modifyFile = ({ filePath, lines }: ModifyFile): void => {
  const moduleFileString = fse.readFileSync(filePath, "utf-8");

  console.log(moduleFileString);
};
