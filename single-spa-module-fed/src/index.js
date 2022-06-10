import { registerApplication, start } from "single-spa";

const shouldDisplayNav = (location) =>
  !/\/$|login$|checkout$/.test(location.pathname);

// registerApplication(
//   "vanilla",
//   () => import("vanilla/greet"),
//   (location) => location.pathname.startsWith("/")
// );

registerApplication(
  "login",
  () => import("login/Login"),
  (location) => /\/$|login/.test(location.pathname)
);
registerApplication(
  "home",
  () => import("home/Home"),
  (location) => /home$/.test(location.pathname)
);

registerApplication({
  name: "header",
  app: () => import("ui/Header"),
  activeWhen: shouldDisplayNav, // shouldDisplayNav, // acttive when routing works
  // customProps: {
  //   domElementGetter: () => document.getElementById("sSpaHeader"), // opcional
  // },
});

start();
// import { registerApplication, start } from 'single-spa';
// import {
//   constructApplications,
//   constructRoutes,
//   constructLayoutEngine,
// } from "single-spa-layout";

// const routes = constructRoutes(document.querySelector("#single-spa-layout"));
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
start();
