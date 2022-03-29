import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Background } from '../../Components/Background/Background';
import FilterMaps from '../../Components/Filter/FilterMaps';
import { fetchMaps } from '../../store/slices/maps';
import { StyledMaps } from './StyledMaps';
import { Triangle } from 'react-loader-spinner';

const Maps = () => {
  const dispatch = useDispatch();
  const maps = useSelector((state) => state.maps.list);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(maps.length  === 0){
      dispatch(fetchMaps())
      setLoading(true)
    }else{
      setLoading(true)
    }
  }, [dispatch]);

  console.log('filter',maps);

  return (
    <Background image='https://wallpaperaccess.com/full/2951789.jpg'>
      <StyledMaps>
        <div className='title'>
          <h1>Maps</h1>
        </div>
        {
          loading && <FilterMaps />
        }
        
        <div className='cards'>
          {loading && maps.length > 0 ? (
            maps.map((map) => {
              return (
                <div key={map.id} className='card'>
                  <img className='image__gameMode' src={map.gameMode.imageUrl} alt={map.gameMode.name}/>
                  <img className='image__maps'src={map.imageUrl} alt={map.name} />
                  <h3>{map.name}</h3>
                </div>
              )
            })
          ) : (
            <div className='loader'>
              <Triangle 
              color='#000' 
              height={130} 
              width={130} ariaLabel='loading-indicator'
              />
            </div>
          )
          }
        </div>
      </StyledMaps>
    </Background>
  );
};

export default Maps;
