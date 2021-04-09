import prompts from "prompts";
import type { ModuleHead } from "./types/ModuleHead.type";

export const promptModuleName = async (): Promise<string> => {
  const moduleName = await prompts({
    type: "text",
    name: "name",
    message: "Enter module name:",
  });

  return moduleName.name;
};
