#! /usr/bin/env node
import { getFilesList } from "./getFilesList";

const dirParameter = process.argv.slice(2)[0];

getFilesList(dirParameter);
