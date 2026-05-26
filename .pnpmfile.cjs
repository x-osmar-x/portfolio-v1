module.exports = {
  hooks: {
    readPackage(pkg) {
      // Allow build scripts for packages that require native compilation
      if (['@tailwindcss/oxide', 'esbuild', 'sharp'].includes(pkg.name)) {
        pkg.scripts = pkg.scripts || {};
      }
      return pkg;
    },
  },
};
