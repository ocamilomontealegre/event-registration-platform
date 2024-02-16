// Defining the EventFooter component
export const EventFooter = () => {
  // Rendering the footer content
  return (
    <div className="erp-footer">
      {/* Text with a link to the creator's GitHub profile */}
      <p>
        Made with love by <a href="https://github.com/ocamilomontealegre">@ocamilomontealegre</a> - All Rights Reserved - {new Date().getFullYear()}
      </p>
    </div>
  );
};