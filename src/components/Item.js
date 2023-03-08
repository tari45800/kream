import React from 'react';
import styled from 'styled-components';


const ListDiv = styled.div`
  margin-top: 30px;

  & img{	
    width: 440px;
    display: block;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 15px;
  }

  & .content {

    & > span {
      display: block;
      margin-top: 16px;
    }

    & span {
      font-size: 22px;
    }

    & div span {
      font-weight: bold;
      border-bottom: 2px solid black;
    }

    & span:nth-of-type(1) {

    }

    & span:nth-of-type(2) {
      font-weight: bold;
      font-size: 23px;
    }

    & span:nth-of-type(3) {
      margin-top: 0;
      font-size: 16px;
      color: rgb(150, 150, 150);
    }

  }
`


function Item({item, isCheck}) {

  return(
    <ListDiv>
      <div>
        <img src={item.img} alt={item.name}></img>
        <div className='content'>
          <div>
            <span className='brand'>{item.brand}</span>
          </div>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <span>즉시 구매가</span>
        </div>
      </div>
    </ListDiv>
  )
}

export default Item;