/**
 * 제작 : 한승현
 * 날짜 : 2022/10/22
 * 내용 : UserCardIList
 */

import React from 'react';
import PropTypes from 'prop-types';
import UserCardItem from './UserCardItem';

function UserCardList({ skills }) {
  return (
    <div className='skills'>
      <p>SKILLS</p>
      <ul>
        {skills.map((skill, index) => (
          <UserCardItem key={`skill-item-${index}`}>{skill}</UserCardItem>
        ))}
      </ul>
    </div>
  );
}

UserCardList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
UserCardList.defaultProps = {};

export default UserCardList;
