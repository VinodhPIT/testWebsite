import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonArtistList() {
  return (
    <div>
      <div >
        {Array.from({ length: 1 }, (_, index) => (
          <Skeleton  key={index} height={13} width={80} />
        ))}
      </div>
    </div>
  );
}
