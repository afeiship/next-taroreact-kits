# react-interactive-list
> An interactive, dynamic list of components with add / remove actions.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-interactive-list
```

## properties
| Name            | Type   | Required | Default | Description                           |
| --------------- | ------ | -------- | ------- | ------------------------------------- |
| className       | string | false    | -       | The extended className for component. |
| min             | number | false    | 1       | The minimum size.                     |
| max             | number | false    | 10      | The max size.                         |
| items           | array  | false    | []      | The data source.                      |
| template        | func   | false    | noop    | The data item template.               |
| templateCreate  | func   | false    | noop    | The action of `create` component.     |
| templateDefault | func   | false    | noop    | The empty create template.            |
| onChange        | func   | false    | noop    | The change handler.                   |
| onValidate      | func   | false    | noop    | When trigger max/min boundary.        |


## usage
1. import css
  ```scss
  @import "~@jswork/react-interactive-list/dist/style.css";

  // or use sass
  @import "~@jswork/react-interactive-list/dist/style.scss";

  // customize your styles:
  $react-interactive-list-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactInteractiveList from '@jswork/react-interactive-list';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      items: [
        this.templateDefault(),
        this.templateDefault(),
        this.templateDefault(),
        this.templateDefault()
      ]
    };

    template = ({ item, index, items, change }, cb) => {
      return (
        <div className="is-item py-2" key={index}>
          {index + 1}:
          <input
            className="checkbox"
            type="checkbox"
            checked={item.checked}
            onChange={(e) => {
              items[index].checked = e.target.checked;
              this.list.notify();
            }}
          />
          <input
            type="text"
            value={item.value}
            onChange={(e) => {
              item.value = e.target.value;
              this.list.notify();
            }}
          />
          <button className="button is-small is-danger" onClick={cb}>
            Remove
          </button>
        </div>
      );
    };

    templateCreate = (_, cb) => {
      return (
        <button className="button is-info is-fullwidth" onClick={cb}>
          Add
        </button>
      );
    };

    templateDefault() {
      return { checked: false, value: 'A new template' };
    }

    onChange = (inEvent) => {
      const items = inEvent.target.value;
      this.setState({ items });
      console.log('changed:', items);
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
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-interactive-list">
          <button
            className="button is-primary is-fullwidth mb-2"
            onClick={this.onClickRadom}>
            Set Random Items
          </button>
          <ReactInteractiveList
            virtual
            items={items}
            template={this.template}
            templateDefault={this.templateDefault}
            templateCreate={this.templateCreate}
            onChange={this.onChange}
            onValidate={this.onValidate}
            ref={(list) => (this.list = list)}
          />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-interactive-list/


## license
Code released under [the MIT license](https://github.com/afeiship/react-interactive-list/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-interactive-list
[version-url]: https://npmjs.org/package/@jswork/react-interactive-list

[license-image]: https://img.shields.io/npm/l/@jswork/react-interactive-list
[license-url]: https://github.com/afeiship/react-interactive-list/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-interactive-list
[size-url]: https://github.com/afeiship/react-interactive-list/blob/master/dist/react-interactive-list.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-interactive-list
[download-url]: https://www.npmjs.com/package/@jswork/react-interactive-list
