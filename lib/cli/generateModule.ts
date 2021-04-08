import { PropmtResponse } from "./types/PromptResponse.type";

export const generateModule = ({
  moduleName,
  moduleHead,
}: PropmtResponse) => {
  console.log(moduleName);
  console.log(moduleHead);
};
