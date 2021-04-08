#! /usr/bin/env node
import { getFilesList } from "./getFilesList";
import { compileModule } from "./compileModule";

const dirParameter = process.argv.slice(2)[0];
const directoryPath = `${process.cwd()}/${dirParameter}`;

const modulesList = getFilesList(directoryPath);

modulesList.forEach((module) => {
  compileModule(module);
});
