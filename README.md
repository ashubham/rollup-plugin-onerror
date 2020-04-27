# rollup-plugin-onerror
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
