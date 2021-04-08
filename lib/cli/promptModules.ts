import prompts from "prompts";
import type { ModulePassport } from "./types/ModulePassport.type";

export const promptModules = async (
  filesList: ModulePassport[]
): Promise<PropmtResponse> => {
  const choices = filesList.map((file) => ({
    title: file.name || file.fileName,
    description: file.description,
    value: file,
  }));

  const moduleChice = await prompts({
    type: "select",
    name: "module",
    message: "Choose",
    choices: choices,
  });

  const moduleName = await prompts({
    type: "text",
    name: "name",
    message: "Enter module name:",
  });

  return { module: moduleChice.module, moduleName: moduleName.name };
};

interface PropmtResponse {
  module: ModulePassport;
  moduleName: string;
}
