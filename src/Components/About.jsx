import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#1d1d26] text-gray-200'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Fawwaz, Nice To Meet You. Please Take A Look Around</p>
                </div>
                <div>
                    <p>Enthusiastic & Driven, I Have Deep Passion For Software Development & Problem 
                    Solving. Through Years Of Practice & Many Personal Projects, I Honed My Skills As 
                    A Programmer.</p>  
                    <p>I Am Mostly A Self-Learner, I Can Easily Adapt To New Things And 
                    Always Ready To Take On A Challenge.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About