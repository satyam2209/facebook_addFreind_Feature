// import React, {useState} from "react";
// import "./styles.css";

// export default function App() {

//   const[text,setText] = useState("Stranger")
//   const[textColor,setTextColor]=useState("Red");
//   const[buttonText,setButtonText] = useState("Add Freind");
//   const[buttonBgcolor,setButtonBgcolor] = useState("cadetblue");
//   const[buttonTextColor,setButtonColor] = useState("#fff");
//   let[flag,setFlag] = useState(0)

//   const handleButton = () => {
//     if(flag===0)
//     {
//      setText("Freinds");
//      setTextColor("green");
//      setButtonText("Remove");
//      setButtonBgcolor("#dadada");
//     setButtonColor("#111");
//     console.log("click me",+flag);
//     setFlag(1);
//     }
//     if(flag===1)
//     {
//      setText("Stranger");
//      setTextColor("red");
//      setButtonText("Add Freind");
//      setButtonBgcolor("cadetblue");
//     setButtonColor("#fff");
//     console.log("click me",+flag);
//     setFlag(0);
//     }
//   }

//   return (
//       <div className="container">
//           <span className="design">
//             <img src="https://images.pexels.com/photos/2326887/pexels-photo-2326887.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Boy"/>
//             <h1>Huan Martin</h1>
//             <h2 style={{color:textColor}}>{text}</h2>
//             <button style={{backgroundColor:buttonBgcolor, color:buttonTextColor}} onClick={handleButton}>{buttonText}</button>
//           </span>
//       </div>
//   );
// }

// lower is more efficient  code from upper code

import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isFriend, setIsFriend] = useState(false);

  const toggleFriendship = () => {
    setIsFriend(!isFriend);
  };

  const buttonText = isFriend ? "Remove" : "Add Friend";
  const buttonBgColor = isFriend ? "#dadada" : "cadetblue";
  const buttonTextColor = isFriend ? "#111" : "#fff";
  const textColor = isFriend ? "green" : "red";
  const text = isFriend ? "Friend" : "Stranger";

  return (
    <div className="container">
      <span className="design">
        <img
          src="https://images.pexels.com/photos/2326887/pexels-photo-2326887.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Boy"
        />
        <h1>Huan Martin</h1>
        <h2 style={{ color: textColor }}>{text}</h2>
        <button
          style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          onClick={toggleFriendship}
        >
          {buttonText}
        </button>
      </span>
    </div>
  );
}
