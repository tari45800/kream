import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  position: fixed; 
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  border-bottom: 1px solid rgb(230, 230, 230);
  z-index: 1;

  & .mainHeader{
    height: 130px;
    width: 1200px;
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .topNav{
    display: flex;
    justify-content: flex-end;

    & span{
      display: inline-block;
      font-size: 12px;
      margin: 8px 0 0 24px;
      color: rgb(80, 80, 80);
      cursor: pointer;
    }

  }

  & .midNav{
    border: 1px solid red ;

    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    & .title{
      font-family: 'SBAggroB';
      font-size: 25px;
      font-weight: 300;
      font-style: italic;
      letter-spacing: 1px;
      cursor: pointer;
    }

    & .rightNav > span{
      font-size: 18px;
      letter-spacing: 0.5px;
      margin-left: 45px;
      cursor: pointer;
    }

    & span:nth-of-type(1){
      font-weight: bold;
    }

  }

  & .bottomNav {

    & span {
      display: inline-block;
      font-size: 16px;
      margin: 25px 27px 0 0;
      padding-bottom: 8px;
      position: relative;
      cursor: pointer;
      transition: 0.3s;
    }
  
    & span:nth-of-type(${props => props.page}) {
      font-weight: bold;

      &:nth-of-type(${props => props.page })::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 2px;
        background-color: black;
      }

    }

  }


`

function Header() {

  const [ page, changePage] = useState(1);

  const bottomSpan= ['추천','남성','여성','브랜드','기획전']


  return(
    <HeaderDiv page={page}>
      <div className='mainHeader'>
        <div className='topNav'>
          <div>
            <span>고객센터</span>
            <span>관심상품</span>
            <span>로그인</span>
          </div>
        </div>

        <div className='midNav'>

          <div className='leftNav'>
            <span className='title'>KREAM</span>
          </div>

          <div className='rightNav'>
            <span>HOME</span>
            <span>STYLE</span>
            <span>SHOP</span>
            <span>MY</span>
            <span>Q</span>
          </div>

        </div>

        <div className='bottomNav'>
          <div>
            {bottomSpan.map((el, idx) => {
              return <span key={idx} onClick={()=>{changePage(idx+1)}}>{el}</span>
            })}
            <div className='underLine'></div>
          </div>
        </div>
      </div>
    </HeaderDiv>
  )
}

export default Header