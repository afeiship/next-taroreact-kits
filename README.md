# react-interactive-list
> An interactive, dynamic list of components with add / remove actions.


## properties:
```javascript

  static propTypes = {
    className : PropTypes.string,
    template : PropTypes.func,
    value : PropTypes.array,
    onChange : PropTypes.func,
    defaultValue : PropTypes.any,
    min: PropTypes.number,
    max: PropTypes.number,
  };

  static defaultProps = {
    template: noop,
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

  _tempate = (item,index) => {
    return (
      <div className="item" key={index}> {item} </div>
    );
  };

  _onChange = e =>{
    const { value } = e.target;
    this.setState({ value });
  };

  render(){
    const { value, defaultValue } = this.state;
    return (
      <div className="hello-react-interactive-list">
        <ReactInteractiveList defaultValue={defaultValue} max={5} template={this._tempate} onChange={this._onChange} value={ value } ref='rc' />
      </div>
    );
  }
}

```
