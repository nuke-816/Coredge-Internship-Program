import { useState } from "react";
function Toggle() {
    const [isOn, setIsOn] = useState(false);

    function toggle() {
        setIsOn(!isOn);
    }
    return (
        <div style={{ backgroundColor: isOn ? "green" : "red" }}>
            <h2>{isOn ? "ON" : "OFF"}</h2>
            <button onClick={toggle}>{isOn ? "OFF" : "ON"}</button>
        </div>
    );
}
export default Toggle;