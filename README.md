# This project is build for superhub.io website

This website is based on [hugo](https://gohugo.io/) framework for building websites. Also using next assets:

- [bulma.io](https://bulma.io/) as css framework.
- [fontawesome](https://fontawesome.com/) as font for icons
- [Jetbrains Mono](https://www.jetbrains.com/lp/mono/) as main font

## Prepare

One of way how to install `hugo` is just run command:

```shell
brew install hugo
```

For more details visit official hugo [site](https://gohugo.io/getting-started/installing/)

You also need to install some node based dependencies (bulma, postcss and autoprefixer) to create the final assets:

```shell
npm install
```

## Local development

To run site locally just call command:

```shell
hugo serve
```

## Build and publish to github pages

This is done via GitHub Actions.
