import React from 'react';
// import Button from 'components/atoms/Button/Button';
// import GlobalStyle from 'theme/GlobalStyle';

// theme provider
// import { ThemeProvider } from 'styled-components';

// const theme = {
//   primary: 'black',
// };

// import { theme } from 'theme/mainTheme';

// Komentarze wewnątrz Root po modyfikacji i utworzeniu MainTemplate.js
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Switch pozwala na wyświetlanie tych route'ów, które mają path="ścieżka"
// Redirect odpowiada tutaj za ścieżkę główną "/" - ale zgodnie z nazwą odpowiada za przekierowania.
// Dynamiczne przekierowywanie w React Router - do path="cośtam" dodać dwukropek. path="/notes:"

import Notes from 'Views/Notes';
import Twitters from 'Views/Twitters';
import Articles from 'Views/Articles';

// Unifikacja route'ów w jednym tylko pliku - index.js w folderze routes
import { routes } from 'routes/index';
/*eslint-disable*/

import DetailsPage from './DetailsPage';

const Root = () => (
  // <div>
  //   <GlobalStyle />
  //   <ThemeProvider theme={theme}>
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route
          exact
          path={routes.home}
          render={() => <Redirect to="/notes" />}
        />

        <Route exact path={routes.notes} component={Notes} />
        <Route path={routes.note} component={DetailsPage} />

        <Route exact path={routes.twitters} component={Twitters} />
        <Route path={routes.twitter} component={DetailsPage} />

        <Route exact path={routes.articles} component={Articles} />
        <Route path={routes.article} component={DetailsPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
  //   </ThemeProvider>
  // </div>
);
export default Root;
