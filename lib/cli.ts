#! /usr/bin/env node
import fse from 'fs-extra';

const dirParameter = process.argv.slice(2)[0];

if (typeof dirParameter === "string") {
  const directoryPath = `${process.cwd()}/${dirParameter}`;

  console.log(directoryPath);

  fse.readdirSync(directoryPath).forEach(file => {
    console.log(file);
  });
}
