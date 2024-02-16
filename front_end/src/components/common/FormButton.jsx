// Defining the FormButton component
export const FormButton = ({ text, onClick }) => {
  // Rendering the button element
  return (
    <button className="erp-form-simple-button" onClick={onClick}>{text}</button>
  );
};