import './App.css';
import {ButtonMain, ButtonAlt} from './components/Button';
import Desc from './components/Desc';
import InfoBar from './components/InfoBar';
import Nav from './components/Nav';
import Top from './components/Top';
import RadarChart from './components/radarChart';
import radarChartOptions from './components/radarChartOptions';

////////////////////////////////////////////////////////////// 
////////////////////////// Data ////////////////////////////// 
////////////////////////////////////////////////////////////// 

var data = [
      [ // sample
      {axis:"Acidic",value:0.40},
      {axis:"Sweet",value:0.80},
      {axis:"Rice-Forward",value:0.4},
      {axis:"Earthy",value:0.40},
      {axis:"Juicy",value:0.20},
      {axis:"Sour",value:0.60}		
      ]
    ];

function App() {
  return (
    <div className="App w-full h-full flex flex-col">
      <header className="App-header w-full">
        <Nav />
      </header>
      <Top />
      <div className="w-full my-5 px-5 space-y-8">
        <InfoBar />
        <div class="space-y-2">
          <ButtonMain name="Rate Now"/>
          <ButtonAlt name="Purchase"/>
        </div>
        <Desc />
        <div className="radarChart mr-auto ml-auto w-[340px]"></div>
        <RadarChart id=".radarChart" data={data} options={radarChartOptions} />
      </div>
    </div>
  );
}

export default App;
