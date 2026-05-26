function readPackage(pkg) {
  // Delete any build restrictions for these packages
  if (['@tailwindcss/oxide', 'esbuild', 'sharp'].includes(pkg.name)) {
    delete pkg.neverBuiltDependencies;
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
