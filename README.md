# react-interactive-list
> An interactive, dynamic list of components with add / remove actions.

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
  import ReactInteractiveList from '@feizheng/react-interactive-list';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      items: ['value1', 'value2', 'value3', 'value4']
    };

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
        <div className="app-container">
          <button className="button" onClick={this.onClickRadom}>Set Random Items</button>
          <ReactInteractiveList
            items={items}
            template={this.template}
            templateDefault={this.templateDefault}
            templateCreate={this.templateCreate}
            onChange={this.onChange}
            onValidate={this.onValidate}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-interactive-list/
