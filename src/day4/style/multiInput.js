import styled from 'styled-components';

const MultiInputWrapStyled = styled.div`
  margin: 50px;
  padding: 50px;
  border-radius: 8px;
  box-shadow: 4px 4px 8px 4px #999;
  background: powderblue;
`;

const MultiInputTitleStyled = styled.h2`
  margin-bottom: 50px;
  text-align: center;
  font-size: 1.5em;
`;

const MultiInputDescriptionStyled = styled.p`
  margin-bottom: 50px;
  text-align: center;
`;

const MultiInputListStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const MultiInputItemStyled = styled.input`
  flex: 1;
  max-width: 300px;
  padding: 10px;
  border: 0;
  border-radius: 8px;
  background: #fff;
`;

const MultiInputButtonStyled = styled.button`
  display: block;
  margin: 50px auto 0;
  background: pink;
  border: 0;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;

export {
  MultiInputWrapStyled,
  MultiInputTitleStyled,
  MultiInputDescriptionStyled,
  MultiInputListStyled,
  MultiInputItemStyled,
  MultiInputButtonStyled,
};
