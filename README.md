# MOTEM

Simple modular templates generator

# Usage

1. `npm i motem -D` or `yarn add motem -D`.
2. Create a directory for your templates in the root directory e.g.: `root/templates`.
3. Create at least one `json` template, use the following code as a starter:
```json
{
  "name": "Component",
  "description": "Generate a component",
  "add": [
    {
      "dirPath": "src/components/[ModuleName]",
      "files": [
        {
          "fileName": "[ModuleName].tsx",
          "template": [
            "import React from 'react';",
            "import type { [ModuleName]Props } from './[ModuleName].props';",
            "",
            "const [ModuleName] = ({ label }: [ModuleName]Props) => {",
            "  const className = '[module-name]';",
            "  return <div className={className}>{label}</div>",
            "}",
            "",
            "export default [ModuleName];",
            ""
          ]
        },
        {
          "fileName": "[ModuleName].props.ts",
          "template": [
            "export interface [ModuleName]Props {",
            "  label: string;",
            "}",
            ""
          ]
        },
        {
          "fileName": "index.ts",
          "template": [
            "export { default } from './[ModuleName]';",
            ""
          ]
        }
      ]
    }
  ],
  "modify": [
    {
      "filePath": "src/module.ts",
      "lines": [
        {
          "hook": "// IMPORT_MODULE",
          "appendLines": [
            "import [ModuleName] from './components/[ModuleName]';"
          ]
        },
        {
          "hook": "/* ADD_UNION_TYPE */",
          "appendLine": "| '[module-name]'"
        }
      ]
    }
  ]
}

```
4. run `motem templates`.

!Important
- The magic keyword is `[ModuleName]`, `[moduleName]`, `[module-name]`, `[module_name]`, `[MODULE_NAME]`. The case will transform the module name that you will pass to it.


## Parameters
| Parameter                      | Type             | Required | Description                                                                                                                                  |
|--------------------------------|------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| name                           | String           | Yes      | The name will be displayed in the cli                                                                                                        |
| description                    | String           | No       | The description will be displayed next to name in the cli                                                                                    |
| add                            | Array            | No       | Array of files and templates and the directory in which that you want to create                                                              |
| add[0].dirPath                 | String           | Yes      | Relative path(from where motem command will be launched) to directory where the files will be added                                          |
| add[0].files                   | Array            | Yes      | Array of files and templates that you want to create                                                                                         |
| add[0].files.fileName          | String           | Yes      | Enter the file name that will be added use [ModuleName] syntax that will be replaced with user input.                                        |
| add[0].files.template          | Array of Strings | Yes      | Write your template for the file here, each new line, should be a new array item. [ModuleName] syntax also works here.                       |
| modify                         | Array            | No       | List of files you want to modify                                                                                                             |
| modify[0].filePath             | String           | Yes      | Relative path(from where motem command will be launched) to the file you want to modify                                                      |
| modify[0].lines                | Array            | Yes      | Array of a specific object, where you describe the lines you want to add.                                                                    |
| modify[0].lines[0].hook        | String           | Yes      | A string (usually a comment), that will be used to add new lines. NOTE, the hook will be automatically added at the end of your added lines. |
| modify[0].lines[0].appendLines | Array of Strings | No       | Append multiple (or a single) lines. Hook will be added as a new line after  your lines.                                                     |
| modify[0].lines[0].appendLine  | String           | No       | Append an inline string. Hook will be added after a space of your string.                                                                    |

