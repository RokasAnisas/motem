import { readModule } from "./readModule";
import { PropmtResponse } from "./types/PromptResponse.type";

export const generateModule = ({
  moduleName,
  moduleHead,
}: PropmtResponse) => {
  const moduleContents = readModule(moduleHead.path);
  console.log(moduleContents);

  // Add files

  // Modify files
};
