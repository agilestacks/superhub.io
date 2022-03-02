# This project is build for superhub.io website

This website is based on [hugo](https://gohugo.io/) framework for building websites. Also using next assets:

- [bulma.io](https://bulma.io/) as css framework.
- [fontawesome](https://fontawesome.com/) as font for icons
- [Jetbrains Mono](https://www.jetbrains.com/lp/mono/) as main font

## Prepare

One of way how to install `hugo` is just run command `brew install hugo`. For more details visit official hugo [site](https://gohugo.io/getting-started/installing/)
To build or update resources, you also need PostCSS to create the final assets. By default npm installs tools under the directory where you run npm install:

```bash
npm install -D autoprefixer postcss-cli
```

## Local development

To run site locally just call command `make serve`

## Build and publish to github pages

To build website and publish it to github pages call command `make publish`
