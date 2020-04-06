import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import ReactList from '@feizheng/react-list';

const CLASS_NAME = 'react-interactive-list';

export default class ReactInteractiveList extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The minimum size.
     */
    min: PropTypes.number,
    /**
     * The max size.
     */
    max: PropTypes.number,
    /**
     * The data source.
     */
    items: PropTypes.array,
    /**
     * The data item template.
     */
    template: PropTypes.func,
    /**
     * The action of `delete` component.
     */
    templateDelete: PropTypes.func,
    /**
     * The action of `create` component.
     */
    templateCreate: PropTypes.func,
    /**
     * The empty create template.
     */
    templateDefault: PropTypes.func,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * When trigger max/min boundary.
     */
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

  shouldComponentUpdate(inProps) {
    const { items } = inProps;
    if (items !== this.state.value) {
      this.setState({ value: items });
    }
    return true;
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
      min,
      max,
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
