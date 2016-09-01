# Repository for personal website
Adapted from MP2 of CS498RK: The Art and Science of Web Programming.

## Setup
`cd` to repository:
```
npm install
bower install
grunt compass
grunt uglify
grunt
```
## Development

- `public/index.html` - all files in the `public` folder will be served by the server
- `source_sass` folder's files - all sass files here will be compiled to `public/css/styles.css`
- `source_js` folder's files - all javascript files here will be uglified and put in `public/js/script.js`
- `public/foundation6_lib/scss/_settings.scss` - Edit this file to make changes to the foundation components. Do not touch other files in this folder. All the foundation scss files here will be compiled and put in `public/foundation6_lib/css/foundation.css`
