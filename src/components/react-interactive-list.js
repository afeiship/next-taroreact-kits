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
    templateAdd: PropTypes.func,
    templateAside: PropTypes.func,
    value : PropTypes.array,
    onChange : PropTypes.func,
    defaultValue : PropTypes.any,
    min: PropTypes.number,
    max: PropTypes.number,
  };

  static defaultProps = {
    template: noop,
    templateAdd: noop,
    templateAside: noop,
    value: [],
    onChange: noop,
    min: 1,
    max: 100
  };
  /*===properties end===*/

  get boundary(){
    const { min, max, value } = this.props;
    const length = value.length;
    return length >= max || length <= min;
  }

  change(inAction, inIndex ){
    const { min, max, value, onChange, defaultValue } = this.props;
    const length = value.length;
    const _defaultValue = typeof defaultValue == 'function' ? defaultValue() : defaultValue;
    switch( inAction ){
      case 'add':
        ( length < max ) && value.push( _defaultValue );
        break;

      case 'remove':
        ( length > min ) && value.splice( inIndex, 1 );
        break;
    }
    onChange({ target: { value }});
  }

  render(){
    const { className, template, templateAdd, templateAside, value, ...props } = this.props;
    return (
      <div {...props} className={classNames('react-interactive-list',className)} data-role='list'>
        {
          value.map((item,index)=>{
            return (
              <div className="react-interactive-item" key={index} data-role='item'>
                { template(item,index) }
                { templateAside(this, index) || <button className="react-interactive-remove" onClick={this.change.bind( this, 'remove' ,index )} data-role='action-remove'>X</button>}
              </div>
            );
          })
        }
        { templateAdd(this) || <button className="react-interactive-add" onClick={this.change.bind(this,'add',-1)} data-role='action-add'> +Add </button>}
      </div>
    );
  }
}
