import fs from "fs";

const files = {
  getCurrentDirectory: () => {
    return process.cwd();
  },
  directoryExists: (filePath: string) => {
    return fs.existsSync(filePath);
  },
  createDirectory: (dirPath: string) => {
    fs.mkdirSync(dirPath);
  },
  createDirectoryIfExists: (dirPath: string) => {
    if (!files.directoryExists(dirPath)) {
      files.createDirectory(dirPath);
    }
  },
  createFiles: (dirPath: string) => {
    const files = ["Index.vue", "index.spec.js", "index.stories.js"];
    files.forEach(file => {
      fs.closeSync(fs.openSync(`${dirPath}/${file}`, "w"));
    });
  }
};

export default files;
