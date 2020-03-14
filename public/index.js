import ReactInteractiveList from '../src/main';
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
        <button onClick={this.onClickRadom}>Set Random Items</button>
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
