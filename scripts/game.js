// Main Call to Div
const game = document.querySelector(`[data-gameTitle]`);

// Nav Bar
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


game.append(navBar);


navBar.append(navDiv);
$('nav').attr("class", "navbar navbar-expand-lg navbar-dark bg-dark fixed-top ");
$(navDiv).attr("class", "container");

$(navButton).attr("class", "navbar-toggler");
$(navButton).attr("type", "button");
$(navButton).attr("data-toggle", "collapse");
$(navButton).attr("data-target", "#navbarResponsive");
$(navButton).attr("aria-controls", "#navbarResponsive");
$(navButton).attr("aria-expanded", "false");
$(navButton).attr("aria-label", "Toggle navigation");
navButton.append(buttonSpan);
$(buttonSpan).attr("class", "navbar-toggler-icon");

navDiv.append(navLinkDiv);
$(navLinkDiv).attr("class", "collapse navbar-collapse");
$(navLinkDiv).attr("id", "navbarResponsive");
navLinkDiv.append(navLinkUL);
$(navLinkUL).attr("class", "navbar-nav ml-auto");

navLinkUL.append(navLinkLI1);
$(navLinkLI1).attr("class", "nav-item");
navLinkLI1.append(navLinkAnchor1);
$(navLinkAnchor1).attr("class", "nav-link");
$(navLinkAnchor1).attr("href", "index.html");
navLinkAnchor1.innerHTML = "Home"

navLinkUL.append(navLinkLI2);
$(navLinkLI2).attr("class", "nav-item");
navLinkLI2.append(navLinkAnchor2);
$(navLinkAnchor2).attr("class", "nav-link");
$(navLinkAnchor2).attr("href", "anime.html");
navLinkAnchor2.innerHTML = "Anime"

navLinkUL.append(navLinkLI3);
$(navLinkLI3).attr("class", "nav-item");
navLinkLI3.append(navLinkAnchor3);
$(navLinkAnchor3).attr("class", "nav-link");
$(navLinkAnchor3).attr("href", "index.html#bottom");
navLinkAnchor3.innerHTML = "About"

// Title
const pageTitle = document.createElement('h1')
pageTitle.innerHTML = 'Find Information About Your Favorite Game!'
$(pageTitle).attr("class", "title-h1");
game.append(pageTitle);

// Search Bar
const barForm = document.createElement('form')
const barInput = document.createElement('input')

const barButton = document.createElement('button')
barForm.append(barInput);
barForm.append(barButton);
game.append(barForm);
barButton.innerHTML = 'Search'


$(barForm).attr("class", "search-form");
$(barForm).attr("id", "#form");
$(barInput).attr("id", "input");
$(barInput).attr("class", "search-input");
$(barInput).attr("placeholder", "Find a Game!");
$(barInput).attr("type", "text");
$(barButton).attr("id", "button");
$(barButton).attr("type", "submit");
$(barButton).attr("class", "nes-btn search-btn")


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
        window.open(`/game.html?${usrGame}`, "blank_")

    }
});



function regEx(word) {
    const title = word.replace(/\s/g, "%20");
    return title;
}


function getTitle(object) {
    object.then(info => {
        const gameName = info.results[0].slug;
        const titleInfo = document.createElement('h1');
        $(titleInfo).attr("class", "title-game");
        titleInfo.innerHTML = gameName
        main.append(titleInfo);
        getDescription(gameName)


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
    console.log(title)
    const getDescription = get(`https://api.rawg.io/api/games/${title}`)
    getDescription.then(info => {
        const gameDescription = info.description
        const descriptionDiv = document.createElement('div');
        $(descriptionDiv).attr("class", "description-ctn")
        const gameInfo = document.createElement('p');
        gameInfo.innerHTML = gameDescription;
        descriptionDiv.append(gameInfo);
        main.append(descriptionDiv);
    });
    console.log(title)
    getImage(title)
}

function getImage(title) {
    const getDescription = get(`https://api.rawg.io/api/games/${title}`)
    let gameImages = []
    getDescription.then(info => {
        const gameImage = info.background_image
        gameImages.push(gameImage)
        if (info.background_image_addtional !== null) {
            const gameImage2 = info.background_image_additional
            gameImages.push(gameImage2)
        }

        const imageDiv = document.createElement('div');
        $(imageDiv).attr("class", "image-ctn");
        main.append(imageDiv)
        const imageInfo = document.createElement('img');
        $(imageInfo).attr("class", "image-game img-thumbnail");

        let x = 0
        imageInfo.src = gameImages[x]

        imageDiv.append(imageInfo)

        function changeImage() {
            if (x == 1) {
                x = changeImage.length

            } else if (x <= 0) {
                x += 1;
            }
            imageInfo.src = gameImages[x]
        }
        setInterval(changeImage, 4000)
    })
}



function update(title = 'final fantasy vii remake') {
    if (location.search) {
        title = location.search;
    }
    const gameGet = get(`https://api.rawg.io/api/games?search=${title.replace(/\?/g, " ")}`);
    getTitle(gameGet);
    getPlatforms(gameGet);
};

update();
// Footer