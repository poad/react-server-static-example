export default {
  // prerender: false,
  root: "src/pages",
  export(paths) {
    return paths.map((path) => ({
      ...path,
      rsc: false,
    }));
  },
}
