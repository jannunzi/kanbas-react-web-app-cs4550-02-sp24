import ArrayStateVariable from "./ArrayStateVariable";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h2>Assignment 4</h2>
      <ParentStateComponent />
      <ArrayStateVariable />
      <ObjectStateVariable />
      <StringStateVariables />
      <Counter />
      <EventObject />
      <PassingFunctions theFunction={sayHello} />

      <ClickEvent />
    </div>
  );
}

export default Assignment4;
