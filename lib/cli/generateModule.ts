import fse from 'fs';

import { addFile } from './addFile';
import { parseModuleName } from './parseModuleName';
import { printMessage } from './printMessage';
import { readModule } from './readModule';
import { modifyFile } from './modifyFile';
import { PromptResponse } from './types/PromptResponse.type';

export const generateModule = ({
  moduleName,
  moduleType,
}: PromptResponse): void => {
  const moduleContents = readModule(moduleType.path);

  // Add files
  moduleContents.add?.forEach(directory => {
    const dirNameParsed = parseModuleName({
      string: `${directory.dirPath}`,
      moduleName: moduleName,
    });
    const dirPath = `${process.cwd()}/${dirNameParsed}`;
    // Generate directory
    fse.mkdirSync(dirPath, { recursive: true });
    printMessage({ type: 'title', message: `${dirNameParsed}:` });

    directory.files.map(file => {
      const fileNameParsed = parseModuleName({
        string: `${file.fileName}`,
        moduleName: moduleName,
      });
      const filePath = `${process.cwd()}/${dirNameParsed}/${fileNameParsed}`;

      addFile({
        filePath: filePath,
        fileName: fileNameParsed,
        moduleName: moduleName,
        template: file.template,
      });
    });
  });

  // Modify files
  moduleContents.modify?.forEach(file => {
    const filePath = `${process.cwd()}/${file.filePath}`;

    printMessage({ type: 'title', message: `${file.filePath}:` });
    modifyFile({
      filePath: filePath,
      lines: file.lines,
      moduleName: moduleName,
    });
  });
};
