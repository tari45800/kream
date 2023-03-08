import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


const ListDiv = styled.div`
  height: 100%;
  width: 1800px;
  margin-top: 50px;
  display: flex;
  flex-wrap : wrap;


  & > .orderDiv {
    
    & span {
      display: block;
      font-size: 25px;
    }

    & span:nth-of-type(1) {
      font-weight: bold;
    }

    & span:nth-of-type(2) {
      color: rgb(180, 180, 180);
    }

  }

  & > .pagination {
    margin: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);    
    border-radius: 10px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;

    & .pageNum{
      cursor: pointer;
      margin: 10px;
    }
  }

  & > .itemsDiv{
    display: flex;
    flex-wrap : wrap;
    justify-content: space-between;
  }


`

function List() {

  const state = useSelector(state => state.itemReducer);
  const { items, cartItems } = state;
  const [ startPage, setPage ] = useState(12);


  const currentPage = items.filter((el) => {
    return el.id >= startPage-11 && el.id <= startPage;
  })


  const pagination = () => {
    const pageNum = Math.ceil(items.length / 12)
    const pageNums = []
    for(let i = 1; i <= pageNum; i++){
      pageNums.push(<span key={i} className='pageNum' onClick={() => {movePage(i)}}>{i}</span>)
    }
    return pageNums;
  }


  const movePage = (e) => {
    setPage(e * 12);
  }

  const isCheck = () => {

    const newArr = items.map((el)=>{
      return el.id === items.id ? !el.like : el;
    })

    cartItems(newArr)
  }

  return(
    <ListDiv>
      <div className='orderDiv'>
        <span className=''>Most Popular</span>
        <span className=''>인기 상품</span>
      </div>

      <div className='itemsDiv'>
        {currentPage.map((item, idx) => <Item item={item} isCheck={isCheck} key={idx}></Item>)}
      </div>
      
      <div className='pagination'>
        <div>{pagination()}</div>
      </div>
    </ListDiv>
  )
}

export default List;