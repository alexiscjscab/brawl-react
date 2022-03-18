/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterRarity, sortBrawlers } from '../../store/slices/brawlers';
import styled from 'styled-components';

const Filter = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('');
  const [alf, setAlf] = useState('');
  const rarity = useSelector((state) => state.brawlers.rarity);

  const handleChangeRarity = (e) => {
    setType(e.target.value);
    dispatch(filterRarity(e.target.value));
  };

  const handleChangeAlf = (e) => {
    setAlf(e.target.value);
    dispatch(sortBrawlers(e.target.value));
  };

  console.log(rarity);
  return (
    <StyledFilter>
      <div className='filter__rarity'>
        {rarity.length > 0 &&
          rarity.map((rarity) => (
            <label key={rarity.name} style={{ color: `${rarity.color}` }}>
              <input
                type='radio'
                name='rarity'
                value={rarity.name}
                onChange={handleChangeRarity}
              />
              {rarity.name}
            </label>
          ))}
      </div>
      <div className='filter__alf'>
        <label>
          <input
            type='radio'
            name='alf'
            value='A-Z'
            onChange={(e) => handleChangeAlf(e)}
          />
          A-Z
        </label>
        <label>
          <input
            type='radio'
            name='alf'
            value='Z-A'
            onChange={(e) => handleChangeAlf(e)}
          />
          Z-A
        </label>
      </div>
    </StyledFilter>
  );
};

export default Filter;

const StyledFilter = styled.div`
  .filter__rarity {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
    width: 80%;
    margin: 10px auto;
    justify-items: center;
    align-items: center;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, auto);
    }
    label {
      background: #000;
      font-size: 1.2rem;
      letter-spacing: 1px;
      padding: 5px;
      font-weight: bold;
      cursor: pointer ;
      border-radius: 10px;
    }
    input {
      margin-right: 10px;
    }
  }

  .filter__alf {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    label {
      color: #000;
      font-size: 1.2rem;
      letter-spacing: 1px;
      padding: 5px;
      font-weight: 800;
      cursor: pointer;
    }
    input{
      margin: 0 10px;
    }
  }
`;
