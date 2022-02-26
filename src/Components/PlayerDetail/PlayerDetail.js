import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayerDetailDescription from '../PlayerDetailDescription/PlayerDetailDescription';
import './PlayerDetail.css';
import image from '../../image/sifat2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookSkull, faBoxOpen,  faPersonBooth } from '@fortawesome/free-solid-svg-icons'



const PlayerDetail = () => {
    const {userId} = useParams();

    const [playerDetail , setPlayerDetail] = useState([])

    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/characters/${userId}`)
        .then(res => res.json())
        .then(data => setPlayerDetail(data[0]))
    },[userId])
    return (
        <div>
            
                <img className='title-image img-fluid' src={playerDetail.img} alt="" />
            
            
            <div className='player-detail-background'>
                    <div className='player-detail-container'>
                    <div>
                        <p>Birthday : {playerDetail.birthday}</p>
                        <p>NickName : {playerDetail.nickname}</p>
                        <p>Catagory : {playerDetail.category}</p>
                        <p>Status : {playerDetail.status}</p> 
                    </div>
                    <div>
                    {<p>Status : {playerDetail.status}</p> &&  <img src={image} alt="" />}
                    </div>
                    </div>  
                   <div className='m-4'>
                   <PlayerDetailDescription/> 
                   </div>

                   <div className='text-center text-success'>
                   <FontAwesomeIcon className='font-awesome m-3' icon={faBookSkull} />
                    <FontAwesomeIcon className='font-awesome m-3' icon={faPersonBooth} />
                     <FontAwesomeIcon className='font-awesome m-3' icon={faBoxOpen} />
                   </div>
            </div>
            
        </div>
    );
};

export default PlayerDetail;