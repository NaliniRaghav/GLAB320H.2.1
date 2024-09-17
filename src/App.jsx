 
import Header from "../src/components/Header";
import Content from "../src/components/Content";
import Footer from "../src/components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </div>
  );
}

export default App;
