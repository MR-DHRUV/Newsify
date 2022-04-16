import './App.css';
import React, {  useState } from 'react'
import Navbar from './components/Navbar';
import News2 from './components/News2';
import LoadingBar from 'react-top-loading-bar';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


const App = () => {
  const itemsPerPage = 10;

  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);


  return (
    <div>
      <Router>
        <Navbar />
        <div className="content-div pattern-dots-lg">

          <LoadingBar
            color='#87d2ff'
            height={5}
            progress={progress}
          // onLoaderFinished={() => setProgress(0)}
          />

          <Switch>
            <Route exact path="/"><News2 setProgress={setProgress} apiKey={apiKey} key="general" pageSize={itemsPerPage} country='in' category="world" /></Route>
            <Route exact path="/business"><News2 setProgress={setProgress} apiKey={apiKey} key="business" pageSize={itemsPerPage} country='in' category="business" /></Route>
            <Route exact path="/entertainment"><News2 setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={itemsPerPage} country='in' category="entertainment" /></Route>
            <Route exact path="/health"> <News2 setProgress={setProgress} apiKey={apiKey} key="health" pageSize={itemsPerPage} country='in' category="health" /></Route>
            <Route exact path="/science"><News2 setProgress={setProgress} apiKey={apiKey} key="science" pageSize={itemsPerPage} country='in' category="science" /></Route>
            <Route exact path="/sports"> <News2 setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={itemsPerPage} country='in' category="sports" /></Route>
            <Route exact path="/technology"><News2 setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={itemsPerPage} country='in' category="technology" /></Route>
          </Switch>
        </div>
      </Router>

    </div>
  )
}

export default App

