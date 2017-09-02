import mainEntry from "src/apps/main/Index.js";
import mainRoutes from "src/apps/main/routes.js";
import mainReducers from "src/apps/main/reducers";




export const plugins = [
  
];

export default {
  "/": {
    component: mainEntry,
    routes: mainRoutes,
    reducers: mainReducers,
  },

};
