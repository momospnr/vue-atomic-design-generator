import clear from "clear";
import chalk from "chalk";
import figlet from "figlet";
import inquirer from "./utils/inquirer";
import files from "./utils/files";
import render from "./utils/render";

clear();

console.log(
  chalk.green(
    figlet.textSync(
      `
Atomic Design
Component
Generator For Vue
    `,
      {
        horizontalLayout: "default",
        verticalLayout: "fitted"
      }
    )
  )
);

const run = async () => {
  try {
    const component = await inquirer.askComponentType();
    console.log(`
    Type: ${chalk.red(component.type)}
    Name: ${chalk.yellow(component.name)} 
    Directory: ${chalk.cyan(
      "src/components/" + component.type + "/" + component.name
    )}
  `);
    const confirm = await inquirer.confirmCreateComponent();

    if (confirm) {
      const cwd = files.getCurrentDirectory();
      const componentsDir = `${cwd}/src/components`;
      const componentTypeDir = `${componentsDir}/${component.type}`;
      const componentDir = `${componentsDir}/${component.type}/${component.name}`;

      files.createDirectoryIfExists(componentsDir);
      files.createDirectoryIfExists(componentTypeDir);
      files.createFiles(componentDir, render.renderFiles(component));

      console.log(chalk.green("All done!"));
    } else {
      console.log(chalk.red("exit"));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
};

run();
