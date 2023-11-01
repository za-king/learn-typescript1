import { useState } from "react";

export const LoggedIn = () => {

    const [isLoggedIn , setIsLoggedIn] = useState(false)


  const handleLoggedIn = () => { setIsLoggedIn(true)};
  const handleLoggedOut = () => { setIsLoggedIn(false)};
  return (
    <div>
      <button onClick={handleLoggedIn}>Login</button>
      <button onClick={handleLoggedOut}>Logout</button>

      <div> User Is {isLoggedIn ? 'Logged In' : "Logged Out"}</div>
    </div>
  );
};
