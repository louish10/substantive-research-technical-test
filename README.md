# substantive-research-tech-test

My solution has been built using Vue.js. I used the vue cli to create a template project which
allowed for quick prototyping. The data is displayed using a doughnut chart which is the simplest
way I could think to show this data. Due to limited time, I have not included unit tests, since
writing tests would have slowed the prototyping. If I had more time the first thing I would do is
add unit tests using vitest, especially to test the ordering logic in DoughnutChart.vue. I used the
Stylus CSS preprocessor since it was implied that a preprocessor would be a bonus but I do not think
it adds much to this project (aside from syntactic sugar) due to the project's limited scope.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
