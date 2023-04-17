/**
 * Loads the Social Icons for the links to Zebby's Social Accounts
 */
function loadSocialIcons()
{
    // Grab the elements
    let bodyElement = document.body;
    let GitHubImg = bodyElement.querySelector("#link-GitHub");
    let TumblrImg = bodyElement.querySelector("#link-Tumblr");
    let RedditImg = bodyElement.querySelector("#link-Reddit");
    let CohostImg = bodyElement.querySelector("#link-Cohost");
    let TwitchImg = bodyElement.querySelector("#link-Twitch");
    let DiscordImg = bodyElement.querySelector("#link-Discord");
    let SteamImg = bodyElement.querySelector("#link-Steam");
    let PronounsImg = bodyElement.querySelector("#link-Pronouns");


    // Load the respective Social icons
    GitHubImg.setAttribute("src", "./assets/logos/github-logo.png");
    TumblrImg.setAttribute("src", "./assets/logos/tumblr-logo.png");
    RedditImg.setAttribute("src", "./assets/logos/reddit-logo.png");
    CohostImg.setAttribute("src", "./assets/logos/cohost-eggbug.png");
    TwitchImg.setAttribute("src", "./assets/logos/twitch-logo.png");
    DiscordImg.setAttribute("src", "./assets/logos/discord-logo.png");
    SteamImg.setAttribute("src", "./assets/logos/steam-logo.png");
    PronounsImg.setAttribute("src", "./assets/logos/pronouns-logo.png");

    return;
}
