import path from 'node:path';
import { performance } from 'node:perf_hooks';

import fs from 'fs-extra';
import prettier from 'prettier';

import compiler from './compiler.mjs';

const files = await fs.readdir('fixtures');

const statsList = [];

for (const file of files) {
  for (const mode of ['modern', 'legacy']) {
    const list = [];
    for (const minimizer of ['terser', 'esbuild']) {
      const start = performance.now();
      const stats = await compiler(`fixtures/${file}`, mode, minimizer);
      const asset = stats.toJson().assets[0];
      asset.time = (performance.now() - start).toFixed(2);
      list.push(asset);
      fs.writeFileSync(
        `${asset.name}.format.js`,
        prettier.format(String(fs.readFileSync(asset.name)), {
          parser: 'babel',
          printWidth: 180,
        }),
      );
    }
    statsList.push(list);
  }
}

fs.writeFileSync(
  './diff.md',
  `| 文件 | size (terser,esbuild) | diff (terser-esbuild) | time (terser,esbuild) |
| :-----| :----: | :----: | :----: |
${statsList
  .map(([terser, esbuild]) => {
    const { dir, name } = path.parse(terser.name);
    return `| [${dir.replace('./dist/', '')} ${name.split('.')[0]}](${dir}) | ${terser.size},${esbuild.size} | ${(terser.size - esbuild.size) / 1024}k | ${terser.time},${
      esbuild.time
    } |`;
  })
  .join('\n')}
`,
);
