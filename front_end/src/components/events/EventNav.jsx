import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { searchEvent } from '../../services/searchEvent.js';
import { useStore } from '../reducers/eventDataReducer.js';

export const EventNav = () => {
  const [eventId, setEventId] = useState('');
  const setEventData = useStore((state) => state.setEventData);

  const searchEventData = async () => {
    try {
      const eventData = await searchEvent(eventId);
      if (eventData) {
        setEventData(eventData)
        setEventId(''); // Reset the eventId input field
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputContent = (event) => {
    setEventId(event.target.value);
  };

  return (
    <div className='erp-nav'>
      <div className='erp-icon'>
        <Link to='/'>
          <FontAwesomeIcon icon={faDragon} />
          <span>Dragon Events</span>
        </Link>
      </div>
      <div className='erp-action-form'>
        <input type="text" placeholder='eventId' onChange={handleInputContent} value={eventId} />
        <Link className='erp-form-simple-button' to='/search-event' onClick={searchEventData}>Search</Link>
      </div>
    </div>
  );
};