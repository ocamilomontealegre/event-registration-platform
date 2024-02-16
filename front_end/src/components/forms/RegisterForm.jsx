// Importing necessary modules and components
import { useState } from "react"; // Importing the useState hook for managing state
import { registerForEvent } from "../../services/registerForEvent.js"; // Importing the function for registering users for an event
import { FormButton } from '../common/FormButton.jsx'; // Assuming this component renders a form button
import { sendAlertMessage } from '../../functions/sendAlertMessage.js'; // Importing a function for displaying alert messages

// Defining the RegisterForm component
export const RegisterForm = ({ eventId }) => {
  // State to store the user's name input
  const [user, setUser] = useState('');

  // Function to handle user registration
  const register = async () => {
    try {
      // Calling the registerForEvent function to register the user for the event
      const result = await registerForEvent(eventId, user);
      // Displaying an alert message with the result of the registration
      sendAlertMessage(result);
      // Clearing the user's name input
      setUser('');
    } catch (err) {
      // Handling errors if registration fails
      console.error(err);
    }
  };

  // Function to handle input changes in the user's name field
  const handleInput = (event) => {
    setUser(event.target.value);
  };

  // Rendering the registration form
  return (
    <div className="erp-action-form">
      {/* Input field for the user's name */}
      <input type="text" placeholder="Type in your name" value={user} onChange={handleInput} />
      {/* Button to submit the registration */}
      <FormButton onClick={register} text='Register'/>
    </div>
  );
};