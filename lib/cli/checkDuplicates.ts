import fse from "fs-extra";
import { PromptResponse } from "./types/PromptResponse.type";
import { readModule } from "./readModule";
import { parseModuleName } from "./parseModuleName";

export const checkDuplicates = async ({
  moduleType,
  moduleName,
}: PromptResponse): Promise<boolean> => {
  const moduleContents = readModule(moduleType.path);

  const results: boolean[] | undefined = moduleContents.add?.map((dir) => {
    const dirNameParsed = parseModuleName({
      string: `${dir.directory}`,
      moduleName: moduleName,
    });
    console.log(dirNameParsed);
    const dirPath = `${process.cwd()}/${dirNameParsed}`;
    const dirCheckResult = fse.existsSync(`${dirPath}`);

    return dirCheckResult;
  });


  return !!results && results.includes(true);
};
