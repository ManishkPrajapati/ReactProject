const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3> Order Something</h3>}</>;
};

export default ErrorMessage;
