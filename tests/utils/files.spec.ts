import files from "../../src/utils/files";
import fs from "fs";
import path from "path";
import rimraf from "rimraf";

const testDirectoryName = "testDirecotry";
const testDirectory = `${process.cwd()}/tests/${testDirectoryName}`;
const testRendered: string[] = ["a", "b", "c"];

describe("files", () => {
  test("should get current working directory", () => {
    expect(path.basename(files.getCurrentDirectory())).toBe(
      "vue-atomic-design-generator"
    );
  });
  test("should exist a directry", () => {
    expect(files.directoryExists(process.cwd())).toBe(true);
  });
  test("should be able to create a directory", () => {
    files.createDirectory(testDirectory);
    expect(path.basename(testDirectory)).toBe(testDirectoryName);
    rimraf.sync(testDirectory);
  });
  test("should be able to create a directory if the directory doesnt exist", () => {
    files.createDirectoryIfExists(testDirectory);
    expect(path.basename(testDirectory)).toBe(testDirectoryName);
    rimraf.sync(testDirectory);
  });
  test("should be able to create files", () => {
    files.createFiles(testDirectory, testRendered);
    expect(fs.existsSync(`${testDirectory}/Index.vue`)).toBe(true);
    rimraf.sync(testDirectory);
  });
});
