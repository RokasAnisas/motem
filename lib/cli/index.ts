#! /usr/bin/env node
import { checkDuplicates } from "./checkDuplicates";
import { getFilesList } from "./getFilesList";
import { promptModuleName } from "./promptModuleName";
// import { generateModule } from "./generateModule";
import { promptModuleType } from "./promptModuleType";

const dirParameter = process.argv.slice(2)[0];
const directoryPath = `${process.cwd()}/${dirParameter}`;

const modulesList = getFilesList(directoryPath);

// promptModules(modulesList).then(value => generateModule(value));
// promptModuleType(modulesList).then((value) => checkDuplicates(value));
promptModuleType(modulesList).then((moduleType) => {
  const promptName = () =>
    promptModuleName().then((moduleName) => {
      checkDuplicates({
        moduleType: moduleType,
        moduleName: moduleName,
      }).then(value => console.log(value));
    });
    promptName();
});
