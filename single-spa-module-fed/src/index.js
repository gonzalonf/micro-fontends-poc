import { registerApplication, start } from "single-spa";

const shouldDisplayNav = (location) =>
  !/\/$|login$|checkout$/.test(location.pathname);

registerApplication(
  "login",
  () => import("login/Login"),
  (location) => location.pathname.startsWith("/")
);

// registerApplication(
//   "vanilla",
//   () => import("vanilla/greet"),
//   (location) => location.pathname.startsWith("/")
// );

registerApplication({
  name: "header",
  app: () => import("ui/Header"),
  activeWhen: (location) => location.pathname.startsWith("/"), // shouldDisplayNav, // acttive when routing works
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
  } catch (error) {
    console.log("ERROR IN IMPORT");
    console.error(error);
  }
};
testImport();
