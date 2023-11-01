import { useState } from "react";

type UserProps = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const handleLoggedIn = () => {
    setUser({ name: "zaky", email: "muhammadzakysyukur@gmail.com" });
  };

  const handleLoggedOut = () => {
    setUser(null);
  };

  return (
    <div>
      
      <button onClick={handleLoggedIn}>Login</button>
      <button onClick={handleLoggedOut}>Logout</button>

      <div>user name {user?.name}</div>
      <div>user email {user?.email}</div>
    </div>
  );
};
