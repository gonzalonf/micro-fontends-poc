import { registerApplication, start } from "single-spa";

const loginMatch = (location) => /\/$|login/.test(location.pathname);

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/start",
});

registerApplication({
  name: "home",
  app: () => System.import("home"),
  activeWhen: ["/home"],
  // {name: 'module asd'}
});
registerApplication({
  name: "login",
  app: () => System.import("login"),
  activeWhen: loginMatch,
  // {name: 'module asd'}
});

start({
  urlRerouteOnly: true,
});
