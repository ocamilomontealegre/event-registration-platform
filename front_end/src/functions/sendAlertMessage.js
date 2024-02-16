// Importing SweetAlert2 library
import Swal from 'sweetalert2';
// Importing withReactContent function from SweetAlert2
import withReactContent from 'sweetalert2-react-content';

// Function to display an alert message
export const sendAlertMessage = (message) => {
  // Creating a SweetAlert2 instance with React content support
  withReactContent(Swal).fire({
    // Configuring the alert with the provided message
    title: message
  });  
};