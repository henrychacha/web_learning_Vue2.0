import React from 'react';
import './App.css';

import { Button,Carousel } from 'antd';
import { StepForwardOutlined } from "@ant-design/icons"
function App() {
  return (
    <div className="App">
      <Button>antd 组件</Button>
      <StepForwardOutlined />
      <Carousel autoplay autoplaySpeed={1000}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3 >2</h3>
        </div>
        <div>
          <h3 >3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>,
    </div>
  );
}

export default App;
