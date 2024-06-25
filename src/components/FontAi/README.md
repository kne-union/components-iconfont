
# FontAi


### 概述

AI 视频面试


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
- _FontAi(@components/FontAi),remoteLoader(@kne/remote-loader),antd(antd)

```jsx
const { default: FontAi } = _FontAi;
const { createWithRemoteLoader } = remoteLoader;
const { Space, Slider } = antd;
const { useState } = React;
const BaseExample = createWithRemoteLoader({
  modules: ['components-core:Icon']
})(({ remoteModules }) => {
  const [value, setValue] = useState(30);
  const [Icon] = remoteModules;
  return (
    <FontAi>
      {({ list }) => {
        return (
          <Space direction="vertical">
            <Space>
              <div>调整大小:</div>
              <Slider style={{ width: 100 }} max={60} min={12} value={value} onChange={setValue} />
              <div>{value}px</div>
            </Space>
            <Space wrap align="top" size="large">
              {list.map(({ name, font_class }) => {
                console.log('font_class', font_class);
                return (
                  <Space className="item" direction="vertical" align="center" key={name}>
                    <Icon className="iconfont-ai" prefix="icon-" type={font_class} size={value} />
                    <div>{name}</div>
                  </Space>
                );
              })}
            </Space>
          </Space>
        );
      }}
    </FontAi>
  );
});

render(<BaseExample />);

```


### API

| 属性名 | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |

