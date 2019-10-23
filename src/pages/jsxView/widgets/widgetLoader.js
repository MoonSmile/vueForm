
let fields = require.context("./JSX", false, /^\.\/([\w-_]+)\.js$/);

let components = []
fields.keys().forEach(key => {
    let componentName = key.replace(/^\.\//, "").replace(/JSX\.js/, "");
    components[componentName] = fields(key).default;
})
export default components;