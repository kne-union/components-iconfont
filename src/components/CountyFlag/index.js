import manifest from '../../manifest.json';
import { getPublicPath } from '@kne/remote-loader';
import Fetch from '@kne/react-fetch';

export const path = getPublicPath('components-iconfont') + '/icon-build/' + manifest.country_flag;

export const load = () =>
  import('../../countries').then(({ default: countries }) => {
    return countries.map(item =>
      Object.assign({}, item, {
        iconPath: path + `/${item.ab}.svg`
      })
    );
  });

const CountyFlag = ({ children }) => {
  return (
    <Fetch
      loader={load}
      render={({ data }) => {
        return typeof children === 'function' ? children({ list: data }) : null;
      }}
    />
  );
};

export default CountyFlag;
