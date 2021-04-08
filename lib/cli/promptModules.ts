import prompts from "prompts";
import type { ModuleHead } from "./types/ModuleHead.type";
import { PromptResponse } from "./types/PromptResponse.type";

export const promptModules = async (
  filesList: ModuleHead[]
): Promise<PromptResponse> => {
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

  return { moduleHead: moduleChice.module, moduleName: moduleName.name };
};
