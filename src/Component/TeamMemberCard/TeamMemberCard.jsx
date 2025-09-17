import React from "react";

const TeamMemberCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-light rounded-lg overflow-hidden transition-transform transform min-w-[340px] cursor-pointer">
      {/* Card Image */}
      {image && (
        <img
          className="w-full min-h-74 object-cover object-center"
          src={image}
          alt={title}
        />
      )}

      {/* Card Content */}
      <div className="p-6 flex flex-col gap-2">
        {/* Card Title */}
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        {/* Card Description */}
        <p className="text-gray leading-tight text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
