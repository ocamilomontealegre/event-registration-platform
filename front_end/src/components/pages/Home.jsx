import { useState, useEffect } from 'react';
import { Title } from '../common/Title.jsx';
import { Message } from '../common/Message.jsx';
import { EventSlider } from '../events/EventSlider.jsx';
import { getEvents } from '../../services/getEvents.js'

export const Home = () => {
  const [ bookData, setBookData ] = useState([]);

  useEffect(() =>{
    const fetchData = async() => {
      try {
        const result = await getEvents();
        setBookData(result);  
      } catch (err) {
        console.error(err);
      };
    };

    fetchData();
  }, []);


  return(
    <div className='erp-home'>
      <Title text='Welcome'/>
      <Message text='Looking for your next adventure?' />
      <EventSlider bookData={bookData}/>
    </div>
  )
};