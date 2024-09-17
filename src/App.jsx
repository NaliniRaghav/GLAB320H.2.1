 
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Content color="#8e44ad" fontFamily="Arial, sans-serif"  text=" 
React is a popular JavaScript library developed by Facebook for building user interfaces. It helps create dynamic and interactive web applications, especially single-page apps, by managing the UI efficiently with components.

" />
      <Content color="#2980b9" fontFamily ="Abril Fatface, serif" text=" 
React uses a virtual DOM, which updates only parts of the webpage that need to change, improving performance. It also supports JSX, a syntax that allows developers to write HTML-like code inside JavaScript, making code more readable." />
      <Content color="#27ae60" fontFamily = "Courier Prime, monospace" text=" 
React’s component-based structure allows developers to break the user interface into smaller, reusable parts. Each component can manage its own state, making it easier to build, maintain, and scale applications.

" />
<Content color="#f1c40f" fontFamily = "Courier New, monospace" text=" 
React has a rich ecosystem with tools like React Router for navigation and Redux for state management. The React community provides many resources and libraries, making it easier to extend the library’s functionality.

" />
      <Footer />
    </div>
  );
}

export default App;
