import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchBrawlers, resetBrawlers } from '../../store/slices/brawlers';
import styled from 'styled-components';

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const resetBrawler = () => {
    dispatch(resetBrawlers());
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(searchBrawlers(search));
  };

  return (
    <StyledSearch>
      <input
        type='text'
        placeholder='...'
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => resetBrawler()}>Reset</button>
    </StyledSearch>
  );
};

export default Search;




const StyledSearch = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
  margin-right: 30px;
  input{
    padding: 5px;
    width: 70px;
    outline: none;
    border: none;
    background: rgba(30,30,30,0.5);
    color: #fff;
    padding: 5px;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    &:hover,&:focus{
      width: 120px;
    }
    &::placeholder{
      color: #fff;
    }
  }

  button {
    border: none;
    outline: none;
    color: #fff;
    font-weight: 800;
    padding: 5px;
    width: 60px;
    cursor: pointer;
    text-transform: uppercase;
    background: rgba(70,70,70,1);
    transition: all 0.3s ease-in-out;
    &:hover,&:focus{
      background: rgba(70,170,70,1);
      color: #000;
    }
  }
`