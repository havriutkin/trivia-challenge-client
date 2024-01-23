const ContextMenu = ({text}) => {
    return (
        <div className="absolute w-max left-full mb-2 px-2 py-1
                        bg-gray-500
                        font-custom-buttons text-white text-xs rounded z-20">
            <p className="">{text}</p>
        </div>
    );
};

export default ContextMenu;