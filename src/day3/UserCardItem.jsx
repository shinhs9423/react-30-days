/**
 * 제작 : 한승현
 * 날짜 : 2022/10/22
 * 내용 : UserCardItem
 */

import React from 'react';
import PropTypes from 'prop-types';

function UserCardItem({ children }) {
  return <li>{children}</li>;
}

UserCardItem.propTypes = {
  children: PropTypes.string.isRequired,
};
UserCardItem.defaultProps = {};

export default UserCardItem;
