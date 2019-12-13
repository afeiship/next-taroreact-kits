import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import ReactList from '@feizheng/react-list';

const CLASS_NAME = 'react-interactive-list';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    items: PropTypes.array,
    template: PropTypes.func,
    templateDelete: PropTypes.func,
    templateCreate: PropTypes.func,
    templateDefault: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    min: 1,
    max: 10,
    items: [],
    template: noop,
    templateDelete: noop,
    templateCreate: noop,
    templateDefault: noop,
    onChange: noop
  };

  static getDerivedStateFromProps(inProps, inState) {
    const { items } = inProps;
    if (items !== inState.value) {
      return { value: items };
    }
    return null;
  }

  get isLtMin() {
    const { min } = this.props;
    const { value } = this.state;
    return value.length <= min;
  }

  get isGtMax() {
    const { max } = this.props;
    const { value } = this.state;
    return value.length >= max;
  }

  get listView() {
    const { value } = this.state;
    return <ReactList items={value} template={this.template} />;
  }

  get createView() {
    const { value } = this.state;
    const { templateCreate, templateDefault } = this.props;
    const cb = () => {
      if (this.isGtMax) return;
      value.push(templateDefault())
      this.change(value);
    };
    return templateCreate({ items: value }, cb);
  }

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.items
    };
  }

  template = ({ item, index }) => {
    const { template } = this.props;
    const { value } = this.state;
    const cb = () => {
      if (this.isLtMin) return;
      value.splice(index, 1);
      this.change(value);
    };
    return template({ item, index, items: value }, cb);
  };

  change(inValue) {
    const { onChange } = this.props;
    const target = { value: inValue };
    this.setState(target, () => {
      onChange({ target });
    });
  }

  render() {
    const { className, items, template, templateCreate, templateDelete, templateDefault, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {this.listView}
        {this.createView}
      </div>
    );
  }
}
