export interface ModifyFile {
  filePath: string;
  lines: Array<{
    hook: string;
    appendLines: string[];
  }>;
}
