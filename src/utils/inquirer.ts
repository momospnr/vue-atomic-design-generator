import inquirer from "inquirer";

export default {
  askComponentType: () => {
    const questions = [
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
        validate: (input: string) => {
          if (input.length) {
            return true;
          } else {
            return "Please Enter ComponentName.";
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  confirmCreateComponent: () => {
    const questions = [
      {
        name: "confirm",
        type: "confirm",
        message: "Create the component?"
      }
    ];
    return inquirer.prompt(questions);
  }
};
