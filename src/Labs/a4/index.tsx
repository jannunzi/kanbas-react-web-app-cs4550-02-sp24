import ArrayStateVariable from "./ArrayStateVariable";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";

import React, { useState } from "react";
import CounterRedux from "./CounterRedux";
import TodosRedux from "./TodosRedux";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  const [count, setCount] = useState(7);

  return (
    <div>
      <h2>Assignment 4</h2>
      {/* <ParentStateComponent /> */}
      <TodosRedux />
      <CounterRedux />
      <Counter count={count} setCount={setCount} />
      <ArrayStateVariable count={count} />
      <ObjectStateVariable />
      <StringStateVariables />
      <EventObject />
      <PassingFunctions theFunction={sayHello} />

      <ClickEvent />
    </div>
  );
}

export default Assignment4;
