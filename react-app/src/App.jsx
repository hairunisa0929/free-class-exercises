import { useState } from "react";

function App() {
  const [lightSwitch, setLightSwitch] = useState("Off");

  return (
    <>
      <button onClick={() => {
        // Buat set state light switch menjadi On saat ditekan tombol On dan sebaliknya akan mnenjadi Off saat ditekan Off
      
      }}>
        Turn {lightSwitch == "Off" ? "On" : "Off"}
      </button>
      <p>
        The light is <b>{lightSwitch}</b>
      </p>
    </>
  );
}

export default App;

// contoh
// setLightSwitch((prevState) => (prevState == "Off" ? "On" : "Off"))
