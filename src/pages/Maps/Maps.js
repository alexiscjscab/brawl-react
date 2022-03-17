import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Background } from '../../Components/Background/Background';
import { fetchMaps } from '../../store/slices/maps';
import { StyledMaps } from './StyledMaps';


const Maps = () => {
  const dispatch = useDispatch();
  const maps = useSelector((state) => state.maps.list);

  useEffect(() => {
    maps.length === 0 && dispatch(fetchMaps());
  }, [dispatch]);

  console.log(maps);

  return (
    <Background image='https://wallpaperaccess.com/full/2951789.jpg'>
      <StyledMaps>
        <h1>Maps</h1>

        <div className='cards'>
          {maps.length > 0 &&
            maps.map((map) => {
              return (
                <div key={map.id} className='card'>
                  <img src={map.imageUrl} alt={map.name} />
                  <h3>{map.name}</h3>
                </div>
              )
            })
          }
        </div>
      </StyledMaps>
    </Background>
  );
};

export default Maps;
