import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './styles/artistPlaceHolder.module.css'

export default function SkeletonArtistList() {
  return (
   
      <div className={styles.request_filter_col}>
        {Array.from({ length: 10 }, (_, index) => (
          <Skeleton className={styles.request_filter_grid} key={index}/>
        ))}
      </div>
  
  );
}
