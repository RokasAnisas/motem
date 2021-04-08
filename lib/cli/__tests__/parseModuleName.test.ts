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
});
