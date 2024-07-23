import {
  Github,
  Youtube,
  Palette,
  Facebook,
  Bot,
  Calendar,
  Book,
  Footprints,
  Moon,
  Weight,
} from "lucide-react";
import { useEffect } from "react";
import { Header } from "./Components/Header.jsx";
import { Card } from "./Components/Card.jsx";
import { Clock } from "./Components/Clock.jsx";
import { Weather } from "./Components/Weather.jsx";
import { Gpt } from "./Components/Gpt.jsx";
import "./App.css";
function App() {
  return (
    <>
      <Header></Header>
      <div className="wrap">
        <div className="grid1">
          <Card title={""} href={"https://github.com/vaquitamarina"} keyId={""}>
            <inf>Asistente de salud</inf>
          </Card>
        </div>

        <div className="grid2">
          <Card title={""} href={"https://chat.openai.com/"} keyId={"c"}>
            <Bot size={48} />
          </Card>
        </div>

        <div className="grid5">
          <Card
            title={"Pasos Diarios"}
            href={"https://github.com/vaquitamarina"}
            keyId={"g"}
          >
            <inf>
              3200
              <Footprints size={30} />
            </inf>
          </Card>
        </div>

        <div className="grid6">
          <Card
            title={"Horas de sueño"}
            href={"https://www.youtube.com/"}
            keyId={"y"}
          >
            <inf>
              8 h.
              <Moon size={30} />
            </inf>
          </Card>
        </div>

        <div className="grid7">
          <Card
            title={"Calendario"}
            href={"https://coolors.co/generate"}
            keyId={"e"}
          >
            <inf>
              <Calendar size={100} />
            </inf>
          </Card>
        </div>

        <div className="grid8">
          <Card title={"Peso"} href={"https://coolors.co/generate"} keyId={"h"}>
            <inf>
              61 kg
              <Weight size={30} />
            </inf>
          </Card>
        </div>

        <div className="grid9">
          <Card
            title={"Frecuencia cardiaca"}
            href={"https://www.facebook.com/"}
            keyId={"f"}
          >
            <inf>92bpm</inf>
          </Card>
        </div>

        <div className="grid10">
          <Card title={""} href={"https://coolors.co/generate"}>
            <Clock></Clock>
          </Card>
        </div>

        <div className="grid11">
          <Card title={""} href={"https://coolors.co/generate"}>
            <Book size={48} />
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
