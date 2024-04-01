import React from "react";

function Input({icon, placeholder, min, max, change}){
    return(
		<div className="flex flex-wrap items-stretch mb-4 relative w-full self-center">
			<div className="flex -mr-px">
				<span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"><img src={"./public/icons/"+icon} className="w-8" alt="" srcSet="" /></span>
			</div>	
			<input type="number" onChange={change} min={min} max={max} className="flex-shrink flex-grow leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder={placeholder} required/>
		</div>		
    )

}

export default Input