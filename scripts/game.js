// SET VARIABLE TO BODY
const game = document.querySelector('body')

// CREATE CANVAS
// const canvas = document.createElement('canvas');
// game.append(canvas);
// $(canvas).attr("id", "myCanvas");
// $(canvas).attr("class", "myCanvas");



// NAVBAR VARIABLES 
const navBar = document.createElement('nav')
const navDiv = document.createElement('div')
const navButton = document.createElement('button')
const buttonSpan = document.createElement('span')
const navLinkDiv = document.createElement('div')
const navLinkUL = document.createElement('ul')
const navLinkLI1 = document.createElement('li')
const navLinkLI2 = document.createElement('li')
const navLinkLI3 = document.createElement('li')
const navLinkAnchor1 = document.createElement('a')
const navLinkAnchor2 = document.createElement('a')
const navLinkAnchor3 = document.createElement('a')


// NAVBAR APPENDING ELEMENTS TO EACH OTHER
game.append(navBar);
navBar.append(navDiv);
navDiv.append(navButton);
navButton.append(buttonSpan);
navDiv.append(navLinkDiv);
navLinkDiv.append(navLinkUL);
navLinkUL.append(navLinkLI1);
navLinkLI1.append(navLinkAnchor1);
navLinkUL.append(navLinkLI2);
navLinkLI2.append(navLinkAnchor2);
navLinkUL.append(navLinkLI3);
navLinkLI3.append(navLinkAnchor3);

// NAVBAR ATTRIBUTES
$('nav').attr("class", "navbar navbar-expand-lg navbar-dark bg-dark fixed-top ");
$(navDiv).attr("class", "container");
$(navButton).attr("class", "navbar-toggler");
$(navButton).attr("type", "button");
$(navButton).attr("data-toggle", "collapse");
$(navButton).attr("data-target", "#navbarResponsive");
$(navButton).attr("aria-controls", "#navbarResponsive");
$(navButton).attr("aria-expanded", "false");
$(navButton).attr("aria-label", "Toggle navigation");
$(buttonSpan).attr("class", "navbar-toggler-icon");
$(navLinkDiv).attr("class", "collapse navbar-collapse");
$(navLinkDiv).attr("id", "navbarResponsive");
$(navLinkUL).attr("class", "navbar-nav ml-auto");
$(navLinkLI1).attr("class", "nav-item active");
$(navLinkAnchor1).attr("class", "nav-link");
$(navLinkAnchor1).attr("href", "index.html");
$(navLinkLI2).attr("class", "nav-item active");
$(navLinkAnchor2).attr("class", "nav-link");
$(navLinkAnchor2).attr("href", "anime.html");
$(navLinkLI3).attr("class", "nav-item active");
$(navLinkAnchor3).attr("class", "nav-link");
$(navLinkAnchor3).attr("href", "/index.html#bottom");

// NAVBAR SET INNER HTML
navLinkAnchor1.innerHTML = "Home"
navLinkAnchor2.innerHTML = "Anime"
navLinkAnchor3.innerHTML = "About"

// Page Title
const pageTitle = document.createElement('h1');
$(pageTitle).attr("class", "title-h1");
pageTitle.innerHTML = 'Find Information About Your Favorite Game!'
game.append(pageTitle);

// Search Bar
const barForm = document.createElement('form');
const barInput = document.createElement('input');
const barButton = document.createElement('button');
// APPENDING FORM TOGETHER AND APPEND TO BODY
game.append(barForm);
barForm.append(barInput);
barForm.append(barButton);
// SEARCH BAR ATTRIBUTES
$(barForm).attr("class", "search-form");
$(barForm).attr("id", "#form");
$(barInput).attr("id", "input");
$(barInput).attr("class", "search-input");
$(barInput).attr("placeholder", "Find a Game!");
$(barInput).attr("type", "text");
$(barButton).attr("id", "button");
$(barButton).attr("type", "submit");
$(barButton).attr("class", "nes-btn search-btn");
// SEARCH BAR HTML
barButton.innerHTML = 'Search'

