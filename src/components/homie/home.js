// import React, { useRef } from "react"
// import { Link, useNavigate } from "react-router-dom"


// export const Home = () => {

    

//     return <> 
//   <body>
//     <img src="https://i.imgur.com/xz1W4TO.png" alt="My Image" />
//   </body>
//   </>

        
    
// }

import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"


export const Home = () => {

  return (
    <div style={{
      display: 'flex',
      opacity: 0.7,
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh' // Set the container height to full viewport height
    }}>
      <img src="https://i.imgur.com/xz1W4TO.png" alt="My Image" />
    </div>
  );
}
