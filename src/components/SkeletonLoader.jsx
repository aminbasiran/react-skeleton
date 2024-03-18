import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const SkeletonLoader = ({ amount }) => {
    return (
      <>
        {Array(amount)
            .fill(0)
            .map((_, index) => (
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
        
                                <div key={index} className='flex flex-row gap-3'>
                                <Skeleton circle width={40} height={40} />
                                <div className='flex flex-col'>
                                    <h1 className='w-[50px]'>
                                        <Skeleton />
                                    </h1>
                                </div>
                                </div>
                    </SkeletonTheme>
            ))}
      </>
    );
  };

export default SkeletonLoader
