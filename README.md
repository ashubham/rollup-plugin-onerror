# rollup-plugin-onerror
<a href="https://badge.fury.io/js/rollup-plugin-onerror"><img src="https://badge.fury.io/js/rollup-plugin-onerror.svg" alt="npm version" height="18"></a>
Run a callback on errors in your rollup build

## Installation
```
npm i -D rollup-plugin-onerror`
```

## Usage
```
import onError from 'rollup-plugin-onerror'

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "es",
  },
  plugins: [
    ...
    onError((err) => {
      console.log('There was an Error with your rollup build');
      console.error(err);
    })
  ]
}
```
