import fs from "fs";
import path from "path";

export default {
  getCurrentDirectory: () => {
    return process.cwd();
  },
  directoryExists: (filePath: string) => {
    return fs.existsSync(filePath);
  },
  createDirectory: (dirPath: string) => {
    fs.mkdirSync(dirPath);
  },
  createFiles: (dirPath: string) => {
    const files = ["Index.vue", "index.spec.js", "index.stories.js"];
    files.forEach(file => {
      fs.closeSync(fs.openSync(`${dirPath}/${file}`, "w"));
    });
  }
};
