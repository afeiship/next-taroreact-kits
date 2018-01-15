import React,{ Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
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
  /*===properties end===*/

  _onRemove = e => {
    const { min, value ,onChange } = this.props;
    if( value.length > min){
      value.splice( e, 1 );
      onChange({ target: { value: value }});
    }
  };

  _onAdd = e => {
    const { max, value, onChange, defaultValue } = this.props;
    if( value.length < max ){
      value.push( defaultValue );
      onChange({ target: { value }});
    }
  };

  render(){
    const { className, template, value, ...props } = this.props;
    return (
      <div {...props} className={classNames('react-interactive-list',className)}>
        {
          value.map((item,index)=>{
            return (
              <div className="react-interactive-item" key={index}>
                { template(item,index) }
                <button className="react-interactive-remove" onClick={this._onRemove.bind( this, index )}>X</button>
              </div>
            );
          })
        }

        <button className="react-interactive-add" onClick={this._onAdd}> +Add </button>
      </div>
    );
  }
}
