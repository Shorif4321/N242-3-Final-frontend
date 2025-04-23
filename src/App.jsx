import { RouterProvider } from "react-router-dom";
import "./App.css";
import "react-day-picker/style.css";
import router from "./Routes/Route/Route";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto mt-20">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
