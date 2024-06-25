import manifest from '../../manifest.json';
import { getPublicPath } from '@kne/remote-loader';
import Fetch from '@kne/react-fetch';

export const path = getPublicPath('components-iconfont') + '/icon-build/' + manifest.fontAi;

export const load = async () => {
  if (!document.head.querySelector(`link[href*="${manifest.fontAi}"]`)) {
    const dom = document.createElement('link');
    dom.setAttribute('href', path + '/iconfont.css');
    dom.setAttribute('rel', 'stylesheet');
    await new Promise((resolve, reject) => {
      dom.addEventListener('load', () => {
        resolve();
      });
      dom.addEventListener('error', e => {
        reject(e);
      });
      document.head.append(dom);
    });
  }
};

const FontAi = ({ children }) => {
  return (
    <Fetch
      loader={async () => {
        await load();
        return await import('../../fontAis').then(({ default: config }) => config);
      }}
      render={({ data }) => (typeof children === 'function' ? children({ list: data.glyphs }) : null)}
    />
  );
};

export default FontAi;
