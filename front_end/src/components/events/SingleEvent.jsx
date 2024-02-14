import { useStore } from '../reducers/eventDataReducer.js';
import { RegisterForm } from '../forms/RegisterForm.jsx';

export const SingleEvent = () => {
  const { eventData } = useStore();

  return(
    <div className='erp-image-slider'>
      <img className='erp-image' src={eventData.picture} alt={eventData.name} />
      <div>
        <h3>{eventData.name}</h3>
        <p>{eventData.description}</p>
      </div>
      <RegisterForm eventId={eventData.id}/>
    </div>
  );
};