import { Outlet } from "react-router-dom";

// FONT AWESOME ICONS SETUP
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import "./App.css";

function App() {
  return (
    <main className="app-main container mx-auto">
      <Outlet />
    </main>
  );
}

export default App;
library.add(fab, fas, far);
