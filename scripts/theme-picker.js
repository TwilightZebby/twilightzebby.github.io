
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
    

    // Toggle Light Theme Class
    bodyElement.classList.toggle("light-theme");
    backgroundElement.classList.toggle("light-theme");
    themeButton.classList.toggle("light-theme");
    
    for ( let i = 0; i <= centerElements.length - 1; i++ )
    {
        centerElements[i].classList.toggle("light-theme");
    }

    return;
}
