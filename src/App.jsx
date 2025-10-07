import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Club from "./pages/Club.jsx";
import Horaires from "./pages/Horaires.jsx";
import Gymnases from "./pages/Gymnases.jsx";
import Equipes from "./pages/Equipes.jsx";
import Partenaires from "./pages/Partenaires.jsx";
import Boutique from "./pages/Boutique.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/accueil" replace />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/club" element={<Club />} />
        <Route path="/horaires" element={<Horaires />} />
        <Route path="/gymnases" element={<Gymnases />} />
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
