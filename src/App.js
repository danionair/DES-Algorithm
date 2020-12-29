import React from 'react';
import { TextField,Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import readMessage from './Components/read_message';
import Icode from './Components/InitialCode';
import Tkey from './Components/TotalKeys';
import Dres from './Components/DecrRes';
import Lrgen from './Components/Lrgen';
import './App.css';
import Rtdes from './Components/Decbin';


function App() {
  const [value, setValue] = React.useState('');
  const [ic, setIc] = React.useState([]);
  const [tk, setTk] = React.useState([]);
  const [tkl, setTkl] = React.useState([]);
  const [rl, setRl] = React.useState([]);
  const [dr, setDr] = React.useState([]);
  const [drt, setDrt] = React.useState([]);
  //const [ic, setIc] = React.useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const readVal =()=>{
    let mess = []
    mess[0]=Array.from(document.getElementById('outlined-m').value)
    mess[1]=Array.from(document.getElementById('outlined-k').value)
    const resf=readMessage(mess);console.log(resf)
    Object.keys(resf).forEach(element => {
      switch (element) {
        case 'cir':
          setIc(resf[element])
        break;
        case 'ktl':
          setTkl(resf[element])
        break;
        case 'ktr':
          setTk(resf[element])
        break;
        case 'dtt':
          Object.keys(resf[element]).forEach(element1 => {
            switch (element1) {
              case 'lr':
                setRl(resf[element][element1])
              break;
              case 'des':
                setDr(resf[element][element1])
              break;
              case 'dest':
                setDrt(resf[element][element1])
              break;
              default:
              break;
            }
          });
        break;
        default:
        break;
      }
    });
    
  }

  
  return (
    <div>
      
        <h1>Algoritmo de Criptografía - DES</h1>
        <div>
          <TextField required id="outlined-m" label="Intoduzca el mensaje cifrado"variant="outlined"multiline rowsMax={4}value={value}onChange={handleChange}/>
          <TextField required id="outlined-k" label="Intoduzca la Clave"variant="outlined"multiline rowsMax={4}/>
          <p>Introduzca los datos en formato hexadecimal</p>
        </div>
        <div>
        <label htmlFor="archivoEntrada">
            <Button variant="contained" style={{ backgroundColor: green[500],color: '#fafafa'}} component="span"onClick={()=>readVal()}>Introducir datos</Button>
        </label>
        </div>
        <div>
          {ic.length>0?<Icode vecI={ic}></Icode>:null}
          {tkl.length>0&&tk.length>0?<Tkey vecL={tkl}vecC={tk}></Tkey>:null}
          {rl.length>0?<Lrgen vecB={rl}></Lrgen>:null}
          {drt.length>0?<Rtdes vecR={drt}></Rtdes>:null}
          {dr.length>0?<Dres vecD={dr}></Dres>:null}
        </div>
    </div>
  );
}

export default App;