import React, { useState, useEffect } from "react";

const Square = () => {
  const [colors, setColors] = useState(["white", "black"]);
  const [boxes, setBoxes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [bgColor, setBgColor] = useState([]);
  const [allSame, setAllSame] = useState(false);
  const handleColors = () => {
    let newColors = [];
    for (let i = 0; i < 12; i++) {
      const selectedColor = colors[Math.floor(Math.random() * colors.length)];
      newColors.push(selectedColor);
    }
    return newColors;
  };
  useEffect(() => {
    setBgColor(handleColors());
  }, []);
  console.log({ bgColor });
  const handleClick = (index) => {
    console.log(`Clicked: ${index}`);
    let col = bgColor[index];
    let nColor = [...bgColor];
    if (index == 0) {
      nColor[index + 1] = col;
    } else if (index > 0 && index < 11) {
      nColor[index - 1] = col;
      nColor[index + 1] = col;
    } else if (index == 11) {
      nColor[index - 1] = col;
    }
    setBgColor(nColor);
    let isSame = [...nColor].sort();
    if (isSame[0] === isSame[isSame.length - 1]) {
      console.log(isSame[isSame.length - 1]);
      setAllSame(isSame[0]);
    }
  };
  return (
    <>
      {boxes.map((box, index) => {
        return (
          <div
            key={index}
            style={{
              height: "30px",
              width: "30px",
              border: "2px solid red",
              background: bgColor[index],
            }}
            onClick={() => handleClick(index)}
          >
            hello {index}
          </div>
        );
      })}
      {allSame && (
        <div>
          <h1>{allSame}</h1>
        </div>
      )}
    </>
  );
};
export default Square;
