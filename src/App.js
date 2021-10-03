import './styles/App.css';
import Map from './components/map';
import Player from './components/player';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <div className="MapDiv">
        <Map/>
        <Player spriteId={"hero_cyan"}/>
        <div className="HudButtons">
          <div className="MoveButtons">
            <Button backgroundImageId={"up"}/>
            <div className="MoveButtonsBottom">
            <Button backgroundImageId={"left"}/>
            <Button backgroundImageId={"down"}/>
            <Button backgroundImageId={"right"}/>
            </div>
          </div>
          <div className="ActionButtons">
            <Button backgroundImageId={"attack"}/>
            <Button backgroundImageId={"potion"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
