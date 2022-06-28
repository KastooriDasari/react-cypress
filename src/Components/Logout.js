import React from "react";

import { useAuth } from "../firebase";

const Logout = ({ handlelogout }) => {
  const currentUser = useAuth();
  return (
    <section className="Logout">
      
      <nav>
<h2 id="mail">success :{currentUser?.email}</h2>
        
        <button id="logout" onClick={handlelogout}>
          Logout
        </button>
  
      </nav>
 
    </section>
  );
};
export default Logout
