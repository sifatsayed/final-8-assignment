import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Player = (props) => {
    console.log(props.player);
    const {img, category, name, char_id} = props.player ;
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("guta marsa")
        navigate(`playerdetail/${char_id}`)
    }
    return (
        <Col className='players-container'>
        <Card className=''>
          <Card.Img className='banner-image' variant="top" src={img}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Catagory : {category}</Card.Text>
            <button 
            onClick={()=> handleClick(char_id)}
            className='main-button'>More info  <FontAwesomeIcon icon={faArrowRight} /></button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Player;