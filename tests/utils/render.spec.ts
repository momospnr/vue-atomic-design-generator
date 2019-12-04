import render from "../../src/utils/render";

const component = {
  name: "test",
  type: "atoms"
};

describe('render', () => {
  it('should render templates', () => {
    expect(render.renderFiles(component).length).toBe(3);
  });
});