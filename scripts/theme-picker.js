
/**
 * Toggles between the Dark (Default) and Light Themes
 */
function toggleTheme()
{
    // Fetch Elements
    let bodyElement = document.body;
    let backgroundElement = bodyElement.querySelector("#indexBackground");
    let centerElements = bodyElement.getElementsByClassName("center");
    let themeButton = bodyElement.querySelector("#themeButton");
    // Fetch Social Link Elements
    let GitHubImg = bodyElement.querySelector("#link-GitHub");
    let TumblrImg = bodyElement.querySelector("#link-Tumblr");
    let DiscordImg = bodyElement.querySelector("#link-Discord");
    let PronounsImg = bodyElement.querySelector("#link-Pronouns");
    

    // Toggle Light Theme Class
    bodyElement.classList.toggle("light-theme");
    backgroundElement.classList.toggle("light-theme");
    themeButton.classList.toggle("light-theme");
    
    for ( let i = 0; i <= centerElements.length - 1; i++ )
    {
        centerElements[i].classList.toggle("light-theme");
    }


    // Toggle Light Theme for Social Link Icons
    let navMenuElement = bodyElement.querySelector("#navMenu");
    if ( navMenuElement.classList.contains("light-theme") )
    {
        GitHubImg.setAttribute("src", "./assets/logos/dark/github-logo.png");
        TumblrImg.setAttribute("src", "./assets/logos/dark/tumblr-logo.png");
        DiscordImg.setAttribute("src", "./assets/logos/dark/discord-logo.png");
        PronounsImg.setAttribute("src", "./assets/logos/dark/pronouns-logo.png");
    }
    else    
    {
        GitHubImg.setAttribute("src", "./assets/logos/github-logo.png");
        TumblrImg.setAttribute("src", "./assets/logos/tumblr-logo.png");
        DiscordImg.setAttribute("src", "./assets/logos/discord-logo.png");
        PronounsImg.setAttribute("src", "./assets/logos/pronouns-logo.png");
    }

    return;
}
