export const FormButton = ({ text, onClick }) => {
  return(
    <button className="erp-form-simple-button" onClick={onClick}>{text}</button>
  )
};