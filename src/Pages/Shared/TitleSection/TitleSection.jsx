
const TitleSection = ({header, color, subHeader}) => {
    return (
         <div className="text-center sm:max-w-72 max-w-48  mx-auto">
            {
                subHeader ? <p className="text-[#D99904] pb-2 "> {subHeader} </p>:null
            }
            <h2 className={`border-y-4 py-2 ${color}  uppercase md:text-2xl sm:text-sm`}>{header}</h2>
            
        </div>
    );
};



export default TitleSection;