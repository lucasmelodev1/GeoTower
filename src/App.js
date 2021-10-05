import './styles/App.css';
import Map from './components/map';
import Player from './components/player';
import Button from './components/button';
import Enemy from './components/enemy';

function App() {
  return (
    <div className="App">
      <div className="GameScreen">
        <Player spriteId={"hero_cyan"}/>
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
            <Button backgroundImageId={"attack"} fn={() => {window.dispatchEvent(new KeyboardEvent('keypress',{'key':'e'}));}}/>
            <Button backgroundImageId={"potion"} fn={() => {window.dispatchEvent(new KeyboardEvent('keypress',{'key':'q'}));}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
