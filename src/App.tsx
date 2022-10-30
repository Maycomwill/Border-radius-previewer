import {Body} from "./components/Body";
import {Header} from "./components/Header";
import "./styles/main.css";

function App() {
  return (
    <div className="w-screen h-screen font-sans flex flex-col gap-6 text-gray-100 bg-gray-900 px-4 py-2">
      <Header />
      <Body />
    </div>
  );
}

export default App;
