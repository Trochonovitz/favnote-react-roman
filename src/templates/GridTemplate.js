import React from 'react';
import PropTypes from 'prop-types';

import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import Input from 'Components/atoms/Input/Input';
import Heading from 'Components/atoms/Heading/Heading';
import Paragraph from 'Components/atoms/Paragraph/Paragraph';

// Template powstał specjalnie po to, żeby pokazywać stronę użytkowników - bo nie każda strona w Favnote ma Sidebar.

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGird = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const GridTemplate = ({ pageType, children }) => (
  <>
    <UserPageTemplate pageType={pageType}>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="Search" />
          <StyledHeading big as="h1">
            {pageType}
          </StyledHeading>
          <StyledParagraph>6 {pageType}</StyledParagraph>
        </StyledPageHeader>
        <StyledGird>{children}</StyledGird>
      </StyledWrapper>
    </UserPageTemplate>
  </>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf([PropTypes.object, PropTypes.node]).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};

export default GridTemplate;
