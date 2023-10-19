import {
  createProject,
  getClasses,
  NgMorphTree,
  setActiveProject,
  getConstructors,
  getDecorators,
  getVariables, getProperties, saveActiveProject
} from "ng-morph";

setActiveProject(
  createProject(new NgMorphTree(), '/', ['**/*.ts'])
);

const DECORATOR_ARGUMENT = 'transform: booleanAttribute';

const classes = getClasses('**/*.ts');

classes.forEach(c => {

  const props = getProperties(c);
  props.forEach(p => {

    const propType = p.getType();
    const decorator = getDecorators(p)[0];
    const decoratorName = decorator?.getName();

    if (propType.getText() === 'boolean' && decoratorName === 'Input') {
      // edit the decorator
      const enrichedDecorators = decorator.getArguments()[0].getText().replace('}', `, ${DECORATOR_ARGUMENT}}`);
      console.log(enrichedDecorators);
      decorator.removeArgument(0);
      decorator.addArgument(enrichedDecorators);
    }
  });
});

saveActiveProject();

