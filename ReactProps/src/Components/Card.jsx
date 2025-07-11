import React from "react";
 
function Card({title,description,image}) {
    
    return (
      <> 
      <div>
        <div className="max-w-xs bg-white shadow-lg border-2 border-transparent bg-gradient-to-r p-[1px] from-pink-500 via-red-400 to-yellow-800">
        <div className="bg-black p-10 ">
        {image && <img src={image} alt={title} className="w-50 h-48 object-cover " />}
        <h2 className="mt-2 text-2xl font-semibold text-purple-800">{title}</h2>
        <p className="mt-2 text-purple-600 ">{description}</p>
        </div>
        </div>
      </div>
      </>
    )
  }
  export default Card