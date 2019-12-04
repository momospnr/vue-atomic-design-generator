"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mustache_1 = __importDefault(require("mustache"));
var fs_1 = __importDefault(require("fs"));
var templateDir = __dirname + "/../../templates";
var templateFiles = fs_1.default.readdirSync(templateDir);
var templates = [];
templateFiles.forEach(function (templateFile) {
    templates.push(fs_1.default.readFileSync(templateDir + "/" + templateFile, "utf8"));
});
exports.default = {
    renderFiles: function (component) {
        var rendered = [];
        templates.forEach(function (template) {
            rendered.push(mustache_1.default.render(template, component));
        });
        return rendered;
    }
};
