'use client'

import Snowfall from 'react-snowfall'

export default function ParticlesBG() {
  return (
    <div 
    >
      <Snowfall 
        snowflakeCount={500}
        speed={[0.5, 3]}
        wind={[-0.5, 2]}
      />
    </div>
  )
}