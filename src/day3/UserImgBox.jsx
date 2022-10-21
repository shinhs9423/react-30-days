/**
 * 제작 : 한승현
 * 날짜 : 2022/10/22
 * 내용 : UserImgBox
 */

import React from 'react';
import UserImg from './Img.jpg';

function UserImgBox() {
  return (
    <div className='img'>
      <img src={UserImg} alt='프로필사진' />
    </div>
  );
}

UserImgBox.propTypes = {};
UserImgBox.defaultProps = {};

export default UserImgBox;
