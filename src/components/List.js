import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


const ListDiv = styled.div`
  height: 100%;
  width: 1200px;
  margin-top: 40px;
  display: flex;
  flex-wrap : wrap;
  margin-bottom: 155px;

  & > .orderDiv {
    
    & span {
      display: block;
    }

    & span:nth-of-type(1) {
      font-weight: bold;
      font-size: 17px;
    }

    & span:nth-of-type(2) {
      color: rgb(140, 140, 140);
      font-size: 16px;
    }

  }

  & > .itemsDiv{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  & .pagination{
    width: 100%;
    display: flex;
    justify-content: center;
  }

  & button {
    margin-top: 20px;
    height: 40px;
    width: 100px;
    border: 1px solid rgb(200, 200, 200);
    border-radius: 12px;
    background-color: white;
    display: ${props => props.props ? 'none' : 'block'};
  }


`

function List() {

  // 전역 상태 관리 state
  const state = useSelector(state => state.itemReducer);
  const { items } = state;

  // 페이지에 보여줄 게시물을 관리하는 state
  const [ startPage, setPage ] = useState(4);

  // 마지막 버튼 삭제 state
  const [ none, setNone ] = useState(false);

  // 현재 페이지를 담고있는 객체
  const currentPage = items.filter((el) => {
    return el.id <= startPage;
  })

  // 페이지 이동 함수
  const movePage = () => {
    
    // 만약 남은 게시물 수가 4개 이하라면 버튼 삭제
    if(startPage >= items.length-4){
      setNone(true)
    }

    // 페이지 4개씩 추가
    setPage(startPage+4)
  }

  return(
    <ListDiv props={none}>
      <div className='orderDiv'>
        <span className=''>Just Dropped</span>
        <span className=''>발매 상품</span>
      </div>

      <div className='itemsDiv'>
        {currentPage.map((item, idx) => <Item item={item} key={idx}></Item>)}
      </div>
      
      <div className='pagination'>
        <button onClick={() => {movePage()}}>더보기</button>
      </div>
    </ListDiv>
  )
}

export default List;