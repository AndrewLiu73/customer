import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

//pages & components
import Home from './Main'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
            <div className="container">
                <Link to="/">
                    <h1>Mobile Store Database

                    </h1>
                    <h5>To view changes, refresh page (update does not work in frontend but does in backend)</h5>
                </Link>
                <Link to="/MobileDatabase">
                  <h2>Mobile Database</h2>
                </Link>
            </div>
        </header>
        <div className = "size">
          <Routes>
            <Route
              path ="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
