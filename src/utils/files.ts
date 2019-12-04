import fs from "fs";

const jsFiles = fs.readdirSync(`${__dirname}/../../templates`).map(path => {
  return path.replace(".mst", "");
});

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
  createFiles: (dirPath: string, rendered: string[]) => {
    files.createDirectoryIfExists(dirPath);
    jsFiles.forEach((file, index) => {
      fs.writeFileSync(`${dirPath}/${file}`, rendered[index], {encoding: "utf8", flag: "wx"});
    });
  }
};

export default files;
