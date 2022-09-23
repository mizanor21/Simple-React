import './App.css';
import Countries from './components/Countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}




// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v2/all")
//       .then(res => res.json())
//       .then(data => setCountries(data));
//   }, [])
//   return (
//     <div className="">
//       <h1>Countries: {countries.length}</h1>
//       {
//         countries.map(country => <Country name={country.name} flags={country.flags.png}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div className="">
//       <h1>{props.name}</h1>
//       <img src={props.flags} alt="" />
//     </div>
//   )
// }

export default App;
