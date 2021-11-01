import './styles/App.css';
import Map from './components/map';
import Button from './components/button';
import { useRef } from 'react'

function App() {

  const mapRef = useRef()

  const attack = () => {
    mapRef.current.useAttack();
  }

  const regen = () => {
    mapRef.current.useRegen();
  }

  return (
    <div className="App">
      <div className="GameScreen">
        <div className="MapDiv">
          <Map mapId={"grass_map"} ref={mapRef}/>
        </div>
        <div className="HudButtons">
          <div className="MoveButtons">
            <Button backgroundImageId={"up"} fn={() => {window.dispatchEvent(new KeyboardEvent('keypress',{'key':'w'}));}}/>
            <div className="MoveButtonsBottom">
              <Button backgroundImageId={"left"} fn={() => {window.dispatchEvent(new KeyboardEvent('keypress',{'key':'a'}));}}/>
              <Button backgroundImageId={"down"} fn={() => {window.dispatchEvent(new KeyboardEvent('keypress',{'key':'s'}));}}/>
              <Button backgroundImageId={"right"} fn={() => {window.dispatchEvent(new KeyboardEvent('keypress',{'key':'d'}));}}/>
            </div>
          </div>
          <div className="ActionButtons">
            <Button backgroundImageId={"attack"} fn={attack}/>
            <Button backgroundImageId={"potion"} fn={regen}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
