export default (...funcs) => (comp) => funcs.reduceRight((wrapped,f) => f(wrapped),comp);
