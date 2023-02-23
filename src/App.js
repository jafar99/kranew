
import './App.css';
import kra from '../src/kra.png';

function App() {
  return (
    <div className="App">
        <div className='marquee'>
          
              <img src={kra} alt="" />
           
          
            <marquee className="marq" >
            <div className='tab'><span className='text'>Gold 24KT - RS.5677.20 Per Gm</span></div>
            <div  className='tab2'><span className='text'>Gold 24KT - RS.5283.70 Per Gm</span></div>
            <div  className='tab'><span className='text'>Gold 24KT - RS.4496.80 Per Gm</span></div>
            <div  className='tab2'><spa className='text'>Pune Sliver - Rs.66.30 per Gm</spa></div>
            </marquee>
           
        </div>
    </div>
  );
}

export default App;
