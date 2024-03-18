import React from 'react'


const Articles = ({articles}) => {
    return (
        <div className='flex flex-col gap-5'>
          {articles.length !==0 && articles.map((article,index)=>{
            return (
              <div className='flex flex-row gap-4 justify-center place-items-center'>
                  <div className='w-[40px] h-[40px] rounded-full bg-yellow-500'></div>
                  <div className="flex flex-col gap-1 justify-start place-items-start" key={index}>
                      <div className=''>
                        <h1 className='w-fit'>{article.name } </h1>
                      </div>
                      <div className=''>
                        <h1 className='w-fit'>{article.username } </h1>
                      </div>
                  </div>
              </div>
            )
          })}
      </div>
    )
}

export default Articles
