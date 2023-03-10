import React from 'react';
import styled from 'styled-components';

const KategorieDiv = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-wrap : wrap;
  padding: 40px 0;
  border-bottom: 1px solid rgb(230, 230, 230);

  & .kategorieImg{

    & img {
      width: 234px;
      height: 100px;
      display: block;
      object-fit: cover;
      border-radius: 10px;
    }

    & span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 35px;
      font-size: 15px;
      margin-bottom: 8px;
      cursor: pointer;
    }

  }

`


function Kategorie() {

  // 카테고리 배열
  const kategories = [
    {
      'img':'kategorie1',
      'imgName':'퀴즈 오픈 예정'
    },
    {
      'img':'kategorie2',
      'imgName':'남성 추천'
    },
    {
      'img':'kategorie3',
      'imgName':'여성 추천'
    },
    {
      'img':'kategorie4',
      'imgName':'웰컴드로우'
    },
    {
      'img':'kategorie5',
      'imgName':'인기 브랜드'
    },
    {
      'img':'kategorie6',
      'imgName':'정가 아래'
    },
    {
      'img':'kategorie7',
      'imgName':'인기 럭셔리'
    },
    {
      'img':'kategorie8',
      'imgName':'New Jeans'
    },
    {
      'img':'kategorie9',
      'imgName':'셀럽픽'
    },
    {
      'img':'kategorie10',
      'imgName':'무조건 포인트'
    },
  ]

  return(
    <KategorieDiv>
      {kategories.map((el, idx) => {
        return<div key={idx} className='kategorieImg'>
                  <img src={`../images/kategories/${el.img}.jpg`}></img>
                  <span>{el.imgName}</span>
              </div>

        })}
    </KategorieDiv>
  )
}

export default Kategorie;