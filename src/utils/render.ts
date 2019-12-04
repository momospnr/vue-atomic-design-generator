import mustache from "mustache";
import fs from "fs";

const templateDir = `${__dirname}/../../templates`;
const templateFiles = fs.readdirSync(templateDir);
const templates: string[] = [];

templateFiles.forEach(templateFile => {
  templates.push(fs.readFileSync(`${templateDir}/${templateFile}`, "utf8"));
});

export default {
  renderFiles: (component: any) => {
    const rendered: string[] = [];
    templates.forEach(template => {
      rendered.push(mustache.render(template, component));
    });
    return rendered;
  }
};
