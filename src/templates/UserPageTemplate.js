import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'Components/organisms/Sidebar/Sidebar';
// import styled from 'styled-components';
// import Input from 'components/atoms/Input/Input';
// import Heading from 'components/atoms/Heading/Heading';
// import Paragraph from 'components/atoms/Paragraph/Paragraph';

// Template powstał specjalnie po to, żeby pokazywać stronę użytkowników - bo nie każda strona w Favnote ma Sidebar.

// const StyledWrapper = styled.div`
//   padding: 25px 150px 25px 70px;
// `;

// const StyledGird = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 85px;
// `;

// const StyledPageHeader = styled.div`
//   margin: 25px 0 50px 0;
// `;

// const StyledHeading = styled(Heading)`
//   margin: 25px 0 0 0;
//   text-transform: capitalize;
// `;

// const StyledParagraph = styled(Paragraph)`
//   margin: 0;
//   font-weight: ${({ theme }) => theme.bold};
// `;

// Template został zmodyfikowany na rzecz GridTemplate.js - tutaj {children} to właśnie GridTemplate.js

const UserPageTemplate = ({ pageType, children }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.arrayOf([PropTypes.object, PropTypes.node]).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = {
  pageType: 'notes',
};

export default UserPageTemplate;
