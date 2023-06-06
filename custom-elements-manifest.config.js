import { readmePlugin } from 'cem-plugin-readme';

export default {
  globs: ['src/*.ts'],
  exclude: ['test/*.ts', 'stories/*.ts'],
  litelement: true,
  plugins: [
    readmePlugin({
      header: 'README.head.md',
      footer: 'README.foot.md',
      private: 'hidden',
    }),
  ],
};
