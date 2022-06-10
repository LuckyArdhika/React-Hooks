import React, { useState, useDeferredValue } from "react";
import "./style.css";

const List = ({ strings }) => {
  // useDeferredValue menggunakan value sebelumnya sampai value asli selesai di render |effect| dapat melanjutkan input sebelum dan sesudah render selesai.
  // tanpa useDeferredValue, menggunakan value asli saat itu juga sehingga jika ingin menginputkan harus menunggu render selesai |effect| harus menunggu hingga valuer terinput sudahh di render.
  
  // pas pakai ini, ketikan di input muncul bisa lebih dulu // defferedValue handling deffer for rendering great value until the value has rendered.
  // const deferred = useDeferredValue(strings)
  // return deferred.map(str => <p>{str}</p>)
  
  
  // console.log("Deffered: "+deferred);
  // console.log("String: "+strings);


  // pas pakai ini, ketikan di input harus nunggu perubahan list nya
  return strings.map(str => <p>{str}</p>)
}

const generateList = (prefix = '') => {
  let result = []
  for (let i=0; i<10000; i++) {
    result.push(prefix + i)
  }
  return result
}

export default function App() {
  const [prefix, setPrefix] = useState('')

  const strings = generateList(prefix)
  return (
    <div>
      <input onChange={a => setPrefix(a.target.value)} value={prefix} />

      <List strings={strings} />
    </div>
  );
}
