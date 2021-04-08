#! /usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import fse from 'fs-extra';
// import path from "path";

const getYargs = yargs(hideBin(process.argv));
const argv = getYargs.argv;
console.log(argv.dir);

if (typeof argv.dir === "string") {
  const directoryPath = `${process.cwd()}/${argv.dir}`;

  console.log(directoryPath);

  fse.readdirSync(directoryPath).forEach(file => {
    console.log(file);
  });
}
