// Importing necessary modules and components
import { BodyContainer } from "./BodyContainer.jsx"; // Importing the BodyContainer component
import { ImageContainer } from "./ImageContainer.jsx"; // Importing the ImageContainer component

// Defining the MainContainer component
export const MainContainer = () => {
  // Rendering the main container with body content and image container
  return (
    <div className="main-container">
      {/* Body container for main content */}
      <BodyContainer />
      {/* Container for displaying images */}
      <ImageContainer />
    </div>
  );
};