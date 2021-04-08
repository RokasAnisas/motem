import fse from 'fs-extra';
import { parseModuleName } from "./parseModuleName";

export const addFile = ({
  filePath,
  moduleName,
  template,
}: AddFileProps): void => {
  console.log(filePath);
  console.log(moduleName);

  const parsedTemplateArray = template.map((line) =>
    parseModuleName({ moduleName: moduleName, string: line })
  );

  fse.writeFileSync(filePath, parsedTemplateArray.toString());
};

interface AddFileProps {
  filePath: string;
  moduleName: string;
  template: string[];
}
