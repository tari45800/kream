import React from 'react';
import styled from 'styled-components';

import Kategorie from '../components/kategorie';
import ManList from '../components/ManList';
import Footer from '../components/Footer';


const MainDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff
`
function ManPage() {
  return(
    <MainDiv>
      <Kategorie></Kategorie>
      <ManList></ManList>
      <Footer></Footer>
    </MainDiv>
  )
}

export default ManPage;
