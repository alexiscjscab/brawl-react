import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Background } from '../../Components/Background/Background';
import { StyledGame } from './StyledGame';
import { fetchGame } from '../../store/slices/gameModes';
import { Triangle } from 'react-loader-spinner';

const Game = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game.list);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (game.length === 0) {
      dispatch(fetchGame());
      setLoading(true);
    } else {
      setLoading(true);
    }
  }, [dispatch]);

  console.log(game);
  return (
    <Background image='https://www.meme-arsenal.com/memes/400b116145ad9090d4fddc1bd7c58324.jpg'>
      <StyledGame>
        
        <div className='title'>
          <h1>Game</h1>
        </div>

        <div className='cards'>
          {loading && game.length > 0 ? (
            game.map((mode) => {
              return (
                <div key={mode.id} className='card'>
                  <h3>{mode.name}</h3>
                  <img src={mode.imageUrl} alt={mode.name} />
                  <p>{mode.title}</p>
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
      </StyledGame>
    </Background>
  );
};

export default Game;
