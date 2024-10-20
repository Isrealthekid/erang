import React from 'react'
import { maleEngineer,femaleEngineer } from '../../assets'
import './Team.css'


const Team = () => {
  return (
    
    <section className="team-section">
      <div className="team-section-header">
        <h2>Meet Our Team</h2>
        <h3>The Hands Behind this Initiative</h3>
      </div>

      <div className="team-container">
        <div className="team-card">
          <figure>
            <img src={femaleEngineer} alt="" />
          </figure>          

          <div className="team-info">
            <h4>John Doe</h4>
            <p>Co-Founder</p>
          </div>
          
        </div>

        <div className="team-card">
          <figure>
            <img src={femaleEngineer} alt="" />
          </figure>          

          <div className="team-info">
            <h4>John Doe</h4>
            <p>Co-Founder</p>
          </div>
          
        </div>

        <div className="team-card">
          <figure>
            <img src={femaleEngineer} alt="" />
          </figure>          

          <div className="team-info">
            <h4>John Doe</h4>
            <p>Co-Founder</p>
          </div>
          
        </div>

      </div>
    </section>

  )
}

export default Team