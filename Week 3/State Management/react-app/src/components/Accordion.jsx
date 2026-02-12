import { useState } from "react";


function Accordion() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div  onClick={() => setIsOpen(!isOpen)}>
            <h2>{isOpen ? "▼" : "▶"}</h2>
            {isOpen && <p>May Chaos Take The World.</p>}
        </div>
    );
}
export default Accordion;