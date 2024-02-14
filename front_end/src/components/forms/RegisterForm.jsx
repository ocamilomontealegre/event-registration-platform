import { useState } from "react";
import { registerForEvent } from "../../services/registerForEvent.js";
import { FormButton } from '../common/FormButton.jsx';
import { sendAlertMessage } from '../../functions/sendAlertMessage.js';

export const RegisterForm = ({ eventId }) => {
  const [ user, setUser ] = useState('');

  const register = async() => {
    try {
      const result = await registerForEvent(eventId, user);
      sendAlertMessage(result);
      setUser('');
    } catch (err) {
      console.error(err);
    };
  };

  const handleInput = (event) => {
    setUser(event.target.value);
  };

  return(
    <div className="erp-action-form">
      <input type="text" placeholder="Type in your name" value={user} onChange={handleInput} />
      <FormButton onClick={register} text='Register'/>
    </div>
  )
};