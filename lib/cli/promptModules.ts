import prompts from "prompts";
import type { FileObj } from "./fileObj.type";

export const promptModules = async (filesList: FileObj[]) => {
  const choices = filesList.map((file) => ({
    title: file.name,
    value: file,
  }));

  await prompts({
    type: "select",
    name: "module",
    message: "Choose",
    choices: choices,
  });
};
