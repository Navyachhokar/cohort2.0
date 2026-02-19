import React from 'react'

const StoryCard = ({title,image,icon,source}) => {
    return (
      <div className="bg-[#2B2A33] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:shadow-black/50 transition-all flex flex-col h-full">
        <div className="h-44 w-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="p-4 flex flex-col justify-between grow">
          <h3 className="text-white font-semibold text-[15px] leading-tight line-clamp-3 mb-4">
            {title}
          </h3>

          <div className="flex items-center gap-2 mt-auto">
            <img src={icon} alt="" className="w-4 h-4 rounded-full" />
            <span className="text-gray-400 text-xs truncate uppercase tracking-wider">
              {source}
            </span>
          </div>
        </div>
      </div>
    );
}

export default StoryCard
