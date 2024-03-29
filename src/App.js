import GameVocales from "./components/GameVocales";
import GameNumeros from "./components/GameNumeros";
import GameLetras from "./components/GameLetras";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/juego/numeros" element={<GameNumeros />} />
        <Route path="juego/vocales" element={<GameVocales />} />
        <Route path="/" element={<GameLetras />} />
      </Routes>
    </div>
  );
}
