// Importing necessary modules and components
import { useStore } from '../reducers/eventDataReducer.js'; // Importing custom hook for accessing event data from the store
import { RegisterForm } from '../forms/RegisterForm.jsx'; // Importing RegisterForm component

// Defining the SingleEvent component
export const SingleEvent = () => {
  // Accessing event data from the store
  const { eventData } = useStore();

  // Rendering the detailed information about the event
  return (
    <div className='erp-image-slider'>
      {/* Displaying the event picture */}
      <img className='erp-image' src={eventData.picture} alt={eventData.name} />
      {/* Displaying the event name and description */}
      <div>
        <h3>{eventData.name}</h3>
        <p>{eventData.description}</p>
      </div>
      {/* Registration form for the event */}
      <RegisterForm eventId={eventData.id}/>
    </div>
  );
};