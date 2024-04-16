import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonArtistList() {
  return (
    <div>
      <div className="request_filter_col mt_20">
        {Array.from({ length: 10 }, (_, index) => (
          <Skeleton className="request_filter_grid" key={index} height={189} />
        ))}
      </div>
    </div>
  );
}
