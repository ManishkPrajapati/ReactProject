import { useSelector } from "react-redux";

const DisplayCounter = () => {
  // counter is the slice name to be used to acesss store
  
  // const counterObj = useSelector((store) => store.counter);
  // const counter = counterObj.counterVal;

  // or by directly destructure

  const { counterVal } = useSelector((store) => store.counter);

  return <p className="lead mb-4">Counter current Value: {counterVal}</p>;
};

export default DisplayCounter;
