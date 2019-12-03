"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
exports.default = {
    getCurrentDirectory: function () {
        return process.cwd();
    },
    directoryExists: function (filePath) {
        return fs_1.default.existsSync(filePath);
    },
    createDirectory: function (dirPath) {
        fs_1.default.mkdirSync(dirPath);
    },
    createFiles: function (dirPath) {
        var files = ["Index.vue", "index.spec.js", "index.stories.js"];
        files.forEach(function (file) {
            fs_1.default.closeSync(fs_1.default.openSync(dirPath + "/" + file, "w"));
        });
    }
};
