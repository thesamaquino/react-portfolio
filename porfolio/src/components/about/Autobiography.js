import { Button, Stack, Typography } from '@mui/material';
import  { useState } from 'react'

export const Autobiography = () => {
  const [showFullText, setShowFullText] = useState(false);
  const handleToggle = () => { setShowFullText(!showFullText); }
  return (
    <Stack spacing={3}>
    <Typography sx={{fontSize: '2rem'}}>Welcome to my humble abode!</Typography>
    <Typography sx={{fontSize: '2rem'}}>My real name is Sheila, but you can call me Sam—or &quot;my lady.&quot;</Typography>
    <Typography sx={{fontSize: '2rem'}}>My journey has been like one giant torus knot. It&apos;s complicated, but each unexpected turn has brought me closer to where I am today. </Typography>
    <Typography sx={{fontSize: '2rem'}}>It all began in the &quot;olden days&quot; when Turbo C was still relevant. Back then, a young and eager me enrolled in Computer Science at the University of the Philippines. But after a year, I realized that programming wasn&apos;t my true calling. {showFullText ? '' : '..'}</Typography>

    {showFullText && <>
      <Typography variant='h4'>I decided to switch to engineering, believing it was a better fit for me. Although I wasn&apos;t a natural coder, I still managed to thrive in a highly competitive environment, even if my code was a bit messy. This experience taught me resilience and how to tackle challenges head-on, no matter how complex they seemed.</Typography>
      <Typography sx={{fontSize: '2rem'}}>I moved on to pursue electronics engineering. Fast forward five years, and just before I could take my board exam and start my engineering career, my family and I migrated to Canada. And just like that, I was back to square one—no car, no job, no education. I worked odd jobs and took some time to figure out my future in this new country. It took me years to realize that “life is too short to study engineering again to work as an engineer.”
      </Typography>
      <Typography sx={{fontSize: '2rem'}}>I came across a book that said, &quot;Look in your past and think about what you love to do the most.&quot; For me, that was sketching clothes. I put two and two together and realized my true passion was in fashion design. So, I took a leap of faith and pursued Fashion Design at MC College. It was a weird transition, bending my mind from the logical, analytical world of electronics engineering to the creative world of fashion design. I learned to let go and trust the process. Be crazy. Have fun. Dream big.
      </Typography>
      <Typography sx={{fontSize: '2rem'}}>I still dream of launching my own clothing line and having an online store. But reality hit hard. Dreaming, willpower, and tenacity are not enough. One needs to pay the bills, too. After years of resisting the reality, I finally admitted that I needed a high-paying, stable job to support that dream. I asked myself, “What can I do that will still support that dream financially and in other ways?” The answer was Web Design. So yes, this lady got reunited with programming once again.
      </Typography>
      <Typography sx={{fontSize: '2rem'}}>This long paragraph is telling you that I joined this field for the money. But I stayed because I learned to love every headache, every tear, and every crazy laugh that comes with it. I&apos;m here to grow in this field, and I&apos;ll grow my fashion store along the way.
      </Typography>
    </>}
    <Button onClick={handleToggle} sx={{ display: "inline", fontSize: '2rem', color: '#ff4d6d' }}>
      {
        showFullText ? 'Read Less' : 'Read More'
      }
    </Button>
  </Stack>
  )
}
