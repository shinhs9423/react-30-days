import styled from 'styled-components';

const UserCardWrapStyled = styled.div`
  margin: 50px;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 4px 4px 8px 4px #999;

  .img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 30px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    p:nth-of-type(1) {
      font-weight: 700;
      margin-bottom: 20px;
    }
    p:nth-of-type(2) {
      color: #666;
      margin-bottom: 10px;
    }
  }

  .skills {
    p {
      margin-bottom: 10px;
    }
    ul {
      display: flex;
      gap: 10px;
      li {
        background: aqua;
        color: #fff;
        padding: 8px;
        border-radius: 4px;
      }
    }
  }
`;

export { UserCardWrapStyled };
