/**
 * 제작 : 한승현
 * 날짜 : 2022/10/22
 * 내용 : UserCard
 */

import React from 'react';

import { UserCardWrapStyled } from './style/usercard';
import UserImgBox from './UserImgBox';
import UserCardInfo from './UserCardInfo';
import UserCardList from './UserCardList';

function UserCard() {
  return (
    <UserCardWrapStyled>
      <UserImgBox />
      <UserCardInfo
        name='Han SeungHyeon'
        position='Jonior Developer, South Korea'
      />
      <UserCardList skills={['HTML', 'CSS', 'JavaScript', 'React']} />
    </UserCardWrapStyled>
  );
}

UserCard.propTypes = {};
UserCard.defaultProps = {};

export default UserCard;
