import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router';

import Header from './components/Header/Header';
import PageContainer from './components/PageContainer/PageContainer';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Repos from './pages/Repos';
import UserCard from './pages/UserCard';

function App() {

  const location = useLocation();
  console.log();

  return (
    <Fragment>
      {
        (location.pathname === "/card") ?
        <UserCard />
        :
        <Fragment>
          <Header />
          <PageContainer>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/repos" element={<Repos />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/card" element={<UserCard />} />
            </Routes>
          </PageContainer>
        </Fragment>
      }
    </Fragment>
  );
}

export default App;
