import React from 'react';
import { observer } from 'mobx-react';
import FucComponentsDemo from './Components/FucComponentsDemo';


function App() {
  return (
    <div>
      <FucComponentsDemo />
    </div>
  );
}

export default observer(App);
