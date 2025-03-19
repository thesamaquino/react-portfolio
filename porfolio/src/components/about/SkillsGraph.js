import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Stack, Typography } from '@mui/material';

export default function SkillsGraph() {
  const skillsData = [
    {label: "Figma", value: 70},
    {label: "Wireframing", value: 90},
    {label: "Sewing", value: 75},
    {label: "HTML", value: 90 },
    {label: "CSS", value: 86},
    {label: "JavaScript", value: 73},
    {label: "React.js", value: 69},
    {label: "Next.js", value: 65},
    {label: "Googling", value: 100},
    {label: "Sleuthing", value: 85},
  ]

  const labels = skillsData.map(skill => skill.label);
  const values = skillsData.map(skill => skill.value)

  return (
    <Stack> 
      <Typography variant="h4">My Skills</Typography>
      <BarChart
        xAxis={[{ scaleType: 'band', data: labels}]}
        yAxis={[{ data: ['muggle', 'young wizard', 'auror', 'professor']}]}
        series={[{ data: values, color: 'pink' }]}
        width={320}
        height={400}
    
      />
    </Stack>
  );
}