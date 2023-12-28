import styles from "./Fooditem.module.css";

const Item = ({ food, bought, handlerBYButton }) => {
  return (
    <li className={`${styles["lis"]} list-group-item ${bought && "active"}`}>
      <span className={styles.span}>{food}</span>
      <button
        className={`${styles.button}`}
        onClick={(event) => handlerBYButton(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
