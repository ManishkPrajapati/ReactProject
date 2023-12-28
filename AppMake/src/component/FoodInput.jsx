import styles from "./FoodInput.module.css";

const FoodInput = ({handlerOnKeyDown}) => {


  return (
    <input
      type="text"
      placeholder="Enter Food Item here !!!"
      className={styles.FoodInput}
      onKeyDown={handlerOnKeyDown}

    ></input>
  );
};

export default FoodInput;
