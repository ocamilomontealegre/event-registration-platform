import { EventNav } from "../events/EventNav.jsx";
import { AppRouter } from '../../router/AppRouter.jsx';
import { EventFooter } from "../events/EventFooter.jsx";

export const BodyContainer = () => {
  return(
    <div className="erp-body-container">
      <EventNav />
      <AppRouter />
      <EventFooter />
    </div>
  );
};