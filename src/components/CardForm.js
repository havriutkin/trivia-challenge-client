function CardForm({className, formName, options, onChange}){
    return(
        <div className={`${className}`}>
            <div className="w-full h-full border border-white rounded-3xl
                        
                            flex flex-col items-center justify-around">
                <h2 className="text-lg font-custom-main text-white w-3/4 text-center">
                    {formName}
                </h2>

                <select onChange={onChange} className="w-2/3 p-5 rounded-md bg-purple-800 
                                font-custom-buttons text-white text-center text-lg
                                transition-all duration-500 ease-in-out
                                hover:scale-110
                                focus:outline-none 
                              ">
                    {options.map((el, i) => <option value={el} key={i}>{el}</option>)}
                </select>
            </div>
        </div>
    );
}

export default CardForm;