import { gsap } from "gsap";
import { useState, useEffect } from "react";
import Form from './Form'

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
      left: -40,
      duration: 1
    })
  }, []);


  const handleSubmit = (e) => {

    e.preventDefault();
    span.innerHTML = '<i class="fas fa-trash"></i>';
    li.innerText = input;
    li.appendChild(span)
    item.appendChild(li);
    setInput('');

  }

  return (

    <div className="container">
     <Form  input={input} setInput={setInput}  handleSubmit = { handleSubmit }/>
    </div>
//
  );

}
export default App;

