"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
exports.default = {
    askComponentType: function () {
        var questions = [
            {
                name: "type",
                type: "list",
                choices: ["atoms", "molecules", "organisms", "pages"],
                message: "Select ComponentType"
            },
            {
                name: "name",
                type: "input",
                message: "Enter ComponentName using PascalCase:",
                validate: function (input) {
                    if (input.length) {
                        return true;
                    }
                    else {
                        return "Please Enter ComponentName.";
                    }
                }
            }
        ];
        return inquirer_1.default.prompt(questions);
    },
    confirmCreateComponent: function () {
        var questions = [
            {
                name: "confirm",
                type: "confirm",
                message: "Create the component?"
            }
        ];
        return inquirer_1.default.prompt(questions);
    }
};
