
The project structure is originally based on [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter#file-structure). We customized it as per our project requirement we thought would be better in our particular case.

The directory structure of this template is as follows:

C:.
|   .angular-cli.json
|   .editorconfig
|   .gitignore
|   karma.conf.js
|   lmn.txt
|   package.json
|   protractor.conf.js
|   README.md
|   tsconfig.json
|   tslint.json
+---.vscode
+---docs
+---e2e
+---node_modules
\---src
    |   favicon.ico
    |   index.html
    |   main.ts
    |   polyfills.ts
    |   styles.css
    |   test.ts
    |   tsconfig.app.json
    |   tsconfig.spec.json
    |   typings.d.ts
    +---app
    |   |   app-routing.module.ts
    |   |   app.component.html
    |   |   app.component.spec.ts
    |   |   app.component.ts
    |   |   app.module.ts
    |   |   profile.guard.ts
    |   +---core
    |   |       core-config.ts
    |   |       core.module.ts
    |   +---pages
    |   |   |   pages-routing.module.ts
    |   |   |   pages.component.css
    |   |   |   pages.component.html
    |   |   |   pages.component.spec.ts
    |   |   |   pages.component.ts
    |   |   |   pages.module.ts
    |   |   +---creator
    |   |   |       creator-routing.module.ts
    |   |   |       creator.component.css
    |   |   |       creator.component.html
    |   |   |       creator.component.spec.ts
    |   |   |       creator.component.ts
    |   |   |       creator.module.ts
    |   |   +---my-stuff
    |   |   |       my-stuff-routing.module.ts
    |   |   |       my-stuff.component.css
    |   |   |       my-stuff.component.html
    |   |   |       my-stuff.component.spec.ts
    |   |   |       my-stuff.component.ts
    |   |   |       my-stuff.module.ts
    |   |   +---my-team
    |   |   |       my-team-routing.module.ts
    |   |   |       my-team.component.css
    |   |   |       my-team.component.html
    |   |   |       my-team.component.spec.ts
    |   |   |       my-team.component.ts
    |   |   |       my-team.module.ts
    |   |   +---my-training
    |   |   |       my-training-routing.module.ts
    |   |   |       my-training.component.css
    |   |   |       my-training.component.html
    |   |   |       my-training.component.spec.ts
    |   |   |       my-training.component.ts
    |   |   |       my-training.module.ts
    |   |   \---reports
    |   |           reports-routing.module.ts
    |   |           reports.component.css
    |   |           reports.component.html
    |   |           reports.component.spec.ts
    |   |           reports.component.ts
    |   |           reports.module.ts
    |   \---shared
    |       +---components
    |       +---directives
    |       +---models
    |       |       application-profile-view-model.ts
    |       |       application-roles.ts
    |       |       profile-model.ts
    |       +---pipes
    |       +---services
    |       |   +---logs
    |       |   |       index.ts
    |       |   |       logger-service.ts
    |       |   +---userContext
    |       |   |       index.ts
    |       |   |       user-context.service.ts
    |       |   +---userProfile
    |       |   |       index.ts
    |       |   |       user-profile.service.ts
    |       |   \---window
    |       |           index.ts
    |       |           window.service.ts
    |       +---validators
    +---assets
    |   +---css
    |   |       font-awesome.min.css
    |   |       header.css
    |   |       main.css
    |   |       primary.css
    |   +---fonts
    |   +---i18n
    |   \---img
    |       |   levelUpLogo.png
    |       +---demoimages
    |       +---icons
    |       +---missions
    \---environments
            environment.prod.ts
            environment.ts

