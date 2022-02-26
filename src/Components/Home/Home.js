import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Player from '../Player/Player';
import './Home.css'

const Home = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/characters`)
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        <div>
        <div className="background-image">
            <h2 className='background-image-title'>Take Your Favourite Person</h2>
        </div>
     
            <Row xs={1} md={4} className="g-4 m-5">
            {
                players.map(player => <Player key={player.char_id}  player={player}></Player>)
            }
        </Row>
        </div>
    );
};

export default Home;