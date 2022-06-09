# Microfrontends POC:

Simple POC to explore Microfrontend architecture using Webpack Module Federation and Single Spa.

---

## LEARNINGS:

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
- web components as MFEs

---

## ANGULAR NOTES:

- Doesn't play with MFE as well as newer alternatives because of custom build process, which is obfuscated from end user
- Also, due to its nature, some special considerations have to be made regarding ngZone, as it is an extension of the Web API
- As of now, there is no way to customize webpack ON LATEST VERSION (14) without some kind of hack, EJECT was removed from latest versions
- Third party solutions exist to extend webpack without further digging, ngx-build and @angular-builders/custom-webpack (more mantained),
  but they support up to version 13.
- some configurations changes have to be made on angular.json (check proyect). For example, to serve on different ports, add the port number under architect.serve.option.port

- OPTIONAL: for using single-spa as part of microfrend architechture, you have to add some addition dependencies to talk with single-spa shell
- check also how assets are handled
- change main.ts file (see main.single-spa)

Please remember that you need to bootstrap your application asynchronously in most cases. Hence, your entry file will more or less just contain a dynamic import loading the rest of the application.

NOTE: beware multiple angular versions with web components, chek this:
https://www.angulararchitects.io/aktuelles/multi-framework-and-version-micro-frontends-with-module-federation-the-good-the-bad-the-ugly/

---

## LINKS:

- [Single-spa](https://single-spa.js.org/)
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)

## Learning

- [ANGULAR MFE with web components instead of single-spa:](https://www.angulararchitects.io/aktuelles/multi-framework-and-version-micro-frontends-with-module-federation-your-4-steps-guide/)
- [MFE con Single-SPA (SPANISH)](https://www.youtube.com/watch?v=ymKzE3u3X_s)
- [Introduction to Micro Frontends with Module Federation, React and Typescript (blog post)](https://ogzhanolguncu.com/blog/micro-frontends-with-module-federation)
- [Single SPA + WMF by Jack Herringtion](https://www.youtube.com/watch?v=wxnwPLLIJCY)
- [Microfrontend course by Jack Herringtion (~2 hs)](https://www.youtube.com/watch?v=lKKsjpH09dU)
- [WMF examples](https://github.com/module-federation/module-federation-examples)
- [Zack Jackson playlist on MF](https://www.youtube.com/playlist?list=PLWSiF9YHHK-DqsFHGYbeAMwbd9xcZbEWJ)

Also, check [Jack Herrington's channel](https://www.youtube.com/c/JackHerrington) on MFE and front-end in general. And look for Zack Jackson on Webpack Module Federation and FE tooling [(here is an interview with the former)](https://www.youtube.com/watch?v=AU7dKWNfWiA).

## Additional resources:

- https://betterprogramming.pub/micro-frontends-using-single-spa-and-module-federation-81ec27d03aee
- https://rangle.io/blog/module-federation-federated-application-architectures/#:~:text=Bi%2Ddirectional%20host%3A%20A%20webpack,where%20they%20are%20loaded%20from.
- https://blog.bredvid.no/micro-frontends-with-module-federation-e4ed75fcc328
- [M. Rossouw on Module Federation (co-author)](https://dev.to/marais/webpack-5-and-module-federation-4j1i)
- [Module federation for enterprise](https://dev.to/waldronmatt/tutorial-a-guide-to-module-federation-for-enterprise-n5)
- https://blog.bitsrc.io/revolutionizing-micro-frontends-with-webpack-5-module-federation-and-bit-99ff81ceb0
- https://github.com/sokra/slides/blob/master/content/ModuleFederationWebpack5.md
- https://module-federation.github.io/

## Notes on possible errors

//TODO: paste solutions
https://stackoverflow.com/questions/53704950/webpack-code-splitting-loading-chunk-failed-error-wrong-file-path
https://stackoverflow.com/questions/71232571/invalid-syntax-error-when-trying-to-import-remote-component
https://blog.devgenius.io/module-federation-advanced-api-inwebpack-5-0-0-beta-17-71cd4d42e534
