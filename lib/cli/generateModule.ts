import fse from 'fs-extra';

import { addFile } from "./addFile";
import { parseModuleName } from "./parseModuleName";
import { readModule } from "./readModule";
import { PromptResponse } from "./types/PromptResponse.type";

export const generateModule = ({ moduleName, moduleHead }: PromptResponse) => {
  const moduleContents = readModule(moduleHead.path);

  // Add files
  moduleContents.add?.forEach((directory) => {
    directory.files.map((file) => {
      const dirNameParsed = parseModuleName({
        string: `${directory.directory}`,
        moduleName: moduleName,
      });
      const fileNameParsed = parseModuleName({
        string: `${file.fileName}`,
        moduleName: moduleName,
      });
      const dirPath = `${process.cwd()}/${dirNameParsed}`;
      const filePath = `${process.cwd()}/${dirNameParsed}/${fileNameParsed}`;

      fse.mkdirSync(dirPath, { recursive: true });

      addFile({
        filePath: filePath,
        moduleName: moduleName,
        template: file.template,
      });
    });
  });

  // Modify files
};
