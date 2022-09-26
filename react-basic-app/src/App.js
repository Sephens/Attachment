import './App.css';
// import ReactDOM from "react-dom/client"

// const hello = <h1>Hi React</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));

const myArray = ['Apple', 'Banana', 'Orange'];

const myList = myArray.map((item) => <ul><li>{item}</li></ul>)

function Calc(a,b){
  const add = a+b;
  const sub = a-b;
  const mul = a*b;
  const divide = a/b;
  const remainder = a%b;

  return [add, sub, mul, divide,remainder]
}

const [add,sub,mul,divide,remainder] = Calc(15,5);



function App() {
  return (
    <div>
   <p>{myList}</p>
   <h4>Some simple calculation</h4>
   <ul>
     <li>Addition: {[add]}</li>
     <li>Subtraction: {[sub]}</li>
     <li>Multiplication: {[mul]}</li>
     <li>Division: {[divide]}</li>
     <li>Remainder: {[remainder]}</li>
   </ul>
   </div>
  );
}
export default App;
