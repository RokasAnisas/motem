import fse from "fs-extra";
import type { FileObj } from "./fileObj.type";
import type { Module } from "../Module.type";

export const compileModule = (fileObj: FileObj): void => {
  const moduleFileString = fse.readFileSync(fileObj.path, "utf-8");
  const parsed: Module = JSON.parse(moduleFileString);

  console.log(parsed.name);
};
