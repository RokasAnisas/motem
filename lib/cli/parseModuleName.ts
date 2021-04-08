import Case from "case";

export const parseModuleName = ({
  moduleName,
  string,
}: ParseModuleNameProps): string => {
  const regexMatch = /\[(?:M(?:ODULE_NAME|oduleName)|module(?:[\x2D_]n|N)ame)\]/;

  const moduleNamePlaceholder = string.match(regexMatch)![0];
  const moduleNamePlaceholderStripped = moduleNamePlaceholder
    .replace("[", "")
    .replace("]", "");
  const caseValue = Case.of(moduleNamePlaceholderStripped) as CaseValue;

  const parsedModuleName = Case[caseValue](moduleName);
  const resultValue = string.replace(moduleNamePlaceholder, parsedModuleName);

  console.log(resultValue);

  return resultValue;
};

interface ParseModuleNameProps {
  moduleName: string;
  string: string;
}

type CaseValue = "snake" | "pascal" | "camel" | "kebab" | "constant";
