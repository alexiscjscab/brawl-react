import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Background } from '../../Components/Background/Background';
import Filter from '../../Components/Filter/Filter';
import Search from '../../Components/Search/Search';
// fetch Brawlers
import { fetchBrawlers } from '../../store/slices/brawlers';
import { StyledHome } from './StyledHome';
import { Triangle } from 'react-loader-spinner';

const Home = () => {
  const dispatch = useDispatch();
  const brawlers = useSelector((state) => state.brawlers.list);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  
    if(brawlers.length === 0){
      dispatch(fetchBrawlers());
      setLoading(true)
    }else{
      setLoading(true)
    }
    
  }, [dispatch]);

  

  console.log(brawlers);
  return (
    <Background image='https://i.pinimg.com/originals/a3/ff/1f/a3ff1f383a66211e265f2109de207b66.jpg'>
      <StyledHome>
        <h1>Brawlers</h1>
        {loading && (
          <div>
            <Search />
            <Filter />
          </div>
        )}

        <div className='cards'>
          {loading && brawlers.length > 0 ? (
            brawlers.map((brawler) => {
              let id = Number(brawler.id.toString().slice(-2)) + 1;
              let idNumber = id > 9 ? id : `0${id}`;
              return (
                <div key={brawler.id} className='card'>
                  <h4>{idNumber}</h4>
                  <img src={brawler.imageUrl} alt={brawler.name} />
                  <h3 style={{ color: `${brawler.rarity.color}` }}>
                    {brawler.name}
                  </h3>
                  <p>{brawler.class.name}</p>
                </div>
              );
            })
          ) : (
            <div className='loader'>
              <Triangle
                color='#000'
                height={130}
                width={130}
                ariaLabel='loading-indicator'
              />
            </div>
          )}
        </div>
      </StyledHome>
    </Background>
  );
};

export default Home;
