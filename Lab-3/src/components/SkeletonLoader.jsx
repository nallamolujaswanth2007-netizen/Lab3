import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="grid">
      {Array(6).fill(0).map((_, index) => (
        <div key={index} className="card skeleton">
          <div className="skeleton-img"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
