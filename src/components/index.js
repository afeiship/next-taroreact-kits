import noop from '@jswork/noop';
import ReactList from '@jswork/react-list';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
    onError: PropTypes.func
  };

  static defaultProps = {
    min: 1,
    max: 10,
    items: [],
    template: noop,
    templateCreate: noop,
    templateDefault: noop,
    onChange: noop,
    onError: noop
  };

  get length () {
    const { value } = this.state;
    return value.length;
  }

  get isLteMin () {
    const { min } = this.props;
    return this.length <= min;
  }

  get isGteMax () {
    const { max } = this.props;
    return this.length >= max;
  }

  get listView () {
    const { value } = this.state;
    return <ReactList items={value} template={this.template} />;
  }

  get createView () {
    const { value } = this.state;
    const { templateCreate, templateDefault } = this.props;
    const cb = () => {
      if (this.isGteMax) return;
      value.push(templateDefault());
      this.handleChange(value);
    };
    return templateCreate({ items: value }, cb);
  }

  constructor (inProps) {
    super(inProps);
    const { items } = inProps;
    this.state = { value: items };
  }

  shouldComponentUpdate (inProps) {
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
      this.handleChange(value);
    };
    return template({ item, index, items: value }, cb);
  };

  handleChange = (inValue) => {
    const { onChange, onError, min, max } = this.props;
    const target = { value: inValue };
    this.setState(target, () => {
      onChange({ target });
      this.length === min && onError({ target: { value: 'EQ_MIN' } });
      this.length === max && onError({ target: { value: 'EQ_MAX' } });
    });
  };

  notify = () => {
    const { value } = this.state;
    this.handleChange(value);
  };

  render () {
    const {
      className,
      min,
      max,
      items,
      template,
      templateCreate,
      templateDefault,
      onChange,
      onError,
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
