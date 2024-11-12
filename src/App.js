import 'bootswatch/dist/quartz/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Personages, Locations, Episodes, NotFound, PersonageDetails } from './Components';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="personages" element={<Personages />}>
            <Route path=":id" element={<PersonageDetails />}/>
          </Route>
          <Route path="locations" element={<Locations />} />
          <Route path="episodes" element={<Episodes />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
