import noop from '@jswork/noop';
import ReactList from '@jswork/react-list';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NxActiveState from '@jswork/next-active-state';
import nxDebounce from '@jswork/next-debounce';

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

  get length() {
    return this.activeState.length;
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
    return (
      <ReactList virtual items={this.activeState} template={this.template} />
    );
  }

  get createView() {
    const { templateCreate, templateDefault } = this.props;
    const cb = () => {
      if (this.isGteMax) return;
      this.activeState.push(templateDefault());
    };
    return templateCreate({ items: this.activeState }, cb);
  }

  constructor(inProps) {
    super(inProps);
    const { items } = inProps;
    this.initialState(items);
  }

  initialState = (inItems) => {
    const instance = new NxActiveState(inItems);
    const handler = nxDebounce(() => this.handleChange(inItems), { delay: 0 });
    this.activeState = instance.state;
    this.stateRes = instance.one('change', handler);
  };

  shouldComponentUpdate(inProps) {
    const { items } = inProps;
    if (items !== this.activeState) {
      this.initialState(items);
    }
    return true;
  }

  componentWillUnmount() {
    this.stateRes.destroy();
  }

  template = ({ item, index }) => {
    const { template } = this.props;
    const cb = () => {
      if (this.isLteMin) return;
      this.activeState.splice(index, 1);
    };
    return template({ item, index, items: this.activeState }, cb);
  };

  handleChange = () => {
    const { onChange, onError, min, max } = this.props;
    onChange({ target: { value: this.activeState } });
    this.length === min && onError({ target: { value: 'EQ_MIN' } });
    this.length === max && onError({ target: { value: 'EQ_MAX' } });
  };

  render() {
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
