import fse from "fs-extra";
import { parseModuleName } from "./parseModuleName";
import { printMessage } from "./printMessage";
import { spreadArray } from "./spreadArray";
import { ModifyFile } from "./types/ModifyFile.type";

export const modifyFile = ({
  filePath,
  lines,
  moduleName,
}: ModifyFileProps): void => {
  const fileStream = fse.readFileSync(filePath, "utf-8");
  let modifiedFileStream: string = fileStream;

  lines.forEach((element) => {
    const parsedLines = element.appendLines.map((line) => {
      return parseModuleName({ moduleName: moduleName, string: line });
    });
    const linesArray = [...parsedLines, element.hook];
    const parsedTemplateStream = spreadArray(linesArray);

    modifiedFileStream = modifiedFileStream.replace(
      element.hook,
      parsedTemplateStream
    );
  });

  printMessage({ type: "warning", message: `~ ${lines.length} lines modified` });

  fse.writeFileSync(filePath, modifiedFileStream, "utf8");
};

interface ModifyFileProps extends ModifyFile {
  moduleName: string;
}
