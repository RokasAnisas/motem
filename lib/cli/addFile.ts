import fse from 'fs';
import { parseModuleName } from './parseModuleName';
import { printMessage } from './printMessage';
import { spreadArray } from './spreadArray';

export const addFile = ({
  filePath,
  fileName,
  moduleName,
  template,
}: AddFileProps): void => {
  const parsedTemplateArray = template.map(line =>
    parseModuleName({ moduleName: moduleName, string: line })
  );
  const parsedTemplateStream = spreadArray(parsedTemplateArray);

  fse.writeFileSync(filePath, parsedTemplateStream);
  printMessage({ type: 'success', message: `+ ${fileName}` });
};

interface AddFileProps {
  filePath: string;
  fileName: string;
  moduleName: string;
  template: string[];
}
