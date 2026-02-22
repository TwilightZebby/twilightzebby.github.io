import { StrictMode } from 'react'
import './home.css'
import siteIconPng from '/zebbyicon.png';
import twiliteIconPng from '/twiliteicon.png';
import welcomeEditorIconPng from '/welcomeeditoricon.png';
import homecordIconPng from '/homecordicon.png';
import drfterxIconPng from '/dr1fterxicon.png';
import discordIconPng from '/discordicon.png';
import ProjectCard from '../ProjectCard/project-card';
import { Helmet, HelmetProvider } from '@dr.pogodin/react-helmet';

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
        <HelmetProvider>
            <Helmet>
                <title>TwilightZebby's website</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="TwilightZebby's Website" />
                <meta property="og:url" content="https://twilightzebby.github.io/" />
                <meta property="og:description" content="TwilightZebby's personal website & portfolio." />
                <meta property="og:image" content="https://twilightzebby.github.io/zebbyicon.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:height" content="100" />
                <meta property="og:image:alt" content="TwilightZebby's avatar - a floating blue-hued ghost, designed similar to PacMan style ghosts, with round robotic ears" />
            </Helmet>
        </HelmetProvider>
        <div>
          <img src={siteIconPng} className="logo" alt="TwilightZebby's profile picture" />
        </div>
        <h1>TwilightZebby</h1>
        <p id='personal-summary'>
          An amateur Software Engineer who dabbles in Quality Assurance (QA) and Community Management on the side.
          <br />Below you can find projects I am either currently working on, or have worked on. :)
        </p>

        <div className='social-buttons'>
          <a target='_blank' rel='noopener' href='https://discord.com/users/156482326887530498' className='button' style={{color: "white", backgroundColor: "#5865F2"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-discord' /></span> twilightzebby</a>
          <a target='_blank' rel='noopener' href='https://bsky.app/profile/twilightzebby.bsky.social' className='button' style={{color: "white", backgroundColor: "#1083fe"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-bluesky' /></span> @twilightzebby.bsky.social</a>
          <a target='_blank' rel='noopener' href='https://github.com/TwilightZebby' className='button' style={{color: "white", backgroundColor: "#333333"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-github' /></span> twilightzebby</a>
          <br />
          <br />
          <a target='_blank' rel='noopener' href='https://www.twitch.tv/twilightzebby' className='button' style={{color: "white", backgroundColor: "#6441a4"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-twitch' /></span> @twilightzebby</a>
          <a target='_blank' rel='noopener' href='https://steamcommunity.com/id/TwilightZebby/' className='button' style={{color: "black", backgroundColor: "#adadad"}}><span className='social-icon'><FontAwesomeIcon icon='fa-brands fa-steam' /></span> twilightzebby</a>
          <a target='_blank' rel='noopener' href='https://ko-fi.com/twilightzebby' className='button' style={{color: "white", backgroundColor: "#72a4f2"}}><span className='social-icon'><FontAwesomeIcon icon='fa-solid fa-mug-hot' /></span> twilightzebby</a>
        </div>
        <br />
        <hr />

        <h3 className='section-heading'>Discord Apps (formerly "Bots")</h3>
        <p className='section-description'>Server & User-installable Apps in active development, for use on the chat app <a href='https://discord.com/' target='_blank'>Discord</a>.</p>
        <ProjectCard
          uriLink="https://github.com/TwilightZebby/TwiLite"
          iconSrc={twiliteIconPng}
          iconAlt="TwiLite's icon"
          cardTitle="TwiLite"
          cardDescription="A small but reliable multipurpose Discord App - usable both as a Server- and a User-installable App."
          cardDate="First released in Jan 2021. Re-released in Jan 2025." />
        <ProjectCard
          uriLink="https://github.com/TwilightZebby/WelcomeEditor"
          iconSrc={welcomeEditorIconPng}
          iconAlt="Welcome Editor's icon"
          cardTitle="Welcome Editor"
          cardDescription="A useful Server App for allowing Servers to make use of Discord's Welcome Screen feature again."
          cardDate="First released in October 2024." />
        <br />

        <hr />

        <h3 className='section-heading'>Volunteering</h3>
        <p className='section-description'>Active volunteering work I am doing for creators, companies, etc.</p>
        <a href='https://dis.gd/bugs' className="card-link" target='_blank'><div className="card">
          <img src={discordIconPng} className="card-icon-discord" alt="Discord's logo" />
          <p>
            Volunteer QA for Discord<br />
            <span className="card-description">I am an active member of Discord's official "Testers" program - submitting bug reports and testing potential new updates.
              <br /><i>Volunteering since July 2022.</i>
            </span>
          </p>
        </div></a>
        <ProjectCard
          uriLink="https://twitch.tv/Dr1fterX"
          iconSrc={drfterxIconPng}
          iconAlt="Dr1fterX's icon"
          cardTitle="Community Moderator for Dr1fterX"
          cardDescription="I am an active Admin for Twitch Streamer Dr1fterX's Discord Server, and Moderator for his Twitch chat."
          cardDate="Volunteering since December 2019." />
        <br />

        <hr />

        <h3 className='section-heading'>Previous projects</h3>
        <p className='section-description'>Stuff I previously worked on, but have either been completed, archived, or I moved onto other things</p>
        <ProjectCard
          uriLink="https://github.com/HomeCord"
          iconSrc={homecordIconPng}
          iconAlt="HomeCord's icon"
          cardTitle="HomeCord (Website)"
          cardDescription="A reimagining of my earlier HomeCord project, made as a new take on Discord Server-listing websites."
          cardDate="Proof-of-concept made for Discord's Developer Buildathon 2025." />
        <ProjectCard
          uriLink="https://github.com/HomeCord/homecord"
          iconSrc={homecordIconPng}
          iconAlt="HomeCord's icon"
          cardTitle="HomeCord (App)"
          cardDescription="A Discord Server App to showcase the Server's notable messages, threads, & events via a 'home' channel."
          cardDate="Shut down in May 2025." />
        <ProjectCard
          uriLink="https://github.com/TwilightZebby/UserStars"
          cardTitle="UserStars"
          cardDescription="A twist on the classic 'starboard' App, this User App allowed granting other Users Stars."
          cardDate="Shut down in September 2024." />
        <a href='https://web.archive.org/web/20210725170051/youtube.com/watch?v=3xOkZ0_Rocs' className="card-link" target='_blank'><div className="card">
          <img src={discordIconPng} className="card-icon-discord" alt="Discord's logo" />
          <p>
            Volunteer Creative Assistant for Discord <br />
            <span className="card-description">I gave minor creative assistance towards Discord's "Imagine a Place" short film, which featured Danny DeVito.
              <br /><i>Released July 2021. Archived December 2021.</i>
            </span>
          </p>
        </div></a>
        <ProjectCard
          uriLink="https://github.com/TwilightZebby/CrimsonLevelsBot"
          cardTitle="Crimson Levels"
          cardDescription="A levelling Discord Server App, for Servers to grant XP/levels to their members based on text chat activity."
          cardDate="Shut down in July 2021." />
        <ProjectCard
          uriLink="#"
          cardTitle="Web Designer at BrandFour"
          cardDescription="In 1 week for work experience, I designed an updated website that a web design company had made for a charity."
          cardDate="October 2015" />
        <br />

        <p className="faded-text">
          This website is open sourced on <a href='https://github.com/TwilightZebby/twilightzebby.github.io' target='_blank'>GitHub here</a>.
        </p>
      </>
    </StrictMode>
  )
}
