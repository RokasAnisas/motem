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

  console.log(parsedTemplateArray);
};

interface AddFileProps {
  filePath: string;
  moduleName: string;
  template: string[];
}
