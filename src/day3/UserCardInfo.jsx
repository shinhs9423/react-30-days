/**
 * 제작 : 한승현
 * 날짜 : 2022/10/22
 * 내용 : UserCardInfo
 */

import React from 'react';
import PropTypes from 'prop-types';

function UserCardInfo({ name, position }) {
  return (
    <div className='info'>
      <p>{name}</p>
      <p>{position}</p>
    </div>
  );
}

UserCardInfo.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
UserCardInfo.defaultProps = {};

export default UserCardInfo;
