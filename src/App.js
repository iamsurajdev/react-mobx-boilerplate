import React from "react";
import { inject, observer } from "mobx-react";

const App = inject("myStore")(
  observer((props) => {
    return (
      <div className="App">
        <h1>{props.myStore.value}</h1>
        <button onClick={props.myStore.add}>Add</button>
      </div>
    );
  })
);

export default App;
