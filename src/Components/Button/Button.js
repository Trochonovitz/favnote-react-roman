import styled, { css } from 'styled-components';

const Button = styled.button`

  /* background-color: ${(props) =>
    props.secondary ? '#e6e6e6' : '#ffd82b'}; */

  background-color: #ffd82d;
  width: ${({ width }) => width || '220px'};
  height: 47px;
  border: none;
  border-radius: 50px;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;

  text-transform: uppercase;

  /* Generalnie pisanie turnary operator w zmiennych bezpośrednio to nic złego, ale wystarczy trochę więcej zależności i się wszystko zesra na kupę. Lepiej jest nieco ustrukturyzować wszystko, dając {props.cośtam} jako osobną funkcję strzałkową - patrz poniżej*/

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
