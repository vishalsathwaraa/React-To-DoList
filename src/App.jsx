import { gsap } from "gsap";
import { useState, useEffect } from "react";
import List from './List'

function App() {

  const [input, setInput] = useState('');

  let span = document.createElement('span');
  let li = document.createElement('li');
  let item = document.querySelector('.item');

  useEffect(() => {

    span.addEventListener('click', function () {
      span.parentNode.remove();

    });
  }, [input])

  useEffect(() => {
    gsap.from('form', {
      opacity: 0,
      y: 50,
      delay:.3,
      duration: 2
    })
  }, []);


  const handleSubmit = (e) => {

    e.preventDefault();
    if(input !=''){
    span.innerHTML = '<i class="fas fa-trash"></i>';
    li.innerText = input;
    li.appendChild(span)
    item.appendChild(li);
    setInput('');
    }
  
  }

  return (

    <div className="container">
     <List input={input} setInput={setInput}  handleSubmit = { handleSubmit }/>
    </div>
//
  );

}
export default App;

