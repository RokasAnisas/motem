export interface Module {
  name: string;
  description?: string;
  add?: Array<{
    /**
     * Relative path from root to the directory where files will be created
     * (src/directory).
     */
    directory: string;
    files: Array<{
      /**
       * [Filename].ts
       * Use the keyword file name to specify casing:
       * [filenName] - camel case
       * [FileName] - pascal case
       * [file-name] - kebab case
       * [file_name] - snake case
       * [FILE_NAME] - constant case
       */
      fileName: string;
      template: string;
    }>;
  }>;
  modify?: Array<{
    /**
     * Relative path from root to the file (src/directory/file.js).
     */
    file: string;
    from: string;
    to: string;
  }>;
}
