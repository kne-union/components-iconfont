
# CountyFlag


### 概述

国旗图标


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
- _CountyFlag(@components/CountyFlag),remoteLoader(@kne/remote-loader),antd(antd)

```jsx
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

```


### API

| 属性名 | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |

