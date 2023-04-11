
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import imageUrls from './data.json'

function App() {
  return (
    <Container>
      <Header title="Beast Judge" />
      <Main message="Make Your Beast Opinion Known" imageUrls={imageUrls} />
      <Footer text="Your opinion counts!" />
    </Container>
  );
}

export default App;
