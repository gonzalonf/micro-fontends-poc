LEARNINGS:

- Try to reduce libs & dependencies to a minimun on different microfrontends
- Full frameworks (as Angular) may be too bloated for MFE scopes (even with the simplest build)
- Maybe consider lighter or closer to vanilla frameworks for new MFEs
- Try to keep shell as naked as possible (vanilla alternatives to single-spa?)
- esto es porque Module Federation optimiza la parte de no cargas las librerias que se repiten
- Module Federation is a good alternative for sharing dependencies and some simple MFE, but for more complex, platform agnostic..
  a shell is recomended
- Single-SPA can implement MFE without Webpack 5 MF, but Single-SPA application have their own complexities and require contiousness of its implementation on both shell and MFEs.

integration:

- two main options: single-spa (or another shell) or web components

In Single-SPA there are two approaches to sharing dependencies:

- In-browser modules with import maps
- Build-time modules with module federation

---

TODO:

- Explore different loading strategies for MFE with single-spa
- UI components instead of full page apps
- Module federation vs Loading runtime
- Share state & logic
- Implement Auth/JWT

Further exploration:

- alternative integration.. single-spa uses SystemJS by default, but can use vanilla imports (less browser compatibility)
- different shell libs and options... vanilla?
- deploying & CI
- make full working app with different MFE and lib versions

---

ANGULAR NOTES:

- Doesn't play with MFE as well as newer alternatives because of custom build process, which is obfuscated from end user
- Also, due to its nature, some special considerations have to be made regarding ngZone, as it is an extension of the Web API
- As of now, there is no way to customize webpack ON LATEST VERSION (14) without some kind of hack, EJECT was removed from latest versions
- Third party solutions exist to extend webpack without further digging, ngx-build and @angular-builders/custom-webpack (more mantained),
  but they support up to version 13.
- some configurations changes have to be made on angular.json (check proyect). For example, to serve on different ports, add the port number under architect.serve.option.port

- OPTIONAL: for using single-spa as part of microfrend architechture, you have to add some addition dependencies to talk with single-spa shell
- check also how assets are handled
- change main.ts file (see main.single-spa)

ANGULAR MFE with web components instead of single-spa:
https://www.angulararchitects.io/aktuelles/multi-framework-and-version-micro-frontends-with-module-federation-your-4-steps-guide/

Please remember that you need to bootstrap your application asynchronously in most cases. Hence, your entry file will more or less just contain a dynamic import loading the rest of the application.

NOTE: beware multiple angular versions with web components, this is required:
https://www.angulararchitects.io/aktuelles/multi-framework-and-version-micro-frontends-with-module-federation-the-good-the-bad-the-ugly/

---

additional resources:

https://ogzhanolguncu.com/blog/micro-frontends-with-module-federation
