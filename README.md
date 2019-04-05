# VCCP Dev Static Site Seed

## Content

[About](#About)
[Getting Started](#GettingStarted)
----[Prerequisites](#Prerequisites)
----[Setup](#Setup)
[Development](#Development)
----[Serve](#Serve)
----[Build](#Build)
----[Architecture](#Architecture)
----[Develop](#Develop)
[Version Control](#VersionControl)
----[Branches](#Branches)
----[Launch Development Mode](#LaunchDevelopmentMode)
----[Releasing Code](#ReleasingCode)

----------

## <a name="About"></a>About

Creates a simple HTML site for small and quick microsites e.g. Asda News HD, Nationwide Share etc.

### Features:

* Bootstrap 4 with basic layout and styling
* HTML templating with Nunjucks
* SASS with sourcemaps, autoprefixing and REM fallback
* SVG icons
* SASS linting with Styleint
* ES6/ES2015 with Babel and Browserify
* JS linting with ESLint
* Gulp build system


----------

## <a name="GettingStarted"></a>Getting Started

### <a name="Prerequisites"></a>Prerequisites
 You are going to need:

* Node  ([link](https://nodejs.org/en/))
* Gulp-CLI   ([link](https://github.com/gulpjs/gulp-cli))
* [vccp-dev](https://github.com/vccp/vccp-dev)


### <a name="Setup"></a>Setup
**VCCP Dev**
1. Create repo for project.
2. `cd` into project folder
3.  Run `vccp-dev init --static-site`

**Standalone**
1. Clone this repo for project.
2. `cd` into project folder
3.  Run `npm install`

----------

## <a name="Development"></a>Development

### <a name="Serve"></a>Serve
`gulp serve`

### <a name="Build"></a>Build
`gulp` OR `gulp dist`

`gulp serve:dist` to serve build


### <a name="Architecture"></a>Architecture
Folder structure:

```html
.tmp/ <!-- Temporary files -->
dist/ <!-- Compiled code -->
src/  <!-- Development source code -->
  |- data/ <!-- Contains JSON data used for HTML templating -->
  |- favicons/
  |- fonts/
  |- images/
    |- icons/ <!-- SVG icons -->
  |- scripts/
  |- styles/
  |- templates/ <!-- HTML templates -->
tasks/ <!-- Build tasks -->
  |- component-creator/ <!-- Component creator - npm run create-component -->
  |- gulp/ <!-- Gulp tasks -->
test/ <!-- Testing code -->

```

### <a name="Develop"></a>Develop

**HTML**

* The HTML files in `src` represent the pages of the site while files in `src/templates` are partials to generate full pages using [Nunjucks](https://mozilla.github.io/nunjucks/).
* The pages are generated into the `.tmp` folder.
  * `src/templates/layouts` are layouts which a page inherits.
  * `src/templates/components` are self contained components that can be imported into a layout or a page.
  * `src/data/data.json` is data imported into the templates.
  * `src/*.html` are pages that will use the layout and modules above.

**Styles**

* Edit scss file in the `src/styles` folder.
  * `src/styles/main.scss` is the main file that import other scss files.
  * Other scss partial files start with an underscore.
  * If you are editing third party styles copy the file into the styles folder and change the import in the main.scss.

**Scripts**

* Javascript is written in ES6/ES2015 utilizing modules.
  * `src/scripts/main.js` is the main file that import other JS files.
  * JS is transpiled using Babel and Browserify to create `bundle.js`


**Images**

* Images are optimizied in the build step.
* SVG icon spritesheet `src/images/icons.svg` are generated from the files in `src/images/icons`.
  * Icons should be the same size with a small amount of padding e.g. 100x100 with the icon being 98x98 max. Make sure to export the artboard when saving from Illustration to preserev this padding.
  * You can source icons from icon fonts in [Fontello](http://fontello.com/) and convert them to SVGs with [IcoMoon App](https://icomoon.io)
  * See [SVG Icon Process](https://cloudfour.com/thinks/our-svg-icon-process/) for more information.

----------

## <a name="VersionControl"></a>Version Control


### <a name="Branches"></a>Branches
| **Branch**  | **Description**  |
|---      |---              |
|develop| This branch is used for stable development source code and will be used to compile code for staging.|
|staging| This branch is compiled code for staging servers. This code should be the compiled code from develop branch.|
|uat|This branch is compiled code QA.|
|master| This branch should be the source code deployed to the live environment. Do not merge into this branch unless you wish to deploy live.|
|release| This branch will have the compiled source code from the master branch and will be the code deployed to the live environment|
|documentation| This branch will be to store images and files for documentation|

#### Creating Branches

Always create a branch from **develop**.

To create a **feature** branch, follow the naming convention below:
```
sprint-1/feature/feature-name
```

To create a **bug-fix** branch, follow the naming convention below:
```
sprint-1/bug-fix/bug-name
```


### Lint Your Code

Please ensure all code is linted via the following command otherwise you cannot merge code to develop.
```
vccp-dev lint
```

### Merging Code to Develop

You should only use the following command when merging to the `develop` branch.

```
vccp-dev merge-to-develop
```

----------

## <a name="ReleasingCode"></a>Releasing Code
To release your code, use the following command:

```
vccp-dev release [--prod | --uat]
```

### Flags

Please read the documentation for [vccp-dev](https://github.com/vccp/vccp-dev).

| **Name**  | **Description**  |
|---   |---   |
|--uat| releases compiled code to the `uat` branch|
|--prod| pushes development code to the `master` branch and releases compile to the `release` branch. A **tag** will be created. |


# Preview link

Merge code with deploy/azure/preview branch.


