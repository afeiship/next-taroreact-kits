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
  import React from 'react';
  import ReactInteractiveList from '@jswork/react-interactive-list';
  import styled from 'styled-components';

  window['ss'] = ReactInteractiveList;

  const Container = styled.div`
    .react-list {
      padding: 20px;
      background: #fefefe;
      border: 4px dashed #ccc;
      margin-bottom: 20px;

      &:hover {
        border-color: #ddd;
      }
    }

    .is-item {
      padding: 0 10px;
      line-height: 32px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background: #eee;
      }
    }
  `;

  export default class App extends React.Component {
    private list: any;
    private list2: any;
    private listRef: any;
    private listRef2: any;
    state = {
      items: [this.templateDefault()],
      items2: [this.templateDefault()]
    };

    template = ({ item, index, items }, cb) => {
      return (
        <div className="is-item py-2" key={index}>
          {index + 1}:
          <input
            className="checkbox"
            type="checkbox"
            checked={item.checked}
            onChange={(e) => {
              console.log(this.list);
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

    onChange1 = (inEvent) => {
      const items = inEvent.target.value;
      this.setState({ items });
      console.log('changed:', items);
    };

    onChange2 = (inEvent) => {
      const items2 = inEvent.target.value;
      this.setState({ items2 });
    };

    onError = () => {
      // console.log('validate:', inEvent.target.value);
    };

    onClickRandom = () => {
      console.log('this.listRef:', this.listRef);
      const random = Math.floor(Math.random() * 8);
      this.setState({
        items: [1, 2, 3, 4, 5, 6, 7, 8].slice(0, random).map(() => this.templateDefault())
      });
    };

    render() {
      const { items, items2 } = this.state;
      return (
        <Container className="p-3 app-container">
          <button className="button is-primary is-fullwidth mb-2" onClick={this.onClickRandom}>
            Set Random Items
          </button>
          <ReactInteractiveList
            items={items}
            template={this.template}
            templateDefault={this.templateDefault}
            templateCreate={this.templateCreate}
            onChange={this.onChange1}
            onError={this.onError}
            ref={(list) => {
              this.list = list;
            }}
            forwardedRef={(ref) => (this.listRef = ref)}
          />

          <ReactInteractiveList
            items={items2}
            template={this.template}
            templateDefault={this.templateDefault}
            templateCreate={this.templateCreate}
            onChange={this.onChange2}
            onError={this.onError}
            ref={(list) => {
              this.list2 = list;
            }}
            forwardedRef={(ref) => (this.listRef2 = ref)}
          />
        </Container>
      );
    }
  }

  ```

## preview
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
