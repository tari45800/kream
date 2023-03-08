import React, { useState } from 'react';
import styled from 'styled-components';

const BannerDiv = styled.div`
  height: 475px;
  width: 100%;
  margin-top: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & > img{	
    display:block;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
  }

  & > .BannerButton{	
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    & .midBanner {
      width: 100%;
      display: flex;
      justify-content: space-between;

      & span {
        font-size: 50px;
        cursor: pointer;
      }

    }

  }

`


function Banner() {

  const [currentBanner, changeBanner] = useState(0)

  const c = (e)=>{
    if(currentBanner+e > 12){
      changeBanner(1)
      return
    }

    if(currentBanner+e < 0){
      changeBanner(12)
      return
    }
   
    changeBanner(currentBanner+e)
  }

  return(
    <BannerDiv>
      <img src={`../images/banners/banner (${currentBanner}).png`}></img>
      <div className='BannerButton'>
        <div></div>
        <div className='midBanner'>
          <span onClick={()=>{c(-1)}}>&lt;</span>
          <span onClick={()=>{c(1)}}>&gt;</span>
        </div>
        <div>
          * * *
        </div>
      </div>
    </BannerDiv>
  )
}


export default Banner;