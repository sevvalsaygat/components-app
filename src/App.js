import Toastify from "./components/Toastify"
import PhoneNumberInput from "./components/PhoneNumberInput";
import ImageGalery from "./components/ImageGalery";
import Map from "./components/Map";

function App() {
  return (
    <div>
      <Toastify/>
      <hr/>
      <PhoneNumberInput/>
      <hr/>
      <ImageGalery/>
      <hr/>
      <Map/>
    </div>
  );
}

export default App;
