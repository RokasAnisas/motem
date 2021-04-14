import fse from "fs";
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
    if (element.appendLines) {
      const parsedLines = element.appendLines.map((line) => {
        return parseModuleName({ moduleName: moduleName, string: line });
      });
      const linesArray = [...parsedLines, element.hook];
      const parsedTemplateStream = spreadArray(linesArray);

      modifiedFileStream = modifiedFileStream.replace(
        element.hook,
        parsedTemplateStream
      );
    }

    if (element.appendLine) {
      const parsedLine = parseModuleName({
        moduleName: moduleName,
        string: element.appendLine,
      });
      const lineValue = `${parsedLine} ${element.hook}`;

      modifiedFileStream = modifiedFileStream.replace(element.hook, lineValue);
    }
  });

  printMessage({
    type: "warning",
    message: `~ ${lines.length} lines modified`,
  });

  fse.writeFileSync(filePath, modifiedFileStream, "utf8");
};

interface ModifyFileProps extends ModifyFile {
  moduleName: string;
}
