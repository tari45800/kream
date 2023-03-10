import React from 'react';
import styled from 'styled-components';

import Banner from '../components/Banner';
import Kategorie from '../components/kategorie';
import List from '../components/List';
import Footer from '../components/Footer';


const MainDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff
`
function Main() {
  return(
    <MainDiv>
      <Banner></Banner>
      <Kategorie></Kategorie>
      <List></List>
      <Footer></Footer>
    </MainDiv>
  )
}

export default Main;
