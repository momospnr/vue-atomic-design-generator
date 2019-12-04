"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var jsFiles = fs_1.default.readdirSync(__dirname + "/../../templates").map(function (path) {
    return path.replace(".mst", "");
});
var files = {
    getCurrentDirectory: function () {
        return process.cwd();
    },
    directoryExists: function (filePath) {
        return fs_1.default.existsSync(filePath);
    },
    createDirectory: function (dirPath) {
        fs_1.default.mkdirSync(dirPath);
    },
    createDirectoryIfExists: function (dirPath) {
        if (!files.directoryExists(dirPath)) {
            files.createDirectory(dirPath);
        }
    },
    createFiles: function (dirPath, rendered) {
        files.createDirectoryIfExists(dirPath);
        jsFiles.forEach(function (file, index) {
            fs_1.default.writeFileSync(dirPath + "/" + file, rendered[index], { encoding: "utf8", flag: "wx" });
        });
    }
};
exports.default = files;
