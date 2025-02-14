import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const isDev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false
    }),
    paths: {
      base: isDev ? '' : '/dpractice' 
    }
  },
  preprocess: sveltePreprocess()
};
