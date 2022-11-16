import React from 'react';
import "./assets/css/index.css"
import MyRouter from "./router/MyRouter"
import IndexRouter from "./router/IndexRouter"
function App() {
  return (
    <div className="App">
      <MyRouter routes={IndexRouter}></MyRouter>
    </div>
  );
}

export default App;
