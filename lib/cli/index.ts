#! /usr/bin/env node
import { getFilesList } from "./getFilesList";
import { generateModule } from "./generateModule";
import { promptModules } from "./promptModules";

const dirParameter = process.argv.slice(2)[0];
const directoryPath = `${process.cwd()}/${dirParameter}`;

const modulesList = getFilesList(directoryPath)

promptModules(modulesList).then(value => generateModule(value));

// modulesList.forEach((module) => {
//   compileModule(module);
// });
