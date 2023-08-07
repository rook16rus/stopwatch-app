import React from 'react';

import StopwatchDisplay from "../StopwatchDisplay/StopwatchDisplay";
import StopwatchList from "../StopwatchList/StopwatchList";
import StopwatchControls from "../StopwatchControls/StopwatchControls";

function App() {
    return (
        <div className="stopwatch">
            <StopwatchDisplay />
            <StopwatchList />
            <StopwatchControls />
        </div>
    );
}

export default App;