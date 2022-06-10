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

/* CHECK IMPORTS  */
const testImport = async () => {
  try {
    // const { default: greet } = await import("vanilla/greet"); //default export
    const { greet } = await import("vanilla/greet"); // named export
    greet.sayHi();

    console.log("lazy vanilla ", greet);

    const Header = await import("ui/Header");

    console.log("lazy  header", Header.default);
    console.log("lazy  header", Header);

    const Home = await import("home/Home");
  } catch (error) {
    console.log("ERROR IN IMPORT");
    console.error(error);
  }
};
// testImport();

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
