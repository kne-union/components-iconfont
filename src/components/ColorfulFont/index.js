import manifest from '../../manifest.json';
import { getPublicPath } from '@kne/remote-loader';
import Fetch from '@kne/react-fetch';

export const path = getPublicPath('components-iconfont') + '/icon-build/' + manifest.colorful;

export const load = async () => {
  if (!document.head.querySelector(`script[href*="${manifest.colorful}"]`)) {
    const dom = document.createElement('script');
    dom.src = path + '/iconfont.js';
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

const ColorfulFont = ({ children }) => {
  return (
    <Fetch
      loader={async () => {
        await load();
        return await import('../../colorful-fonts').then(({ default: config }) => config);
      }}
      render={({ data }) => (typeof children === 'function' ? children({ list: data.glyphs }) : null)}
    />
  );
};

export default ColorfulFont;
