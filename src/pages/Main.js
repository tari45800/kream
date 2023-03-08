import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyles';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Kategorie from '../components/kategorie';
import List from '../components/List';


const MainDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff
`
function Main() {
  return(
    <MainDiv>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Banner></Banner>
      <Kategorie></Kategorie>
      <List></List>
    </MainDiv>
  )
}

export default Main;
