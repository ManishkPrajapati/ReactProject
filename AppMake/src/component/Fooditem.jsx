import Item from "./Item";
import styles from "./Fooditem.module.css";
import { useState } from "react";

const Fooditem = ({ items }) => {
  let [ActiveItems, SetActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...ActiveItems, item];
    SetActiveItems(newItems);
  };

  return (
    <>
      <h1 className={styles.hell}>healthy food </h1>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            food={item}
            bought={ActiveItems.includes(item)}
            handlerBYButton={(event) => onBuyButton(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};

export default Fooditem;
