import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./components/Task";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Task
                task={{ id: "1", title: "Test Task", state: "TASK_INBOX" }}
                onArchiveTask={() => {}}
                onPinTask={() => {}}
            />
        </>
    );
}

export default App;
