import './App.css';
import Component from './Component';

function App() {
  // close the drop down when user clicks outside the drop down
  const removeDropDown = ()  => {
    document.querySelector('.drop-cont').classList.add('hide');
    var conts = document.querySelector('.conts');
    conts.classList.remove('ba3');
    conts.classList.add('bg3');
  }

  return (
    <div className="App">
      <Component/>
      <div className='body' onClick={removeDropDown}></div>
    </div>
  );
}

export default App;
