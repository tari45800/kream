import React, { useState } from 'react';
import styled from 'styled-components';

const BannerDiv = styled.div`
  height: 480px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  & .bannersDiv {
    position: absolute;
    top:0;
    left: -${props => props.BannerNum * 100}vw;
    width: ${props => props.props.length}00vw;
    display: flex;
    transition: 1s;


    & .bannerDiv {
      width: 100vw;
      display: flex;
      justify-content: center;
    }

    & img{
      height: 480px;
      object-fit: cover;
    }

  }

  & > img{	
    display:block;
    height: 100%;
    object-fit: cover;
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

      & img {
        margin: 0 400px;
        font-size: 50px;
        opacity: 0.3;
        cursor: pointer;
      }

    }

    & .bannerNav span:nth-of-type(${props => props.BannerNum+1}){
      background-color: white;
    }

    & .bannerNav span {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin:6px;
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

  }

`

function Banner() {

  // 총 배너 갯수를 담은 배열
  const banners = [0,1,2,3,4,5,6,7]

  // 현재 페이지 관리 state
  const [currentBanner, changeBanner] = useState(0)

  // 화살표 버튼 관리 함수
  const sideChange = (e)=>{
    if(currentBanner+e > banners.length-1){
      changeBanner(1)
      return
    }
    if(currentBanner+e < 1){
      changeBanner(banners.length-1)
      return
    }
    changeBanner(currentBanner+e)
  }

  // 점 버튼 관리 함수
  const navChange = (e) => {
    changeBanner(e)
  }

  setInterval(()=>{
    sideChange(1)
  }, 5000)

  return(
    <BannerDiv props={banners} BannerNum={currentBanner}>
      <div className='bannersDiv'>
        {banners.map((el, idx) => {
          return <div className='bannerDiv' key={idx}>
                    <img src={`../images/banners/banner (${el}).png`}></img>
                 </div>
        })}
      </div>

      <div className='BannerButton'>
        <div></div>
        <div className='midBanner'>
          <img src='../images/banners/icons8-less-than-50.png' onClick={()=>{sideChange(-1)}}></img>
          <img src='../images/banners/icons8-more-than-50.png' onClick={()=>{sideChange(1)}}></img>
        </div>
        <div className='bannerNav'>
        {banners.map((el, idx) => {
          return <span key={idx} name='bannerNav' onClick={()=>{navChange(el)}}></span>
        })}
        </div>
      </div>
    </BannerDiv>
  )
}


export default Banner;