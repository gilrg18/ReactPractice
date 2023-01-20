function App() {
  //imperative way:
  //const para = document.createElement('p');
  //para.textContent = 'Hello';
  //document.getElementById('root').append(para);
  //alot of instructions for the DOM, this is the difference between vanilla JS and ReactJS
  return (
    //declarative way:
    <div>
      <h2>Let's get started woo!</h2>
      <p>Hello </p>
    </div>
  );
}

export default App;
