import {
  addImports,
  createProject, editImports,
  getClasses,
  getDecorators, getImports,
  getProperties,
  NgMorphTree,
  saveActiveProject,
  setActiveProject
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

      // TODO: handle existing imports and transforms -> make it more robust if run twice
      // TODO: extract code and provide as library
      /*
      const enrichedDecorators = enrichDecorator(decorator);
      decorator.removeArgument(0);
      decorator.addArgument(enrichedDecorators);
       */

      const angularCoreImports = getImports(p.getSourceFile().getFilePath(), {
          moduleSpecifier: '@angular/core'
        }
      )[0];

      const match = angularCoreImports.getText().match('\\{([^}]+)\\}')[1];
      const namedImports = match.split(',').map(s => s.trim());

      editImports(angularCoreImports, () => ({
        namedImports: [...namedImports, 'booleanAttribute']
      }));
    }
  });
});

function enrichDecorator(decorator) {
  return decorator.getArguments()[0].getText().replace('}', `, ${DECORATOR_ARGUMENT}}`);
}

saveActiveProject();

