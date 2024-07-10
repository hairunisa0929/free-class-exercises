import { useState } from "react";
import BulbOn from "./assets/bulb-on.svg";
import BulbOff from "./assets/bulb-off.svg";

function App() {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsLightOn(!isLightOn);
        }}
      >
        Switch Light
      </button>

      <div style={{ marginTop: "10px" }}>
        {/* Buat conditional rendering agar saat true menampilkan lampu terang dan saat false menampilkan gambar lampu hitam */}
        {isLightOn ? (
          <img src={BulbOn} width="100" />
        ) : (
          <img src={BulbOff} width="100" />
        )}
      </div>
    </>
  );
}

export default App;

// contoh
// setLightSwitch((prevState) => (prevState == "Off" ? "On" : "Off"))
