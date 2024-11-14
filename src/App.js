import 'bootswatch/dist/quartz/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Personages, Locations, Episodes, NotFound } from './Components';
import { PersonageDetails, LocationDetails, EpisodeDetails } from './Components/Details';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="personages" element={<Personages />}>
            <Route path=":id" element={<PersonageDetails />}/>
          </Route>
          <Route path="locations" element={<Locations />} >
            <Route path=":id" element={<LocationDetails />}/>
          </Route>
          <Route path="episodes" element={<Episodes />}>
            <Route path=":id" element={<EpisodeDetails />}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
