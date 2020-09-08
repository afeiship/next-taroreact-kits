# react-interactive-list
> An interactive, dynamic list of components with add / remove actions.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-interactive-list
```

## update
```shell
npm update @feizheng/react-interactive-list
```

## properties
| Name            | Type   | Required | Default | Description                           |
| --------------- | ------ | -------- | ------- | ------------------------------------- |
| className       | string | false    | -       | The extended className for component. |
| min             | number | false    | 1       | The minimum size.                     |
| max             | number | false    | 10      | The max size.                         |
| items           | array  | false    | []      | The data source.                      |
| template        | func   | false    | noop    | The data item template.               |
| templateDelete  | func   | false    | noop    | The action of `delete` component.     |
| templateCreate  | func   | false    | noop    | The action of `create` component.     |
| templateDefault | func   | false    | noop    | The empty create template.            |
| onChange        | func   | false    | noop    | The change handler.                   |
| onValidate      | func   | false    | noop    | When trigger max/min boundary.        |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-interactive-list/dist/style.scss";

  // customize your styles:
  $react-interactive-list-options: ()
  ```
2. import js
  ```js
  import NxOfflineSw from '@feizheng/next-offline-sw';
  import ReactGithubCorner from '@feizheng/react-github-corner';
  import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactInteractiveList from '@feizheng/react-interactive-list';
  import './assets/style.scss';

  class App extends React.Component {
    state = { hasUpdate: false, items: ['value1', 'value2', 'value3', 'value4'] };

    componentDidMount() {
      NxOfflineSw.install({
        onUpdateReady: () => {
          this.setState({ hasUpdate: true });
        }
      });
    }

    template = ({ item, index }, cb) => {
      return (
        <div className="is-item" key={index}>
          {index + 1}:{item} <button onClick={cb}>Remove</button>
        </div>
      );
    };

    templateCreate = ({ items }, cb) => {
      return (
        <button className="button" onClick={cb}>
          Add
        </button>
      );
    };

    templateDefault = () => {
      return 'A new template';
    };

    onChange = (inEvent) => {
      console.log('change:', inEvent.target.value);
    };

    onValidate = (inEvent) => {
      console.log('validate:', inEvent.target.value);
    };

    onClickRadom = (inEvent) => {
      const random = Math.floor(Math.random() * 8);
      this.setState({ items: [1, 2, 3, 4, 5, 6, 7, 8].slice(0, random) });
    };

    render() {
      const { items } = this.state;

      return (
        <div className="p-3 app-container">
          {/* Core components usage start */}
          <button className="button" onClick={this.onClickRadom}>
            Set Random Items
          </button>
          <ReactInteractiveList
            items={items}
            template={this.template}
            templateDefault={this.templateDefault}
            templateCreate={this.templateCreate}
            onChange={this.onChange}
            onValidate={this.onValidate}
          />
          {/* Core components usage end */}
          <ReactSwUpdateTips value={this.state.hasUpdate} />
          <ReactGithubCorner value="https://github.com/afeiship/react-interactive-list" />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-interactive-list/


## license
Code released under [the MIT license](https://github.com/afeiship/react-interactive-list/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-interactive-list
[version-url]: https://npmjs.org/package/@feizheng/react-interactive-list

[license-image]: https://img.shields.io/npm/l/@feizheng/react-interactive-list
[license-url]: https://github.com/afeiship/react-interactive-list/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-interactive-list
[size-url]: https://github.com/afeiship/react-interactive-list/blob/master/dist/react-interactive-list.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-interactive-list
[download-url]: https://www.npmjs.com/package/@feizheng/react-interactive-list