//  Main Content
const main = document.createElement('main')

game.append(main);

$(main).attr("class", "main-ctn");


barForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const usrGame = barForm.querySelector('#input').value;
    if (usrGame.length <= 0) {
        alert('Please enter a Game Title')
    } else {
        if (main.childElementCount >= 0) {

            while (main.childElementCount > 0) {
                main.removeChild(main.lastChild)
            }
        }
        window.open(`/game.html?${usrGame}`, "_self")

    }
});



function regEx(word) {
    const title = word.replace(/\s/g, "%20");
    return title;
}


function getTitle(object) {
    object.then(info => {
        const gameName = info.results[0].slug;
        const titleName = gameName.replace(/-/g, " ");
        const titleInfo = document.createElement('h1');
        $(titleInfo).attr("class", "title-game");
        titleInfo.innerHTML = titleName
        main.append(titleInfo);
        getDescription(gameName);


    });
}

function getPlatforms(object) {

    // Use the then method to make a promise, arrow function with a info arguement pass in.
    object.then(info => {

        // Find the Results
        const gamePlatform = info.results[0].platforms;

        // Create div, ul and h4 element
        const platformCtn = document.createElement('div');
        const platformTitle = document.createElement('h4');
        const platformInfo = document.createElement('ul');

        // make a call to the div add a attribute (class) 
        $(platformCtn).attr("class", "platform-ctn");

        // Add a string between the opening and closing tags on the H4 element
        platformTitle.innerHTML = 'This game is Available on These Consoles';

        // append the created H4 and UL element 
        platformCtn.append(platformTitle);
        platformCtn.append(platformInfo);
        main.append(platformCtn);

        // foreach 'platform' in the array in the API create a LI and write the data in the LI and attach to UL
        gamePlatform.forEach(gameConsole => {
            const eachPlatform = document.createElement('li');
            eachPlatform.innerHTML = gameConsole.platform.name;
            platformInfo.append(eachPlatform);

        });
    });
}

function getDescription(title) {

    const getDescription = get(`https://api.rawg.io/api/games/${title}`);

    getDescription.then(info => {

        const gameDescription = info.description
        const descriptionDiv = document.createElement('div');
        const gameInfo = document.createElement('p');

        $(descriptionDiv).attr("class", "description-ctn");

        gameInfo.innerHTML = gameDescription;

        descriptionDiv.append(gameInfo);

        main.append(descriptionDiv);
    });

    getImage(title);

}

function getImage(title) {
    const getDescription = get(`https://api.rawg.io/api/games/${title}`)

    const gameImages = []

    getDescription.then(info => {

        const gameImage = info.background_image

        gameImages.push(gameImage)

        if (info.background_image_addtional !== null) {
            const gameImage2 = info.background_image_additional
            gameImages.push(gameImage2)
        }
        const imageDiv = document.createElement('div');
        const imageInfo = document.createElement('img');
        let x = 0

        main.append(imageDiv);
        imageDiv.append(imageInfo)

        $(imageDiv).attr("class", "image-ctn");
        $(imageInfo).attr("class", "img-thumbnail image-game");

        imageInfo.src = gameImages[x]

        function changeImage() {
            if (x == 1) {
                x = changeImage.length
            } else if (x <= 0) {
                x += 1;
            }
            imageInfo.src = gameImages[x]
        }
        setInterval(changeImage, 4000);

    })
};

$(document).ready(function({ title = 'final fantasy vii remake' }) {
    if (location.search) {
        title = location.search;
    }
    const gameGet = get(`https://api.rawg.io/api/games?search=${title.replace(/\?/g, " ")}`);
    getTitle(gameGet);
    getPlatforms(gameGet);



});

const playerShip = document.createElement('div');
game.append(playerShip);
$(playerShip).attr("class", "playerShip")

playerShip.addEventListener('click', function() {
    window.open('index.html')
})