import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
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
    onChange: PropTypes.func,
    onValidate: PropTypes.func
  };

  static defaultProps = {
    min: 1,
    max: 10,
    items: [],
    template: noop,
    templateDelete: noop,
    templateCreate: noop,
    templateDefault: noop,
    onChange: noop,
    onValidate: noop
  };

  static getDerivedStateFromProps(inProps, inState) {
    const { items } = inProps;
    if (items !== inState.value) {
      return { value: items };
    }
    return null;
  }

  get length() {
    const { value } = this.state;
    return value.length;
  }

  get isLteMin() {
    const { min } = this.props;
    return this.length <= min;
  }

  get isGteMax() {
    const { max } = this.props;
    return this.length >= max;
  }

  get listView() {
    const { value } = this.state;
    return <ReactList items={value} template={this.template} />;
  }

  get createView() {
    const { value } = this.state;
    const { templateCreate, templateDefault } = this.props;
    const cb = () => {
      if (this.isGteMax) return;
      value.push(templateDefault());
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
      if (this.isLteMin) return;
      value.splice(index, 1);
      this.change(value);
    };
    return template({ item, index, items: value }, cb);
  };

  change(inValue) {
    const { onChange, onValidate, min, max } = this.props;
    const target = { value: inValue };
    this.setState(target, () => {
      onChange({ target });
      this.length === min && onValidate({ target: { value: 'EQ_MIN' } });
      this.length === max && onValidate({ target: { value: 'EQ_MAX' } });
    });
  }

  render() {
    const {
      className,
      items,
      template,
      templateCreate,
      templateDelete,
      templateDefault,
      onChange,
      onValidate,
      ...props
    } = this.props;
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
