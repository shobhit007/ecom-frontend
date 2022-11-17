import "../styles/cart.css";
import { Add, Remove } from "@mui/icons-material";
import { useState, useEffect } from "react";

function Card({
  item,
  cartItem,
  updateQuantity,
  removeItem,
  updateColorAndSize,
  index,
}) {
  const [colorIndex, setColorIndex] = useState(
    item.colors.indexOf(cartItem?.color)
  );

  useEffect(() => {
    setColorIndex(item.colors.indexOf(cartItem?.color));
  }, [item, cartItem]);

  const handleColorChange = (e) => {
    setColorIndex(item.colors.indexOf(e.target.value));
    updateColorAndSize(index, e);
  };

  return (
    cartItem && (
      <div className="item_card">
        <div className="item_card_top">
          <div className="item_image_container">
            <img src={item.images[colorIndex]} alt="" className="item_image" />
          </div>
          <div className="item_info_container">
            <span className="item_title">{item.title}</span>
            <span className="item_price">&#8377; {item.price}</span>
            <select
              name="color"
              className="item_size_select"
              defaultValue={
                item.colors.includes(cartItem?.color) && cartItem?.color
              }
              onChange={handleColorChange}
            >
              {item.colors.map((color) => (
                <option value={color} key={color}>
                  {color}
                </option>
              ))}
            </select>
            <select
              name="size"
              className="item_size_select"
              defaultValue={
                item.sizes.includes(cartItem?.size) && cartItem?.size
              }
              onChange={(e) => updateColorAndSize(index, e)}
            >
              {item.sizes.map((size) => (
                <option value={size} key={size}>
                  {size}
                </option>
              ))}
            </select>
            <div className="item_quantity_container">
              <Remove
                className="q_icon"
                onClick={() =>
                  cartItem?.quantity > 1 &&
                  updateQuantity({
                    type: "decrement",
                    itemIndex: index,
                  })
                }
              />
              <span className="item_quantity">{item.quantity}</span>
              <Add
                className="q_icon"
                onClick={() =>
                  updateQuantity({
                    type: "increment",
                    itemIndex: index,
                  })
                }
              />
            </div>
            <span
              className="item_remove"
              onClick={() => removeItem(cartItem?.productId)}
            >
              Remove
            </span>
          </div>
        </div>
        <hr className="hr_line" />
      </div>
    )
  );
}

export default Card;
