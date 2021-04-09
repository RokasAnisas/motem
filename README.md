# MOTEM [WIP]

Simple modular templates generator

# Usage

1. `npm i motem -D` or `yarn add motem -D`.
2. Create a directory for your templates in the root directory e.g.: `root/templates`.
3. Create at least one `json` template, use the following code as a starter:
```
{
  "name": "Component",
  "description": "Generate a component",
  "add": [
    {
      "dirPath": "src/components/[ModuleName]",
      "files": [
        {
          "name": "[ModuleName].tsx",
          "template": [
            "import React from 'react';",
            "",
            "const [ModuleName] = () => {",
            " const className = '[module-name]';",
            "}"
          ]
        }
      ]
    }
  ]
}

```
4. run `motem templates`.

!Important
- The magic keyword is `[ModuleName]`, `[moduleName]`, `[module-name]`, `[module_name]`, `[MODULE_NAME]`. The case will transform the module name that you will pass to it.