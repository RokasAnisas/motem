interface Module {
  add?: Array<{
    directory: string;
    files: Array<{
      fileName: string;
      template: string;
    }>;
  }>;
  modify?: Array<{
    file: string;
    from: string;
    to: string;
  }>;
}
