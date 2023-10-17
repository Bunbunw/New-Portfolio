import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/Palette.css";

function Divider() {
  return <div className="divider"></div>;
}

function App() {
  return (
    <>
      <Navbar />
      <div className="body">
        <section className="about"></section>
        <Divider />
        <section className="featured"></section>
        <Divider />
        <section className="projects"></section>
        <Divider />
        <section className="contact"></section>
      </div>
      <Footer />
    </>
  );
}

export default App;
