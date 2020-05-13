import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';

import Heading from 'Components/atoms/Heading/Heading';
import Paragraph from 'Components/atoms/Paragraph/Paragraph';
import Button from 'Components/atoms/Button/Button';

import roman from 'assets/icons/roman.png';

const InnerWrapper = styled.div`
  width: 40%;
  margin: 100px 100px 0;
  display: flex;
  flex-direction: column;

  position: relative;
`;

const StyledHeading = styled(Heading)`
  margin: 0;
  padding: 0;
`;

const StyledParagraph = styled(Paragraph)`
  color: grey;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: ${({ theme }) => theme.bold};
      margin: 0;
      padding-top: 10px;
    `};

  ${({ link }) =>
    link &&
    css`
      text-decoration: underline;
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: ${({ theme }) => theme.bold};
    `};
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.black};
  text-decoration: underline;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButton = styled(Button)`
  margin-top: 50px;
`;

const StyledAvatar = styled.img`
  position: absolute;

  width: 120px;
  height: 120px;
  border-radius: 50%;

  left: 100%;
`;

const DetailsTemplate = ({
  pageType,
  title,
  created,
  content,
  articleUrl,
  twitterName,
}) => (
  <UserPageTemplate pageType={pageType}>
    <InnerWrapper>
      <StyledHeading big>{title}</StyledHeading>
      {pageType === 'twitters' ? <StyledAvatar src={roman} /> : null}

      <StyledParagraph bold>created - {created}</StyledParagraph>
      <StyledParagraph>{content}</StyledParagraph>

      {pageType === 'twitters' ? (
        <StyledLink href={`https://twitter.com/${twitterName}`}>
          OPEN THIS TWITTER
        </StyledLink>
      ) : null}
      {pageType === 'articles' ? (
        <StyledLink href={articleUrl}>OPEN THIS ARTICLE</StyledLink>
      ) : null}
      <StyledButton activeColor={pageType}>Close/save</StyledButton>
      <StyledParagraph link>remove note</StyledParagraph>
    </InnerWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  articleUrl: PropTypes.string.isRequired,
  twitterName: PropTypes.string.isRequired,
};

export default DetailsTemplate;
