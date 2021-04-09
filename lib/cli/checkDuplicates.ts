import { PromptResponse } from "./types/PromptResponse.type";

export const checkDuplicates = async ({
  moduleType,
  moduleName,
}: PromptResponse) => {
  console.log(moduleType);
  console.log(moduleName);

  await new Promise(resolve => setTimeout(resolve, 1000));
};
