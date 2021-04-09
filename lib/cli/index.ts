#! /usr/bin/env node
import { checkDuplicates } from "./checkDuplicates";
import { getFilesList } from "./getFilesList";
import { promptModuleName } from "./promptModuleName";
import { generateModule } from "./generateModule";
import { promptModuleType } from "./promptModuleType";

const dirParameter = process.argv.slice(2)[0];
const directoryPath = `${process.cwd()}/${dirParameter}`;

const modulesList = getFilesList(directoryPath);

promptModuleType(modulesList).then((moduleType) => {
  const promptName = () =>
    promptModuleName().then((moduleName) => {
      checkDuplicates({
        moduleType: moduleType,
        moduleName: moduleName,
      }).then((moduleExists) => {
        if (moduleExists) {
          console.log(`${moduleName} exists!`);
          promptName();
        } else {
          generateModule({ moduleName: moduleName, moduleType: moduleType });
        }
      });
    });
  promptName();
});
