import React from 'react'

function HowWeWork() {
  return (
      <div className="wrap">
      
        <div className="eyebrow">How we work</div>
      
        <div className="head-row">
          <h2>Five stages, from br here first walk-through to <em>move-in</em>.</h2>
          <p className="head-copy">The path is the same regardless of typology — what changes is how long each stage takes. Below is the shape of a typical project.</p>
        </div>
      
        <div className="steps">
          <div className="steps-line"></div>
          <div className="steps-row">
      
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-duration">Weeks 1–2</div>
              <h3>Listen</h3>
              <p>We walk the site together and talk through how you actually live or work — budget, constraints, and the things that matter more than square footage.</p>
            </div>
      
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-duration">Weeks 3–6</div>
              <h3>Concept</h3>
              <p>We return with two or three directions grounded in the site — massing, light, and material — and refine the one that fits.</p>
            </div>
      
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-duration">Weeks 7–16</div>
              <h3>Develop &amp; detail</h3>
              <p>The chosen direction becomes full drawings — structure, materials, and every junction — coordinated with engineers and consultants.</p>
            </div>
      
            <div className="step">
              <div className="step-num">04</div>
              <div className="step-duration">Build phase</div>
              <h3>Build</h3>
              <p>We stay on site through construction — regular visits, contractor coordination, and decisions made in real time as the building comes up.</p>
            </div>
      
            <div className="step">
              <div className="step-num">05</div>
              <div className="step-duration">After handover</div>
              <h3>Live</h3>
              <p>A walkthrough at handover, then a follow-up once you've lived in the space a while — because a building only proves itself in use.</p>
            </div>
      
          </div>
        </div>
 
      </div>
  )
}

export default HowWeWork