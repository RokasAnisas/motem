// import { addFile } from "./addFile";
import { parseModuleName } from "./parseModuleName";
import { readModule } from "./readModule";
import { PromptResponse } from "./types/PromptResponse.type";

export const generateModule = ({ moduleName, moduleHead }: PromptResponse) => {
  const moduleContents = readModule(moduleHead.path);

  // Add files
  moduleContents.add?.forEach((directory) => {
    directory.files.map((file) => {
      const filePath = parseModuleName({
        string: `${directory.directory}`,
        moduleName: moduleName,
      });

      // addFile({
      //   filePath: filePath,
      //   moduleName: moduleName,
      //   template: file.template,
      // });
    });
  });

  // Modify files
};
