import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard name={"Doe, Jane"} age={45} hair={"Black"}></PersonCard>
        <PersonCard name={"Smith, John"} age={88} hair={"Brown"}></PersonCard>
        <PersonCard name={"Fillmore, Millard"} age={50} hair={"Brown"}></PersonCard>
        <PersonCard name={"Smith, Maria"} age={62} hair={"Brown"}></PersonCard>
    </div>
      );
}

      export default App;
