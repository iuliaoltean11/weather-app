import logo from "./logo.svg";
import "./App.css";

function App() {
  const response = "thunde";

  return (
    <div className="App">
      <div className="App-header">
        <div class="dropdown">
          <img src="./hamburger_menu.png" class="dropbtn"></img>
          <img src="./search.png" class="dropbtn"></img>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div class="row">
          <div class="column left">
            <div className="box">
              <h3> Air Quality </h3>
              <h4> XX </h4>
              <small> Good </small>
            </div>
            <div className="box">
              <h3>Precipitation</h3>
              <h4>XX</h4>
              <small class="small-text">
                mm <span class="space">&nbsp;</span>in
              </small>
            </div>
            <div className="box">
              <h3>Wind</h3>
              <h4>XX</h4>
              <small class="small-text">
                mph <span class="space">&nbsp;</span>kmph
              </small>
            </div>
            <div className="box">
              <h3> Pressure </h3>
              <h4> XX </h4>
              <small class="small-text">
                mb <span class="space">&nbsp;</span>in
              </small>
            </div>
            <div className="box">
              <h3>Visibility</h3>
              <h4>XX</h4>
              <small class="small-text">
                km <span class="space">&nbsp;</span>mi
              </small>
            </div>
            <div className="box">
              <h3>UV Index</h3>
              <h4>X</h4>
              <small>High</small>
            </div>
          </div>
          <div class="column middle">
            <div>
              <h1>Sibiu, Romania</h1>
            </div>

            <div className="innermiddle" id="clouds-sun">
              <img
                src={
                  response === "thunder"
                    ? "./clouds-thunder.png"
                    : "./clouds&sun.png"
                }
                class="clouds-sun"
              ></img>
            </div>

            <div className="innermiddle" id="feels-like">
              xx<sup>o</sup>
              <p>
                <small>Feels like:</small>
              </p>
            </div>
            <div className="innermiddle" id="degrees">
              <b>F</b>
              <p>C</p>
            </div>

            <div className="innermiddle" id="degree">
              H:XX<sup>o</sup>
              L:XX<sup>o</sup>
            </div>
          </div>
          <div class="column right">
            <div className="box2">
              <img src="./moon.png" class="fullmoon"></img>
              <h3>June 20, 2022</h3>
              <small>Phase: Full Moon</small>
              <p>
                <small>Visibility: XX%</small>
              </p>
              <p>
                <small>Distance: XXX,XXX.XX km</small>
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <h2> 5-days forecast</h2>
        </div>
        <div className="row row-days">
          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>
          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>
        </div>

        <div className="row">
          <h2> last 7-days</h2>
        </div>
        <div className="row row-days">
          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>

          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>
          <div className="column-days">
            <div className="box-days">
              <p>Monday</p>
              <img src=""></img>
              <p>
                H: 30<sup>o</sup> L:14<sup>o</sup>
              </p>
              <p>mostly sunny</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
