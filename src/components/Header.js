import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLogin } from '../actions';

const HeaderDiv = styled.div`
  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  position: relative;
  height: 130px;
  width: 100%;
  display: flex;
  justify-content: center;

  & .mainHeaderBG{
    position: fixed; 
    height: 130px;
    width: 100vw;
    background-color: white;
    border-bottom: 1px solid rgb(230, 230, 230);
    z-index: 2;
  }

  & .mainHeader{
    position: fixed; 
    height: 130px;
    width: 1200px;
    z-index: 2;
  
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
      color: black;
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

    & img {
      width: 15px;
      height: 15px;
      margin-left: 45px;

    }
  }

  & .bottomNav {

    & .Link {
      color: black;
    }

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

  // 전역 상태 관리 state
  const state = useSelector(state => state.itemReducer);
  const dispatch = useDispatch()


  // 페이지 관리 state - 한무스크롤, 페이지네이션
  const [ page, changePage] = useState(1);

  // 페이지 관리 링크 배열
  const bottomSpan= [<Link className='Link' to='/'>추천</Link>,<Link className='Link' to='/ManPage'>남성</Link>,'여성','브랜드','기획전']

  // 페이지 변경 함수
  const controlPage = (e) =>{
    changePage(e)
  }

  // 로그인, 로그아웃 페이지 관리 함수
  const login = () =>{
    if(state.login.isLogin){
      return <span onClick={()=>dispatch(isLogin())}>로그아웃</span>
    } else {
      return <Link to='/Login'>
        <span>로그인</span>
    </Link>
    }
  }

  return(
    <HeaderDiv page={page}>
      <div className='mainHeaderBG'></div>
      <div className='mainHeader'>
        <div className='topNav'>
          <div>
            <span>고객센터</span>
            <span>관심상품</span>
            {login()}
          </div>
        </div>

        <div className='midNav'>
          <div className='leftNav'>
            <Link to='/'>
              <span className='title'>KREAM</span>
            </Link>
          </div>
          <div className='rightNav'>
            <span>HOME</span>
            <span>STYLE</span>
            <span>SHOP</span>
            <span>MY</span>
            <img src='../images/kategories/search.png'></img>
          </div>
        </div>

        <div className='bottomNav'>
          <div>
            {bottomSpan.map((el, idx) => {
              return <span key={idx} onClick={()=>{controlPage(idx+1)}}>{el}</span>
            })}
            <div className='underLine'></div>
          </div>
        </div>
        
      </div>
    </HeaderDiv>
  )
}

export default Header