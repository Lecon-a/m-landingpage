import React, { useState } from "react";
import Counter from "./components/Counter";
import ListName from "./components/ListName";
import ListNameWithReducer from "./components/ListNameWithReducer";
import FormCom from "./components/FormCom";
import UseMemoExample from "./components/UseMemoExample";
import UseEffectExample from "./components/UseEffectExample";
import StopWatch from "./components/StopWatch";

const App = () => {

  return(
    <div className="topLevelContainer">
      <div className="container">
        <Counter innerText="Click Me & Count" />
        <ListName />
        <ListNameWithReducer />
        <FormCom />
    </div>
    <div className="container">
        <Counter innerText="Click Me & Count" />
        <UseMemoExample />
    </div>
    <div className="container">
        <Counter innerText="Click Me & Count" />
        <UseEffectExample />
        <StopWatch />
    </div>
    </div>
  )

}

export default App;