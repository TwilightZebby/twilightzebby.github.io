import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import siteIconPng from '/zebbyicon.png';
import twiliteIconPng from '/twiliteicon.png';
import welcomeEditorIconPng from '/welcomeeditoricon.png';
import homecordIconPng from '/homecordicon.png';
import drfterxIconPng from '/dr1fterxicon.png';
import discordIconPng from '/discordicon.png';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <div>
        <img src={siteIconPng} className="logo" alt="TwilightZebby's profile picture" />
      </div>
      <h1>TwilightZebby</h1>
      <p>
        Welcome to my personal website. Here you can find stuff I am working on, or have worked on. :)
      </p>

      <hr />

      <h3 className='section-heading'>Discord Apps (formerly "Bots")</h3>
      <p className='section-description'>Server- & User-installable Apps in active development, for use on the chat app <a href='https://discord.com/' target='_blank'>Discord</a>.</p>
      <a href='https://github.com/TwilightZebby/WelcomeEditor' className="card-link" target='_blank'><div className="card">
        <img src={welcomeEditorIconPng} className="card-icon" alt="Welcome Editor's icon" />
        <p>
          Welcome Editor<br />
          <p className="card-description">A useful Server App for allowing Servers to make use of Discord's Welcome Screen feature again.</p>
        </p>
      </div></a>
      <a href='https://github.com/TwilightZebby/TwiLite' className="card-link" target='_blank'><div className="card">
        <img src={twiliteIconPng} className="card-icon" alt="TwiLite's icon" />
        <p>
          TwiLite<br />
          <p className="card-description">A small but reliable multipurpose Discord App - usable both as a Server- and a User-installable App.</p>
        </p>
      </div></a>
      <br />

      <hr />

      <h3 className='section-heading'>Moderation & Management</h3>
      <p className='section-description'>Online communities I am actively helping to manage or moderate on Discord, Twitch, or otherwise.</p>
      <a href='https://twitch.tv/Dr1fterX' className="card-link" target='_blank'><div className="card">
        <img src={drfterxIconPng} className="card-icon" alt="Dr1fterX's icon" />
        <p>
          Dr1fterX<br />
          <p className="card-description">I am an active Admin for Twitch Streamer Dr1fterX's Discord Server, and Moderator for his Twitch chat.</p>
        </p>
      </div></a>
      <a href='https://dis.gd/bugs' className="card-link" target='_blank'><div className="card">
        <img src={discordIconPng} className="card-icon-discord" alt="Discord's logo" />
        <p>
          Discord Testers<br />
          <p className="card-description">I am an active member of Discord's official "Testers" program - submitting bug reports and testing potential new updates.</p>
        </p>
      </div></a>
      <br />

      <hr />

      <h3 className='section-heading'>Previous projects</h3>
      <p className='section-description'>Stuff I previously worked on, but have either been completed, archived, or I moved onto other things</p>
      <a href='https://github.com/HomeCord/HomeCord' className="card-link" target='_blank'><div className="card">
        <img src={homecordIconPng} className="card-icon" alt="HomeCord's icon" />
        <p>
          HomeCord<br />
          <p className="card-description">A Discord Server App to showcase the Server's notable messages, threads, & events via a "home" channel.
            <br /><i>Shut down in May 2025.</i></p>
        </p>
      </div></a>
      <a href='https://github.com/TwilightZebby/UserStars' className="card-link" target='_blank'><div className="card">
        <p>
          UserStars<br />
          <p className="card-description">Created to experiment with Discord's User Apps feature, this App allowed Users to grant other Users stars.<br />A twist on the classic 'starboard' Discord App.
            <br /><i>Shut down in September 2024.</i></p>
        </p>
      </div></a>
      <a href='https://web.archive.org/web/20210725170051/youtube.com/watch?v=3xOkZ0_Rocs' className="card-link" target='_blank'><div className="card">
        <img src={discordIconPng} className="card-icon-discord" alt="Discord's logo" />
        <p>
          Discord's "Imagine a Place" Short Film<br />
          <p className="card-description">I gave minor assistance towards Discord's "Imagine a Place" short film, which featured Danny DeVito.
            <br /><i>Released July 2021. Archived December 2021.</i></p>
        </p>
      </div></a>
      <a href='https://github.com/TwilightZebby/CrimsonLevelsBot' className="card-link" target='_blank'><div className="card">
        <p>
          Crimson Levels<br />
          <p className="card-description">A levelling Discord Server App, for Servers to grant XP/levels to their members based on text chat activity.
            <br /><i>Shut down in July 2021.</i></p>
        </p>
      </div></a>
      <br />
      
      <p className="faded-text">
        This website is open sourced on <a href='https://github.com/TwilightZebby/twilightzebby.github.io' target='_blank'>GitHub here</a>.
      </p>
    </>
  </StrictMode>,
)
