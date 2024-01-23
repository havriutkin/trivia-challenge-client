import { decodeHTMLEntities } from "../utils/helpers";

function AnswerButton({className, onClick, text, index, isActive}){
    const bgColor = isActive ? "bg-pink-500" : "bg-purple-500";

    return (
        <div className={`rounded-3xl text-white border
                        ${bgColor}
                        transition-all duration-500 ease-in-out
                        hover:scale-110
                        ${className}`}>
            <button value={index} className="w-full h-full p-5 font-custom-buttons text-center" onClick={onClick}>
                {decodeHTMLEntities(text)}
            </button>
        </div>
    );
}

export default AnswerButton;