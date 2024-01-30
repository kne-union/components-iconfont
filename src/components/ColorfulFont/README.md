
# ColorfulFont


### 概述

彩色字体


### 示例


#### 示例样式

```scss
.item {
  width: 150px;
  word-break: break-all;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _ColorFulFont(@components/ColorFulFont),remoteLoader(@kne/remote-loader),antd(antd)

```jsx
const { default: ColorFulFont } = _ColorFulFont;
const { createWithRemoteLoader } = remoteLoader;
const { Space, Slider } = antd;
const { useState } = React;
const BaseExample = createWithRemoteLoader({
  modules: ['components-core:Icon']
})(({ remoteModules }) => {
  const [value, setValue] = useState(30);
  const [Icon] = remoteModules;
  return (
    <ColorFulFont>
      {({ list }) => {
        return (
          <Space direction="vertical">
            <Space>
              <div>调整大小:</div>
              <Slider style={{ width: 100 }} max={60} min={12} value={value} onChange={setValue} />
              <div>{value}px</div>
            </Space>
            <Space wrap align="top" size="large">
              {list.map(({ name }) => {
                return (
                  <Space className="item" direction="vertical" align="center" key={name}>
                    <Icon type={name} size={value} colorful />
                    <div>{name}</div>
                  </Space>
                );
              })}
            </Space>
          </Space>
        );
      }}
    </ColorFulFont>
  );
});

render(<BaseExample />);

```


### API

| 属性名 | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |

