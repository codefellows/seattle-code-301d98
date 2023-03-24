
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'
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
