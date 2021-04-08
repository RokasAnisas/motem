#! /usr/bin/env node
import { getFilesList } from "./getFilesList";
import { compileModule } from "./compileModule";
import { promptModules } from "./promptModules";

const dirParameter = process.argv.slice(2)[0];
const directoryPath = `${process.cwd()}/${dirParameter}`;

const modulesList = getFilesList(directoryPath)

promptModules(modulesList);

// modulesList.forEach((module) => {
//   compileModule(module);
// });
