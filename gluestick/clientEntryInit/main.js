import getRoutes from "src/apps/main/routes.js";
import EntryWrapper from "../EntryWrapper";
import { createStore } from "compiled/gluestick";
import globalMiddlewares, { thunkMiddleware as globalThunkMiddleware } from "config/redux-middleware";
import config from "config/application";

import "src/apps/main/Index.js";



export const getStore = (httpClient) => {
  return createStore(
    httpClient,
    () => require("src/apps/main/reducers").default,
    config.reduxOptions && config.reduxOptions.middlewares
      ? config.reduxOptions.middlewares
      : globalMiddlewares,
    (cb) => module.hot && module.hot.accept("../../src/apps/main/reducers", cb),
    !!module.hot,
    config.reduxOptions && config.reduxOptions.thunk
      ? config.reduxOptions.thunk
      : globalThunkMiddleware,
  );
};

if (typeof window === "object") {
  const rootWrappers = [
    
  ];

  const preRenderHooks = [
    
  ];

  EntryWrapper.start(
    config,
    getRoutes,
    getStore,
    { rootWrappers, rootWrappersOptions: [], preRenderHooks },
  );

  if (module.hot) {
    module.hot.accept("src/apps/main/routes.js", () => {
      EntryWrapper.rerender(require("src/apps/main/routes.js").default);
    });
  }
}
