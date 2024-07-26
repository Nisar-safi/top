import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false
    }),
    paths: {
      base: dev ? '' : '/dpractice'
    }
  },
  preprocess: sveltePreprocess()
};
