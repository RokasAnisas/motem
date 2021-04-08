import fse from 'fs-extra';
import { parseModuleName } from "./parseModuleName";

export const addFile = ({
  filePath,
  moduleName,
  template,
}: AddFileProps): void => {
  const parsedTemplateArray = template.map((line) =>
    parseModuleName({ moduleName: moduleName, string: line })
  );
  const parsedTemplateStream = parsedTemplateArray.join('\r\n');

  fse.writeFileSync(filePath, parsedTemplateStream);
};

interface AddFileProps {
  filePath: string;
  moduleName: string;
  template: string[];
}
