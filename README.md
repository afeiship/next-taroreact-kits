# react-interactive-list
> An interactive, dynamic list of components with add / remove actions.


## properties:
```javascript

  static propTypes = {
    className : PropTypes.string,
    template : PropTypes.func,
    templateAdd: PropTypes.func,
    value : PropTypes.array,
    onChange : PropTypes.func,
    defaultValue : PropTypes.any,
    min: PropTypes.number,
    max: PropTypes.number,
  };

  static defaultProps = {
    template: noop,
    templateAdd: noop,
    value: [],
    onChange: noop,
    min: 1,
    max: 100
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-interactive-list --save
// import : import ReactInteractiveList from 'react-interactive-list'

class App extends React.Component{
  state = {
    defaultValue: 'text-empty',
    value:[
      'text1',
      'text2',
      'text3',
      'text4'
    ]
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _tempate = (inContext, inItem, inIndex) => {
    return (
      <div className="item" key={inIndex}>
        {inItem}
        {this._btnRemove(inContext, inIndex )}
      </div>
    );
  };

  _btnRemove = (inContext, inIndex) =>{
    return <button className="react-interactive-remove" onClick={inContext.change.bind( inContext, 'remove',inIndex )} data-role='action-remove'>X</button>
  };

  _templateAdd = (inContext) => {
    return <button className="react-interactive-add" onClick={inContext.change.bind(inContext,'add')} data-role='action-add'> +Add </button>;
  };

  _onChange = e =>{
    const { value } = e.target;
    this.setState({ value });
  };

  render(){
    const { value, defaultValue } = this.state;
    return (
      <div className="hello-react-interactive-list">
        <ReactInteractiveList
          defaultValue={defaultValue}
          template={this._tempate}
          max={5}
          onChange={this._onChange} value={ value } ref='rc' />
      </div>
    );
  }
}

```
