# Saruni UI

Saruni UI is a collection of reusable components that can be installed independently into React projects. These components are built to work seamlessly with web apps built with [Saruni](https://github.com/tambium/saruni).

---

### Tooling

- Babel for TypeScript transpilation
- tsc to generate declarations
- Lerna for managing workspace packages

We previously used tsc to compile all components ready for publishing, but noticed that we were placing the responsibility of transpiling the output from Emotion `css` prop usage on the end user. With Babel we can include plugins to handle this and other transformations ourselves. We still rely on tsc for generating declaration files.

### Project Structure

```
examples/
  | src/
    | pkg1/
      | .ts, .tsx files
    | pkg2/
      | ...
  | dist/
packages/
  | pkg1/
    | tsconfig.json
    | src/
      | .ts, .tsx files
    | dist/
      | .js files
      | .d.ts files
  | pkg2/
    | ...
| tsconfig.settings.json
| tsconfig.json
```

#### `tsconfig.settings.json`

`tsconfig.settings.json` contains the default settings that all packages will use for compilation. Since Babel will transpile our TypeScript files, we include compiler options like `emitDeclarationOnly` and `declaration` to prevent tsc trying to play that role. Since packages are interdependent, we include the `composite` option.

#### `tsconfig.json`

`tsconfig.json` simply lists the packages that need to be built with `tsc` in the `references` array. We include `"files": []` to prevent an incorrect invocation of `tsc` without `-b` from trying to build the entire packages folder source files as one compilation (which will fail, but drop a bunch of .js files in random places as a side effect).

#### `packages/pk*/tsconfig.json`

`packages/pk*/tsconfig.json` extends the settings defined in `tsconfig.settings.json`. We set `outDir` to `dist` and `rootDir` to `src`, meaning `src/index.ts` will build to `dist/index.js` and `dist/index.d.ts`. We could override settings like `strict` or `target` here if needed on a per-package basis.

In the `references` array, we list the paths to the other projects' `tsconfig.json` files or containing folders. This ensures that `.d.ts` files are located correctly, and sets up suitable build ordering.

---

### Build Workflow

We build all packages with the following command:

```bash
yarn build
```

We use `concurrently` to run `babel` and `tsc` in parallel.
