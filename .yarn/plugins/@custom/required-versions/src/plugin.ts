const configuredDeps = require('./required-versions');

export const factory = () => {
  return {
    hooks: {
      validateProject: (project: any, report: any) => {
        project.workspaces.forEach((ws: any) => {
          ws.manifest.dependencies.forEach((dep: any) => {
            if (!configuredDeps[dep.name]) {
              return;
            }
            if (configuredDeps[dep.name].version !== dep.range) {
              report.reportError('BAD_VERSION', `package ${ws.manifest.name.name} has a dependency on ${dep.name}@${dep.range}, but the monorepo is configured such that any package that relies upon this dependency must use version ${configuredDeps[dep.name].version}`);
              process.exit(1);
            }
          });
        });
      }
    },
  };
};
