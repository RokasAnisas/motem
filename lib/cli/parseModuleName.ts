import Case from 'case';

export const parseModuleName = ({
  moduleName,
  string,
}: ParseModuleNameProps): string => {
  const regexMatch = RegExp(
    /\[(?:M(?:ODULE_NAME|oduleName)|module(?:[\x2D_]n|N)ame)\]/g
  );

  const moduleNamePlaceholderArr = Array.from(
    string.matchAll(regexMatch),
    m => m[0]
  );

  if (moduleNamePlaceholderArr.length > 0) {
    let resultLine: string = string;
    moduleNamePlaceholderArr.forEach(hookLine => {
      const sanitizedHookLine = hookLine.replace('[', '').replace(']', '');
      const caseValue = Case.of(sanitizedHookLine) as CaseValue;
      const parsedModuleName = Case[caseValue](moduleName);

      resultLine = resultLine.replace(hookLine, parsedModuleName);
    });

    return resultLine;
  }

  return string;
};

interface ParseModuleNameProps {
  moduleName: string;
  string: string;
}

type CaseValue = 'snake' | 'pascal' | 'camel' | 'kebab' | 'constant';
