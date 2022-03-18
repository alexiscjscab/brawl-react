/* eslint-disable */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { filterGameMode } from '../../store/slices/maps';


const FilterMaps = () => {
  const dispatch = useDispatch();
  const [game, setGame] = useState('');
  const maps = useSelector((state) => state.maps.gameMode);

  const handeChangeGame = (e) => {
    setGame(e.target.value);
    dispatch(filterGameMode(e.target.value));
  }
  console.log(maps);

  return (
    <FilterMapsStyled>
      <div className='filter__gameMode'>
      {
        maps.length > 0 && maps.map((map) => (
          <label key={map.name}>
            <img src={map.image} alt={map.name} height='45px' width='45px'/>
            <input
              type='radio'
              name='gameMode'
              value={map.name}
              onChange={handeChangeGame}
            />
          </label>
        ))
      }
      </div>
    </FilterMapsStyled>
  )
}

export default FilterMaps


const FilterMapsStyled = styled.div`
  .filter__gameMode {

    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 5px;
    width: 100%;
    margin: 10px auto;
    justify-items: center;
    align-items: center;
    @media (max-width: 768px) {
      grid-template-columns: repeat(3, auto);
    }
    input[type='radio'] {
      margin-left: 5px;
      
    }
  }
`;