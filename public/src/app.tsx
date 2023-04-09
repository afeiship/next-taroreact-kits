import React from 'react';
import ReactInteractiveList from '../../src/main';
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
