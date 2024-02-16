// Importing necessary modules and components
import { EventNav } from "../events/EventNav.jsx"; // Importing the navigation bar component
import { AppRouter } from '../../router/AppRouter.jsx'; // Importing the router component
import { EventFooter } from "../events/EventFooter.jsx"; // Importing the footer component

// Defining the BodyContainer component
export const BodyContainer = () => {
  // Rendering the main body container with navigation, router, and footer components
  return (
    <div className="erp-body-container">
      {/* Navigation bar */}
      <EventNav />
      {/* Router component for managing different views/pages */}
      <AppRouter />
      {/* Footer component */}
      <EventFooter />
    </div>
  );
};