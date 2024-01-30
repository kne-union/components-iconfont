import manifest from '../../manifest.json';
import { getPublicPath } from '@kne/remote-loader';
import Fetch from '@kne/react-fetch';

export const path = getPublicPath('components-iconfont') + '/icon-build/' + manifest.font;

export const load = async () => {
  if (!document.head.querySelector(`link[href*="${manifest.font}"]`)) {
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

const Font = ({ children }) => {
  return (
    <Fetch
      loader={async () => {
        await load();
        return await import('../../fonts').then(({ default: config }) => config);
      }}
      render={({ data }) => (typeof children === 'function' ? children({ list: data.glyphs }) : null)}
    />
  );
};

export default Font;
