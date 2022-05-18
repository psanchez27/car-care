import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from 'react-bootstrap'
import Tabs from "./components/Tabs";
import Hero from "./components/Hero";

function App() {
  return (
    <>
        <Header />
          <Container>
            <main>
              <Hero />
            </main>
          </Container>
        <Footer />
    </>
  );
}

export default App;
