/* eslint-disable */
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterRarity} from '../../store/slices/brawlers'
import styled from 'styled-components';

const Filter = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState('')
  const rarity = useSelector((state) => state.brawlers.rarity);

  const handleChange = (e) => {
    setType(e.target.value)
    dispatch(filterRarity(e.target.value))
  }
  return (
    <StyledFilter>
      <div className='filter__rarity'>
        {
          rarity.length >0 && rarity.map((rarity) => (
            <label key={rarity}>
              <input type='radio' name='rarity' value={rarity} onChange={handleChange}/>
              {rarity}
            </label>
          ))
        }
      </div>
    </StyledFilter>
  )
}

export default Filter


const StyledFilter = styled.div`
  .filter__rarity {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 10px;
    width: 80%;
    margin: 0 auto;
    justify-items: center;
    align-items: center;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, auto);
      
    }
    label{
      background: #fff;
      color: #000;
      font-size: 1.2rem;
      letter-spacing: 1px;
    }
    input{
      margin-right: 10px;
    }
  }
`