import prompts from "prompts";
import type { ModulePassport } from "./ModulePassport.type";

export const promptModules = async (filesList: ModulePassport[]): Promise<ModulePassport> => {
  const choices = filesList.map((file) => ({
    title: file.name || file.fileName,
    description: file.description,
    value: file,
  }));

  const result = await prompts({
    type: "select",
    name: "module",
    message: "Choose",
    choices: choices,
  });

  return result.module;
};
