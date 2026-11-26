import { StrictMode } from 'react'
import './resources.css'
import ProjectCard from '../ProjectCard/project-card';

/* import all the icons in Free Solid, Free Regular, and Brands styles */
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab); */


export default function Resources() {
  return (
    <StrictMode>
      <>
        <a id='return-home-link' href='./'>Return to Home</a>
        
        <h1>TwilightZebby's Resources</h1>
        <p id='personal-summary'>
          Handy resources or documents I have written up; either to be a helpful guide for others, or to help combat misinformation & fear-mongering.
        </p>
        <hr />

        <ProjectCard
          uriLink="https://gist.github.com/TwilightZebby/08104bcada85b1ed5d63b3dcb3ff84a2"
          cardTitle="Write-up about Discord's Web-indexable Server Content update"
          cardDescription="An article disproving misinformation and clearing up fears around Discord's update for Discovery-enabled Servers."
          cardDate="GitHub Gist created in November 2026." />

        <ProjectCard
          uriLink="https://gist.github.com/TwilightZebby/df3f9e5f8ec20dd5d7ed2afe6ed13ebd"
          cardTitle="Write-up on the 'Discord Hidden Bots' misinformation"
          cardDescription="A bullet-pointed article disproving the 'Discord Hidden Bots' misinformation waves"
          cardDate="GitHub Gist created in May 2025." />

        <ProjectCard
          uriLink="https://gist.github.com/TwilightZebby/517850b65575fdb7cf2ff156d36ece9b"
          cardTitle="Quick guide to User Apps on Discord"
          cardDescription="A short summarisation on what User Apps are on Discord, to help Server Admins who may be confused."
          cardDate="GitHub Gist created in June 2024." />

        <hr />

        <p className="faded-text">
          This website is open sourced on <a href='https://github.com/TwilightZebby/twilightzebby.github.io' target='_blank'>GitHub here</a>.
        </p>
      </>
    </StrictMode>
  )
}
