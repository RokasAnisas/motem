import { parseModuleName } from "../parseModuleName";

describe("parseModuleName", () => {
  it("Should parse camelCase module name", () => {
    const testString = "path/to/[moduleName]";
    const testModuleName = "TEST NAME";
    const result = parseModuleName({
      moduleName: testModuleName,
      string: testString,
    });

    expect(result).toBe('path/to/testName');
  });

  it("Should parse multiple [moduleNames] per string", () => {
    const testString = "const [ModuleName]: FC<[ModuleName]Props>";
    const testModuleName = "My new component";
    const result = parseModuleName({
      moduleName: testModuleName,
      string: testString,
    });

    expect(result).toBe('const MyNewComponent: FC<MyNewComponentProps>');
  });

  it("Should return the original string if [moduleName] not found", () => {
    const testString = "just a regular string";
    const testModuleName = "My new component";
    const result = parseModuleName({
      moduleName: testModuleName,
      string: testString,
    });

    expect(result).toBe(testString);
  });
});
