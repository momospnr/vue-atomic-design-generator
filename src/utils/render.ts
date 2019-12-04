import mustache from "mustache";
import fs from "fs";

const templateFiles = fs.readdirSync(`${process.cwd()}/templates`);
const templates: string[] = [];

templateFiles.forEach(templateFile => {
  templates.push(fs.readFileSync(`${process.cwd()}/templates/${templateFile}`, "utf8"));
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
