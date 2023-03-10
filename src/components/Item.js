import React from 'react';
import styled from 'styled-components';


const ListDiv = styled.div`
  margin: 16px 0;

  & img{	
    width: 295px;
    display: block;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 6px;
  }

  & .content {

    & > span {
      display: block;
      margin-top: 10px;
    }

    & span {
      font-size: 14px;
    }

    & div span {
      font-weight: bold;
      border-bottom: 1px solid black;
    }

    & span:nth-of-type(1) {

    }

    & span:nth-of-type(2) {
      margin-top: 13px;
      font-weight: bold;
      font-size: 15px;
    }

    & span:nth-of-type(3) {
      margin-top: 0;
      font-size: 11px;
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