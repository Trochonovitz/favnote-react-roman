import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Heading from 'Components/atoms/Heading/Heading';
import Paragraph from 'Components/atoms/Paragraph/Paragraph';
import Button from 'Components/atoms/Button/Button';

import LinkImage from 'assets/icons/link.svg';

import { Redirect } from 'react-router-dom';

// Konwencja z Romana - jeśli tworzymy molekuły z atomów, to jest coś takiego jak StyledWrapper, żeby on ogarniał jakieś stylistyczne kwestie
const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;

  min-height: 380px;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ theme, activeColor }) =>
    activeColor ? theme[activeColor] : 'white'};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
    `}
`;

// Jeśli chcemy rozszerzyć dany komponent dla konkretnych potrzeb, stosujemy coś takiego:
const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  position: absolute;
  right: 25px;
  top: 25px;

  width: 86px;
  height: 86px;

  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50%;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: white url(${LinkImage}) no-repeat;
  background-position: center;

  position: absolute;
  right: 25px;
  top: 25px;
`;

// Komponent funkcyjny Card zamienił się w klasę, ponieważ potrzebujemy state'u, który trzynałby - zmieniał - nasze id dowolnej notatki

class Card extends React.Component {
  /*eslint-disable*/
  state = {
    redirect: false,
  };
  /*eslint-eneable*/

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      cardType,
      title,
      created,
      twitterName,
      articleUrl,
      content,
    } = this.props;

    if (this.state.redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }

    return (
      <StyledWrapper flex onClick={this.handleCardClick}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === 'twitters' && (
            <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
          )}
          {cardType === 'articles' && <StyledLinkButton href={articleUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button secondary>Remove</Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

// oneOf to nowy sposób - dokumentacja React

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'note',
  twitterName: null,
  articleUrl: null,
};

export default Card;
