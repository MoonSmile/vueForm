
let fields = require.context("./JSX", false, /^\.\/([\w-_]+)\.(js|vue)$/);

let components = []
fields.keys().forEach(key => {
    let componentName = key.replace(/^\.\//, "").replace(/JSX\.(js|vue)/, "");
    components[componentName] = fields(key).default;
})
export default components;