import fse from "fs-extra";
import type { Module } from "./types/Module.type";

export const readModule = (filePath: string): Module => {
  const moduleFileString = fse.readFileSync(filePath, "utf-8");
  const parsedModule: Module = JSON.parse(moduleFileString);

  return parsedModule;
};
