import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactInteractiveList from '../src/main';
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
    console.log('items: ->', items);
    return (
      <div className="is-item py-2" key={index}>
        {index + 1}:
        <input
          className="checkbox"
          type="checkbox"
          checked={item.checked}
          onChange={(e) => {
            items[index].checked = e.target.checked;
            change(items);
          }}
        />
        <input
          type="text"
          value={item.value}
          onChange={(e) => {
            item.value = e.target.value;
            console.log('index/value:', index, e.target.value, items);
            change(items);
          }}
        />
        <button className="button is-small is-danger" onClick={cb}>
          Remove
        </button>
      </div>
    );
  };

  templateCreate = ({ items }, cb) => {
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
    this.setState({ items: items });
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
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
