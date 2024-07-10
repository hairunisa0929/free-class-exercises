import { useState } from "react";

function App() {
  const [lightSwitch, setLightSwitch] = useState("Off");

  return (
    <>
      <button
        onClick={() => {
          // Buat set state light switch menjadi On saat tombol ditekan
          setLightSwitch("On");
        }}
      >
        Turn On
      </button>
      <button
        onClick={() => {
          // Buat set state light switch menjadi Off saat tombol ditekan
          setLightSwitch("Off");
        }}
      >
        Turn Off
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
