// import React, { useEffect } from 'react'
// import {useState} from "react"

// const Sizechart = () => {
//   const [response, setResponse] = useState([]);

//   const fetchCategories = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((json) => setResponse(json));
//   };

//   return (
//     <>
//       <div>
//             <button onClick={fetchCategories}>
//               Show categories
//             </button>
          
//         </div>

//       <div style={{margin: "100px"}}>{response} gfgfggf</div>

//       <div>

//         {
//           response.map((userData) => {
//             const {userId, id, title, body} = userData
//             return (<ul>
//               <li>{userId}</li>
//               <li>{id}</li>
//               <li>{title}</li>
//               <li>{body}</li>
//             </ul>)
//           })
//         }


//       </div>



//     </>
//   );
// };
// export default Sizechart

import {useEffect, useState} from "react";
import UserDatas from "./UserDatas";

const API = "https://api.powerlook.in/rest/default/V1/sizechart?sku=01-591910";

const Sizechart = () => {
    const [users, setUsers] = useState([]);

   

    const fetchUsers = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            if (data.length > 0) {
                console.log(JSON.stringify(setUsers(Object.keys(data.product.sizechart_attribute))))
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        return fetchUsers();
    }, [])
    return <>
            <UserDatas users={users}/>
    </>
}

export default Sizechart;