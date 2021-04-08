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
      "directory": "src/components/[FileName]",
      "files": [
        {
          "name": "[FileName].tsx",
          "template": [
            "import React from 'react';",
            "",
            "const [FileName] = () => {",
            "}"
          ]
        }
      ]
    }
  ]
}

```
4. run `motem templates`.