import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    checked: localStorage.getItem("theme") === "dark" ? true : false,
    theme: localStorage.getItem("theme"),
  };

  setAttr = () =>
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));

  setCheck = () => this.setState({ checked: !this.state.checked });

  setTheme = theme => {
    localStorage.setItem("theme", theme);
    this.setAttr();
    this.setCheck();
}

  componentDidMount() {
    this.setAttr();
  }

  toggleThemeChange = () => 
    this.state.checked ?
      this.setTheme("light")
    : this.setTheme("dark");
    

  render() {
    return (
      <div className="App">
        <div className="row d-flex flex-row-reverse mr-4 pt-2">
          <div className="col-md-1">
            <label className="switch">
              <input
                type="checkbox"
                defaultChecked={this.state.checked}
                onChange={this.toggleThemeChange}
              />
              <span className="slider round" />
            </label>
          </div>
        </div>
        <div className="App-header">
          <p>Click the switch to toggle themes</p>
        </div>
      </div>
    );
  }
}

export default App;
