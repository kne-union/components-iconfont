const { default: CountyFlag } = _CountyFlag;
const { createWithRemoteLoader } = remoteLoader;
const { Space, Slider } = antd;
const { useState } = React;
const BaseExample = createWithRemoteLoader({
  modules: ['components-core:Image']
})(({ remoteModules }) => {
  const [Image] = remoteModules;
  const [value, setValue] = useState(30);
  return (
    <CountyFlag>
      {({ list }) => (
        <Space direction="vertical">
          <Space>
            <div>调整大小:</div>
            <Slider style={{ width: 100 }} max={60} min={12} value={value} onChange={setValue} />
            <div>{value}px</div>
          </Space>
          <Space wrap align="top" size="large">
            {list.map(item => {
              return (
                <Space className="item" direction="vertical" align="center" key={item.country_id}>
                  <Image.Avatar src={item.iconPath} size={value} />
                  <div>{item.country_name_en}</div>
                  <div>{item.country_name_cn}</div>
                </Space>
              );
            })}
          </Space>
        </Space>
      )}
    </CountyFlag>
  );
});

render(<BaseExample />);
