import { ModifyFile } from './ModifyFile.type';
export interface Module {
  name: string;
  description?: string;
  add?: Array<{
    /**
     * Relative path from root to the directory where files will be created
     * (src/directory).
     */
    dirPath: string;
    checkAdditionalDirs?: string[];
    files: Array<{
      /**
       * [ModuleName].ts
       * Use the keyword file name to specify casing:
       * [moduleName] - camel case
       * [ModuleName] - pascal case
       * [module-name] - kebab case
       * [module_name] - snake case
       * [MODULE_NAME] - constant case
       */
      fileName: string;
      template: string[];
    }>;
  }>;
  modify?: Array<ModifyFile>;
}
