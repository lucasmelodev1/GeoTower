import './styles/App.css';
import Map from './components/map';
import Button from './components/button';
import HpBar from './components/hpbar'

function App() {
  return (
    <div className="App">
      <div className="GameScreen">
        <div className="MapDiv">
          <Map mapId={"grass_map"}/>
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
            <Button backgroundImageId={"attack"} fn={() => {window.dispatchEvent(new KeyboardEvent('keypress',{'key':'q'}))}}/>
            <Button backgroundImageId={"potion"} fn={() => {window.dispatchEvent(new Event('playerHeal'));}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
