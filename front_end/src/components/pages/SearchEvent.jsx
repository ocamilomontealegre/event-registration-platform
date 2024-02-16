// Importing necessary components
import { Title } from '../common/Title.jsx'; // Assuming this component renders a title
import { SingleEvent } from '../events/SingleEvent.jsx'; // Assuming this component renders details of a single event

// Defining the SearchEvent component
export const SearchEvent = () => {
  // Rendering the search event page content
  return (
    <div className="erp-single">
      {/* Rendering a title component with a welcome message */}
      <Title text='Welcome to the Time of Your Life' />
      {/* Rendering a component to display details of a single event */}
      <SingleEvent />
    </div>
  );
};