import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='cards-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>
            Get started with AI-powered interview prep
          </h2>
          <p className='text-lg'>
            Get ready to ace your interviews with our AI-powered interview prep tool.
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>
              Start an Interview
            </Link>
          </Button>
        </div>
        <Image src='/robot.png' alt='robo-dude' width={400} height = {400} className='max-sm:hidden'/>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2> Your Interviews</h2>
        <div className='interviews-section'>
            {dummyInterviews.map((interview) => (
              <InterviewCard {...interview} key = {interview.id}/>
            ))}
        </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2> Take an Interviews</h2>
        <div className='interviews-section'>
           {dummyInterviews.map((interview) => (
              <InterviewCard {...interview} key = {interview.id}/>
            ))}
            {/* <p>You haven&apos;t taken any interviews yet</p> */}
        </div>
      </section>
    </>
  )
}

export default page