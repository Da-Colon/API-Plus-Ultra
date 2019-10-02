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
$('nav').attr("class", "navbar navbar-expand-lg navbar-dark bg-dark fixed-top ")
$(navDiv).attr("class", "container")


navDiv.append(navButton);
$(navButton).attr("class", "navbar-toggler");
$(navButton).attr("type", "button");
$(navButton).attr("data-toggle", "collapse");
$(navButton).attr("data-target", "#navbarResponsive");
$(navButton).attr("aria-controls", "#navbarResponsive");
$(navButton).attr("aria-expanded", "false");
$(navButton).attr("aria-label", "Toggle navigation");
navButton.append(buttonSpan)
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
$(navLinkAnchor1).attr("href", "#");
navLinkAnchor1.innerHTML = "Home"

navLinkUL.append(navLinkLI2);
$(navLinkLI2).attr("class", "nav-item");
navLinkLI2.append(navLinkAnchor2);
$(navLinkAnchor2).attr("class", "nav-link");
$(navLinkAnchor2).attr("href", "#");
navLinkAnchor2.innerHTML = "Anime"

navLinkUL.append(navLinkLI3);
$(navLinkLI3).attr("class", "nav-item");
navLinkLI3.append(navLinkAnchor3);
$(navLinkAnchor3).attr("class", "nav-link");
$(navLinkAnchor3).attr("href", "#");
navLinkAnchor3.innerHTML = "About"

// Search Bar
const barForm = document.createElement('form')
const barInput = document.createElement('input')
const barButton = document.createElement('button')
barForm.append(barInput);
barForm.append(barButton);
game.append(barForm);
barButton.innerHTML = 'Search'


$('form').attr("id", "#form");
$('input').attr("id", "input");
$('#input').attr("placeholder", "Find a Game!");
$('#input').attr("type", "text");
$('button').attr("id", "button");
$(barButton).attr("type", "submit");
$(barButton).attr("class", "btn btn-primary")

barForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const usrGame = barForm.querySelector('#input').value;
    if (usrGame.length <= 0) {
        alert('Please enter a Game Title')
    } else {
        if (game.childElementCount >= 0) {
            while (game.childElementCount > 1) {
                game.removeChild(game.lastChild)
            }
        }
        update(usrGame);
    }
});


function getTitle(object) {
    object.then(info => {
        const gameName = info.results[0].name;
        const titleInfo = document.createElement('p');
        titleInfo.innerHTML = gameName
        game.append(titleInfo);
        getDescription(gameName);
    });
}

function getPlatforms(object) {
    object.then(info => {
        const gamePlatform = info.results[0].platforms;
        const platformTitle = document.createElement('h4');
        platformTitle.innerHTML = 'This game is Available on These Consoles'
        game.append(platformTitle)
        const platformInfo = document.createElement('ul');
        gamePlatform.forEach(gameConsole => {
            const eachPlatform = document.createElement('li');
            eachPlatform.innerHTML = gameConsole.platform.name;
            platformInfo.append(eachPlatform);
            game.append(platformInfo)

        });
    });
}

function getDescription(title) {
    const getDescription = get(`https://api.rawg.io/api/games/${(title.replace(/\s/g, "-"))}`)
    console.log(getDescription)
    getDescription.then(info => {
        const gameDescription = info.description
        const gameInfo = document.createElement('p')
        gameInfo.innerHTML = gameDescription;
        game.append(gameInfo);
        getImage(title)
    });
}

function getImage(title) {
    const getDescription = get(`https://api.rawg.io/api/games/${(title.replace(/\s/g, "-"))}`)
    let gameImages = []
    getDescription.then(info => {
        const gameImage = info.background_image
        gameImages.push(gameImage)
        if (info.background_image_addtional !== null) {
            const gameImage2 = info.background_image_additional
            gameImages.push(gameImage2)
        }

        const imageInfo = document.createElement('img')
        let x = 0
        imageInfo.src = gameImages[x]

        function changeImage() {
            if (x == 1) {
                x = changeImage.length

            } else if (x <= 0) {
                x += 1;
            }
            imageInfo.src = gameImages[x]
        }
        setInterval(changeImage, 4000)
        game.append(imageInfo)
    })
}


function update(title = 'Kingdom Hearts 2') {
    const gameGet = get(`https://api.rawg.io/api/games?page_size=5&search=${title}`);
    getTitle(gameGet);
    getPlatforms(gameGet);
}


update();