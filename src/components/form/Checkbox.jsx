import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Checkbox = (props) => {
  const { className } = props;
  const newProps = Object.assign({}, props, {
    className: classNames('ysui-checkbox', className),
  });
  return (
    <input type="checkbox" {...newProps} />
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  className: null,
};

export default Checkbox;
