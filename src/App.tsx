import { Body } from "./components/Body";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import "./styles/main.css";

function App() {
  return (
    <div className="w-full min-h-screen font-sans flex flex-col gap-6 text-gray-100 bg-gray-900 px-4 py-2 overflow-x-hidden">
      <Header />
      <Body className="flex-1" />
      <Footer />
    </div>
  );
}

export default App;
