import fse from 'fs';
import { PromptResponse } from './types/PromptResponse.type';
import { readModule } from './readModule';
import { parseModuleName } from './parseModuleName';

export const checkDuplicates = async ({
  moduleType,
  moduleName,
}: PromptResponse): Promise<boolean> => {
  const moduleContents = readModule(moduleType.path);

  const results: boolean[] | undefined = moduleContents.add?.map(dir => {
    const dirNameParsed = parseModuleName({
      string: `${dir.dirPath}`,
      moduleName: moduleName,
    });

    // If module is added to a shared dir like `components/file.tsx`
    if (dir.dirPath === dirNameParsed) {
      const fileResults: boolean[] | undefined = dir.files.map(file => {
        const fileNameParsed = parseModuleName({
          string: `${file.fileName}`,
          moduleName: moduleName,
        });
        return fse.existsSync(`${dirNameParsed}/${fileNameParsed}`);
      });

      return !!fileResults && fileResults.includes(true);
    }

    const dirPath = `${process.cwd()}/${dirNameParsed}`;
    const dirCheckResult = fse.existsSync(`${dirPath}`);

    return dirCheckResult;
  });

  return !!results && results.includes(true);
};
