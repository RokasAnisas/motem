import fse from "fs-extra";
import { ModifyFile } from "./types/ModifyFile.type";

export const modifyFile = ({ filePath, lines }: ModifyFile): void => {
  const fileStream = fse.readFileSync(filePath, "utf-8");
  let modifiedFileStream: string = fileStream;

  lines.forEach((element) => {
    const linesArray = [...element.appendLines, element.hook];
    const parsedTemplateStream = linesArray.join("\r\n");

    modifiedFileStream = modifiedFileStream.replace(element.hook, parsedTemplateStream);
  });

  fse.writeFileSync(filePath, modifiedFileStream, 'utf8');
};
