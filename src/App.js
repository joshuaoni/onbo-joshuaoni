import './App.css';
import Component from './Component';

function App() {
  const toggleDropDown = ()  => {
    document.querySelector('.drop-cont').classList.add('hide');
    var conts = document.querySelector('.conts');
    conts.classList.remove('ba3');
    conts.classList.add('bg3');
  }

  return (
    <div className="App">
      <Component/>
      <div className='body' onClick={toggleDropDown}></div>
    </div>
  );
}

export default App;
