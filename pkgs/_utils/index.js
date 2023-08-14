// import type { App } from "vue";

const baseClassPrefix = "dc";

export function getClassPrefix(name) {
  return `${baseClassPrefix}-${name}`;
}

export function withInstall(comp) {
  const c = comp ;
  c.install = function (app) {
    app.component(c.name, comp);
  };

  return comp;
}
