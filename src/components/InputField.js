import ContextWarning from "./ContextWarning";

function InputField({fieldName, fieldPlaceholder, fieldValue, fieldWarning, onChange}){

    return(
        <div className="flex flex-col text-left">
            <label className="w-full mb-2 font-custom-main text-sm text-white flex items-center" 
                htmlFor={fieldName}>
                <p>{fieldName}</p>
                {fieldWarning && <ContextWarning className='ml-1' text={fieldWarning}/>}
            </label>
            <input className="border-2 border-black p-3
                            w-max
                            font-custom-buttons
                            focus:outline-none" 
                    name={fieldName} placeholder={fieldPlaceholder} 
                    value={fieldValue} onChange={onChange}/>
        </div>
    )
}

export default InputField;