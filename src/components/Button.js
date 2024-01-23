function Button({className, onClick, text}){
    return (
        <div className={`rounded-3xl bg-purple-500 text-white
                        transition-all duration-500 ease-in-out
                        hover:bg-pink-500
                        active:scale-95 active:text-gray-200
                        ${className}`}>
            <button className="w-full h-full p-5 font-custom-buttons" onClick={onClick}>
                {text}
            </button>
        </div>
    );
}

export default Button;