<p align="center">
  <a href="https://github.com/fluid-framework/Fluid/tree/master/dist">
    <img src="http://ashfahan.com/fluid/logo.svg?" alt="Fluid logo" width="256" height="256">
  </a>
</p>

<p align="center">
  Modern, Stylish, Easier and Powerful Css framework for faster and hassle free web development.
  <br>
  <br>
  <a href="https://github.com/fluid-framework/fluid/issues/new?template=bug.md">Report bug 🐛</a>
  |
  <a href="https://github.com/fluid-framework/fluid/issues/new?template=feature.md&labels=feature">Request feature ✨ </a>
</p>

<p align="center">
  <a href="https://atmospherejs.com/fluidcss/fluid">
   <img src="https://img.shields.io/badge/METEOR-fluidframework%3Afluid-1890ff?style=for-the-badge"/>
  </a>
  <a href="https://www.npmjs.com/package/fluid-css">
   <img src="https://img.shields.io/badge/NPM-fluid--css-1890ff?style=for-the-badge"/>
  </a>
</p>

<p align="center">
  <a href="https://travis-ci.com/fluid-framework/Fluid">
    <img src="https://img.shields.io/travis/com/fluid-framework/fluid/master.svg?style=for-the-badge" />
  </a>
  <a href="https://en.wikipedia.org/wiki/Gzip">
    <img src="https://img.badgesize.io/https://github.com/fluid-framework/Fluid/tree/master/dist/fluid.min.css?compression=gzip&label=Gzip_size&softmax=35000&max=50000&style=for-the-badge"/>
  </a>
  <a href="https://en.wikipedia.org/wiki/Brotli">
    <img src="https://img.badgesize.io/https://github.com/fluid-framework/Fluid/tree/master/dist/fluid.min.css?compression=brotli&label=Brotli_size&softmax=30000&max=50000&style=for-the-badge"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/fluid-framework/Fluid/releases">
    <img src="https://img.shields.io/github/package-json/v/fluid-framework/fluid.svg?style=for-the-badge&color=805ad5"/>
  </a>
  <a href="https://github.com/fluid-framework/Fluid/tree/master/LICENSE">
    <img src="https://img.shields.io/github/license/fluid-framework/Fluid.svg?style=for-the-badge&color=805ad5"/>
  </a>
  <a href="https://github.com/fluid-framework/Fluid/commits">
    <img src="https://img.shields.io/github/commit-activity/w/fluid-framework/fluid.svg?style=for-the-badge&color=805ad5" />
  </a>
  <a href="https://github.com/fluid-framework/Fluid/pulls">
    <img src="https://img.shields.io/badge/Pull%20Request-Welcome_%E2%9D%A4-805ad5.svg?style=for-the-badge" />
  </a>
</p>

<p align="center">
 🚧 Under Heavy Construction 🚧
</p>

## 🚀 Quick Start

##### Using Repository release

1. [Download](https://github.com/fluid-framework/Fluid/releases) Latest release distribution
2. Extract and copy to project folder
3. Import required Css using link tag E.g `<link href="./Fluid/fluid.min.css" rel="stylesheet" />`

##### Using NPM

1. Download Package as Direct Dependency `npm install fluid-css`
2. Import required Css Into project using `import "fluid-css/dist/fluid.css"`

##### Using Yarn

1. Download Package as Direct Dependency `yarn add fluid-css`
2. Import required Css Into project using `import "fluid-css/dist/fluid.css"`

##### Using Meteor

1. Download Package using `meteor add fluidframework:fluid`
2. Import required Css Into project using `import "fluid-css/dist/fluid.css"`

## 📂 Structure

Fluid uses [ITCSS architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture) for its files and folder structure.

```
src
├───components
├───elements
│   └───typography
├───generics
├───objects
├───settings
│   ├───breakpoints
│   ├───components
│   ├───containers
│   ├───design
│   ├───grid
│   ├───icon
│   ├───misc
│   ├───naming
│   ├───placeholders
│   │   └───typography
│   ├───space
│   ├───theme
│   └───typography
├───tools
│   ├───functions
│   └───mixins
│       ├───components
│       └───shapes
├───utilities
│   ├───border
│   ├───grid-flex
│   ├───sizing
│   ├───transform
│   └───typography
└───vendors
```

## 💅 CSS only

Fluid is a `CSS implementation only` means it components are `faster than JavaScript` Components but being a CSS only framework also means that for components like Alerts Popup, User have to implement there own JavaScript Implementation and logics.

## 🌐 Browser Support

Fluid Uses Css version 3 so it is supported by majority of browsers. Fluid is compatible with recent versions of:

- Chrome
- Edge
- Firefox
- Opera
- Safari
- Internet Explorer (10+) is only partially supported.

Fluid uses [autoprefixer](https://github.com/postcss/autoprefixer) for compatibility with earlier versions of [browsers](https://github.com/fluid-framework/Fluid/tree/master/.browserslistrc)

## 🛠 Customization

1. [Download](https://github.com/fluid-framework/Fluid/archive/master.zip) Latest master branch
2. Extract files
3. Customize the Scss files and variables located in `settings` folder
4. Build Scss using `yarn build` for [yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable) or `npm build` for [npm](https://nodejs.org/en/download/)

## 🧠 Creators

👨‍💻 **Ashfahan** ◾️ [GitHub](https://github.com/ashfahan) | [GitLab](https://gitlab.com/ashfahan)

## 🤝 Sponsors

<p align="center">
  <a href="https://www.browserstack.com/">
    <img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack Logo" width="153.6" height="33.6">
  </a>
</p>

## 📜 Copyright and license

Code copyright (c) 2019-2027 [fluid-framework](https://fluid-framework.com) and [Ashfahan](https://Ashfahan.com) and [Contributors](https://github.com/fluid-framework/Fluid/graphs/contributors).
<br>
<br>
Code released under the [MIT License](https://github.com/fluid-framework/Fluid/tree/master/LICENSE).

<p align="center">
  <img src="https://forthebadge.com/images/badges/built-with-love.svg"/>
</p>
