import React, { useState } from 'react';
import nga from './assets/nigeria.png';
import cna from './assets/canada.png';
import fra from './assets/france.png';
import ind from './assets/india.png';
import aus from './assets/austallia.png';
import usa from './assets/united.png';
import rsa from './assets/south-african-flag-o4f.png';
import den from './assets/den.png';
import ger from './assets/DE-Germany-Flag-icon.png';
import down from './assets/down.png';

const countries = [
    {code:'+1',flag:cna},
    {code:'+1',flag:usa},
    {code:'+234',flag:nga}, 
    {code:'+27',flag:rsa},
    {code:'+33',flag:fra},
    {code:'+45',flag:den},
    {code:'+49',flag:ger},
    {code:'+61',flag:aus},
    {code:'+91',flag:ind},
]

const Component = () => {
    const [selection, setSelection] = useState('+91');
    const [img, setImg] =  useState(ind);

    const setDetails = (code, flag) => {
        setSelection(code);
        setImg(flag);
        document.querySelector('.drop-cont').classList.add('hide');
    }

    const myFunction = () => {
        document.querySelector('.drop-cont').classList.toggle('hide');
        var conts = document.querySelector('.conts');
        conts.classList.remove('bg3');
        conts.classList.add('ba3');
    }

    return (
        <div className='cont'>
            <div className="dropdown">
                <div className='conts bg3'>
                    <div className='label'>
                        <p>Phone Number</p>
                    </div>
                    <div className='flex'>
                        <div className='container'>
                            <div onClick={myFunction} className="dropbtn">
                                <div className='btn-cont'>
                                    <img alt='' src={img}/> <div className='flex select'>{selection} <img className='down' alt='' src={down}/></div>
                                </div>
                            </div>
                            <div className='border'></div>
                        </div>
                        <input 
                            className='ten number' 
                            type='number' 
                            onInput={(e)=>{
                                e.target.value = e.target.value.slice(0,10);
                            }}
                            onFocus={()=>{
                                var conts = document.querySelector('.conts');
                                conts.classList.remove('bg3');
                                conts.classList.add('ba3');
                            }}
                        />
                    </div>
                </div>
                <div className='drop-cont hide'>
                    <div className="dropdown-content">
                        {countries.map(country => {
                            return (
                                <div className='options' onClick={()=>{
                                    setDetails(country.code, country.flag);
                                }} key={country.code}>
                                    <img className='img' alt='' src={country.flag}/> <span>{country.code}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Component;