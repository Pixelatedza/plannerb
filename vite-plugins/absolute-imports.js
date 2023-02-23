import path from 'path';

export const absoluteImports = () => {
  return {
    name: "absolute-imports",
    async resolveId(src, importer, options) {
      const resolution = await this.resolve(src, importer, {
        skipSelf: true,
        ...options,
      });

      if (options.external) {
        return resolution;
      }

      if (!importer) {
        return await this.resolve(
          "./" + src,
          process.cwd() + "/src/main.js",
          {
            skipSelf: true,
            ...options,
          }
        );
      }

      if (!resolution) {
        let rel = path.relative(
          path.dirname(importer),
          path.join("./src", src)
        );
        rel = rel.startsWith(".") ? rel : "./" + rel;

        const absoluteResolution = await this.resolve(rel, importer, {
          skipSelf: true,
        });

        if (absoluteResolution) {
          return absoluteResolution;
        }

        return null;
      }

      return resolution;
    },
  };
};
