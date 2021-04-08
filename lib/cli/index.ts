#! /usr/bin/env node
import { getFilesList } from "./getFilesList";

const dirParameter = process.argv.slice(2)[0];
const directoryPath = `${process.cwd()}/${dirParameter}`;

getFilesList(directoryPath);
