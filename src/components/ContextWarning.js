import { useState } from "react";
import { CiWarning } from "react-icons/ci";

import ContextMenu from "./ContextMenu";

function ContextWarning({text, className}){
    const [showContext, setShowContext] = useState(false);

    return (
        <div className={`relative ${className}`}
            onMouseEnter={() => setShowContext(true)}
            onMouseLeave={() => setShowContext(false)}>
            <CiWarning className="text-xl text-yellow-500"/>
            {showContext && <ContextMenu text={text}/>}
        </div>
    )
}

export default ContextWarning;