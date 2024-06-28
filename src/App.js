import logo from "./Logo RB.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>

        <main>
          <div className="title">
            <h2 className="text-center">📖 Rachel's Dictionary App 📖</h2>
          </div>
          <Dictionary />
        </main>

        <footer className="App-footer">
          This project was coded by{" "}
          <a href="https://github.com/Skyelene">Rachel Buday</a>, is
          open-sourced on{" "}
          <a href="https://github.com/Skyelene/Dictionary-Project">Github</a>,
          and is hosted on{" "}
          <a href="https://dictionary-app-rb.netlify.app/">Netlify.</a>
        </footer>
      </div>
    </div>
  );
}
