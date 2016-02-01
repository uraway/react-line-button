# react-line-button
Simple React components for LINE Button.

**このボタンはスマホ専用です｡** PCユーザーに対しては正常に動作しません｡
**This component is aimed for smart phone users.** It does not work for PC users.

## インストール Install
```
npm install --save react-line-button
```

## 使用例 Example
```javascript
import { LINEButton } from 'react-line-button';

class App extends React.Component {
  render() {
    let text = "LINEで送る";
    let image = "36x60";
    return (
      <LINEButton text={text} image={image} />
    );
  }
}
```

## プロパティ props

### テクスト text

送信する内容を指定します｡ 原則､ ページタイトル､ ページURLの指定が可能です｡
The text you want to share. You can only specify the page title and page URL.

- [ガイドライン](https://media.line.me/guideline/ja/)
- [Guideline](https://media.line.me/guideline/en/)

### 画像 image

ボタンとして表示する画像のサイズを指定します｡

##### 20x20
![20x20](./images/linebutton_20x20.png)

##### 30x30
![30x30](./images/linebutton_30x30.png)

##### 36x60
![36x60](./images/linebutton_36x60.png)

##### 40x40
![40x40](./images/linebutton_40x40.png)

##### 82x20
![82x20](./images/linebutton_82x20.png)

MIT licensed
