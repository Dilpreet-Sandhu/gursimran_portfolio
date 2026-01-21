import React from 'react'

import Typewriter from 'typewriter-effect';

function TypewritterComponent() {
  
    return (
    <div style={{ fontSize: '4em', fontWeight: 'bold' }}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Hi , I am Gursimran')
            .pauseFor(2500)
            .deleteAll()
            .start()
            .typeString('I am a video Editor')
            .pauseFor(2500)
            .deleteAll()
            .start()
            .typeString("and a graphic designer")
            .pauseFor(2500)
            .deleteAll()
            .start()
            .typeString("and i do Color grading")
            .deleteAll()
            .typeString("Contact me for work")
            .start(); // Start the effect
        }}
      />
    </div>
  )

}

export default TypewritterComponent;
