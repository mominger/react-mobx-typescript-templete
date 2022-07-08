const routerContext = require.context('@/pages', true, /routes\.ts$/);
const routes = [];

routerContext.keys().forEach((route) => {
  const routerModule = routerContext(route).default;
  routes.push(...routerModule);
});

export default { routes };
