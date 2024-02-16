// Importing necessary modules and components
import { useState } from 'react'; // Importing the useState hook for managing state
import { Link } from 'react-router-dom'; // Importing Link component from React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesomeIcon component
import { faDragon } from '@fortawesome/free-solid-svg-icons'; // Importing FontAwesome icon
import { searchEvent } from '../../services/searchEvent.js'; // Importing function for searching event
import { useStore } from '../reducers/eventDataReducer.js'; // Importing custom hook for managing event data

// Defining the EventNav component
export const EventNav = () => {
  // State to store the eventId input value
  const [eventId, setEventId] = useState('');
  // Custom hook to access and update event data in the store
  const setEventData = useStore((state) => state.setEventData);

  // Function to search for event data based on eventId
  const searchEventData = async () => {
    try {
      // Calling the searchEvent function to fetch event data
      const eventData = await searchEvent(eventId);
      // If eventData is not null, update the event data in the store and reset the eventId input field
      if (eventData) {
        setEventData(eventData);
        setEventId('');
      }
    } catch (err) {
      // Handling errors if searching for event data fails
      console.error(err);
    }
  };

  // Function to handle changes in the eventId input field
  const handleInputContent = (event) => {
    setEventId(event.target.value);
  };

  // Rendering the navigation bar content
  return (
    <div className='erp-nav'>
      {/* Logo and application name with a link to the home page */}
      <div className='erp-icon'>
        <Link to='/'>
          <FontAwesomeIcon icon={faDragon} /> {/* FontAwesome icon for the application logo */}
          <span>Dragon Events</span> {/* Application name */}
        </Link>
      </div>
      {/* Form for searching event based on eventId */}
      <div className='erp-action-form'>
        <input type="text" placeholder='eventId' onChange={handleInputContent} value={eventId} /> {/* Input field for entering eventId */}
        <Link className='erp-form-simple-button' to='/search-event' onClick={searchEventData}>Search</Link> {/* Button to trigger search */}
      </div>
    </div>
  );
};