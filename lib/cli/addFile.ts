export const addFile = ({
  filePath,
  moduleName,
  template,
}: AddFileProps): void => {
  console.log(filePath);
  console.log(moduleName);
  console.log(template);
};

interface AddFileProps {
  filePath: string;
  moduleName: string;
  template: string[];
}
