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

  it("Should parse PascalCase module name", () => {
    const testString = "path/to/[ModuleName]";
    const testModuleName = "TEST NAME";
    const result = parseModuleName({
      moduleName: testModuleName,
      string: testString,
    });

    expect(result).toBe('path/to/TestName');
  });

  it("Should parse kebab-case module name", () => {
    const testString = "path/to/[module-name]";
    const testModuleName = "TEST NAME";
    const result = parseModuleName({
      moduleName: testModuleName,
      string: testString,
    });

    expect(result).toBe('path/to/test-name');
  });

  it("Should parse snake_case module name", () => {
    const testString = "path/to/[module_name]";
    const testModuleName = "TEST NAME";
    const result = parseModuleName({
      moduleName: testModuleName,
      string: testString,
    });

    expect(result).toBe('path/to/test_name');
  });

  it("Should parse CONSTANT_NAME module name", () => {
    const testString = "path/to/[MODULE_NAME]";
    const testModuleName = "test-name";
    const result = parseModuleName({
      moduleName: testModuleName,
      string: testString,
    });

    expect(result).toBe('path/to/TEST_NAME');
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
