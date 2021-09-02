import './App.css';
import PersonCard from './components/PersonCard';
import FuncPersonCard from './components/FuncPersonCard';

function App() {
  return (
    <div className="App">
        {/* <PersonCard name={"Doe, Jane"} age={45} hair={"Black"}></PersonCard>
        <PersonCard name={"Smith, John"} age={88} hair={"Brown"}></PersonCard>
        <PersonCard name={"Fillmore, Millard"} age={50} hair={"Brown"}></PersonCard>
        <PersonCard name={"Smith, Maria"} age={62} hair={"Brown"}></PersonCard> */}
        <FuncPersonCard firstName={"Jane"} lastName={"Doe"} age={45} hair={"Black"}></FuncPersonCard>
        <FuncPersonCard firstName={"John"} lastName={"Smith"} age={88} hair={"Brown"}></FuncPersonCard>
        <FuncPersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hair={"Brown"}></FuncPersonCard>
        <FuncPersonCard firstName={"Maria"} lastName={"Smith"} age={62} hair={"Brown"}></FuncPersonCard>
    </div>
      );
}

      export default App;
