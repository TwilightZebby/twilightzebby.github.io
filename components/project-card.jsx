import './project-card.css'

/**
 * Generates a card listing for a project
 * 
 * @param {String} uriLink Hyperlink this card should link to when clicked on
 * @param {?String} iconSrc Optional source URI for an icon to be displayed on this card
 * @param {?String} iconAlt ALT text for the icon, MUST INCLUDE if an icon is specified.
 * @param {String} cardTitle Title for the card
 * @param {String} cardDescription Description for the card
 * @param {String} cardDate Date for the card (example: "Released Jan 2021", "Archived March 2020", etc)
 * @returns 
 */
export default function ProjectCard({uriLink, iconSrc, iconAlt, cardTitle, cardDescription, cardDate}) {
    return (
        <a href={uriLink} className="card-link" target='_blank'><div className="card">
          {iconSrc != undefined ? <><img src={iconSrc} className="card-icon" alt={iconAlt} /></> : <></>}
          <p>
            {cardTitle}<br />
            <p className="card-description">{cardDescription}
              <br /><i>{cardDate}</i>
            </p>
          </p>
        </div></a>
    );
}
