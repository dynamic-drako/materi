import UserPage from "./pages/userPage";
import "./App.css";

import UserContextProvider from "./contexts/UserContexts";
// wrap dari provider ke komponen apa aja yang mau di alirkan datanya

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <UserPage />
      </UserContextProvider>
    </div>
  );
}

export default App;
