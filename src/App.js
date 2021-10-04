import './styles/App.css';
import Map from './components/map';
import Player from './components/player';
import Button from './components/button';
import Enemy from './components/enemy';

function App() {
  return (
    <div className="App">
      <div className="MapDiv">
        <Map/>
        <Player spriteId={"hero_cyan"}/>
        <Enemy spriteId={"enemy_grass"} cartesianPosition={{x: 87.5, y: 62.5}} toggleCollision={true}/>
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
