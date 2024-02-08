import MapFunction from "./arrays/MapFunction";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import JsonStringify from "./json/JsonStringify";
import BooleanVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";

function JavaScript() {
  console.log("Hello World!");

  return (
    <>
      <h3>JavaScript</h3>
      <JsonStringify />
      <MapFunction />
      <WorkingWithArrays />
      <ArrowFunctions />
      <ES5Functions />
      <TernaryOperator />
      <IfElse />
      <BooleanVariables />
      <VariableTypes />
      <VariablesAndConstants />
    </>
  );
}

export default JavaScript;
