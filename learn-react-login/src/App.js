import { createContext, useState } from "react";
import LogInButtons from "./components/LogInButtons";
import PageLinks from "./components/PageLinks";
import Views from "./Views";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <LogInButtons />
        <PageLinks />
        <Views />
      </div>
    </UserContext.Provider>
  );
}

export default App;
