import { StrictMode } from 'react'
import './home.css'
import siteIconPng from '/zebbyicon.png';
import ProjectCard from '../ProjectCard/project-card';

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab);



export default function HomePage() {
  return (
    <StrictMode>
      <>
        <div>
          <img src={siteIconPng} className="logo" alt="TwilightZebby's profile picture" />
        </div>
        <h1>TwilightZebby</h1>
        <p id='personal-summary'>
          An amateur Software Engineer who dabbles in Quality Assurance (QA) and Community Management on the side.
        </p>

        <div className='social-buttons'>
          <a target='_blank' rel='noopener' href='https://discord.com/users/156482326887530498' className='button' style={{color: "white", backgroundColor: "#5865F2"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-discord' /></span> @twilightzebby</a>
          <a target='_blank' rel='noopener' href='https://bsky.app/profile/twilightzebby.bsky.social' className='button' style={{color: "white", backgroundColor: "#1083fe"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-bluesky' /></span> @twilightzebby.bsky.social</a>
          <a target='_blank' rel='noopener' href='https://github.com/TwilightZebby' className='button' style={{color: "white", backgroundColor: "#333333"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-github' /></span> twilightzebby</a>
          <br />
          <a target='_blank' rel='noopener' href='https://www.twitch.tv/twilightzebby' className='button' style={{color: "white", backgroundColor: "#6441a4"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-twitch' /></span> @twilightzebby</a>
          <a target='_blank' rel='noopener' href='https://steamcommunity.com/id/TwilightZebby/' className='button' style={{color: "black", backgroundColor: "#adadad"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-steam' /></span> twilightzebby</a>
          <a target='_blank' rel='noopener' href='https://www.youtube.com/@twilightzebby' className='button' style={{color: "black", backgroundColor: "#fc0032"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-youtube' /></span> @twilightzebby</a>
          <br />
          <a target='_blank' rel='noopener' href='https://www.youtube.com/@twilightzebbyvod' className='button' style={{color: "black", backgroundColor: "#fc0032"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-youtube' /></span> @twilightzebbyvod</a>
          <a target='_blank' rel='noopener' href='https://twilightzebby.tumblr.com/' className='button' style={{color: "white", backgroundColor: "#444444"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-tumblr' /></span> @twilightzebby</a>
          {/* <br /> */}
          {/* <a target='_blank' rel='noopener' href='mailto:someone@example.com' className='button' style={{color: "black", backgroundColor: "#34a853"}}><span className='social-icon'><FontAwesomeIcon icon='fa-solid fa-envelope' /></span> someone@example.com</a> */}
          <br />
          <a target='_blank' rel='noopener' href='https://ko-fi.com/Q5Q513H0Y5'><img className='button' height='40' style={{border: "0px", height: "40px"}} src='https://storage.ko-fi.com/cdn/kofi5.png?v=6' border='0' alt='Support me via ko-fi.com' /></a>
        </div>
        <br />
        <hr />
        <br />

        <ProjectCard
          uriLink="./portfolio"
          cardTitle="Portfolio"
          cardDescription="All the public projects Zebby has worked on, and is currently working on."
          cardDate="" />
        <ProjectCard
          uriLink="./resources"
          cardTitle="Resources"
          cardDescription="Documents & articles written by Zebby; either to serve as useful guides, or to combat misinformation."
          cardDate="" />
        <br />


        <p className="faded-text">
          This website is open sourced on <a href='https://github.com/TwilightZebby/twilightzebby.github.io' target='_blank'>GitHub here</a>.
        </p>
      </>
    </StrictMode>
  )
}
