import fse from 'fs-extra';
import { parseModuleName } from "./parseModuleName";
import { printMessage } from './printMessage';

export const addFile = ({
  filePath,
  fileName,
  moduleName,
  template,
}: AddFileProps): void => {
  const parsedTemplateArray = template.map((line) =>
    parseModuleName({ moduleName: moduleName, string: line })
  );
  const parsedTemplateStream = parsedTemplateArray.join('\r\n');

  fse.writeFileSync(filePath, parsedTemplateStream);
  printMessage({ type: 'success', message: `${fileName}`});
};

interface AddFileProps {
  filePath: string;
  fileName: string;
  moduleName: string;
  template: string[];
}
