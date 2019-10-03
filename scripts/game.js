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
$(pageTitle).attr("class", "title title-h1")
game.append(pageTitle);

// Search Bar
const barForm = document.createElement('form')
const barInput = document.createElement('input')

const barButton = document.createElement('button')
barForm.append(barInput);
barForm.append(barButton);
game.append(barForm);
barButton.innerHTML = 'Search'


$(barForm).attr("class", "search-form")
$(barForm).attr("id", "#form");
$(barInput).attr("id", "input");
$(barInput).attr("class", "search-input")
$(barInput).attr("placeholder", "Find a Game!");
$(barInput).attr("type", "text");
$(barButton).attr("id", "button");
$(barButton).attr("type", "submit");
$(barButton).attr("class", "nes-btn search-btn")

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

//  Main Content
const main = document.createElement('main')
game.append(main)
$(main).attr("class", "main-ctn")






function getTitle(object) {
    object.then(info => {
        const gameName = info.results[0].name;
        const titleInfo = document.createElement('h1');
        $(titleInfo).attr("class", "title-game");
        titleInfo.innerHTML = gameName
        main.append(titleInfo);
        getDescription(gameName);
    });
}

function getPlatforms(object) {

    object.then(info => {
        const gamePlatform = info.results[0].platforms;
        const platformCtn = document.createElement('div');
        $(platformCtn).attr("class", "platform-ctn");
        const platformTitle = document.createElement('h4');
        platformTitle.innerHTML = 'This game is Available on These Consoles'
        const platformInfo = document.createElement('ul');
        platformCtn.append(platformTitle);
        platformCtn.append(platformInfo);
        main.append(platformCtn)
        gamePlatform.forEach(gameConsole => {
            const eachPlatform = document.createElement('li');
            platformInfo.append(eachPlatform);
            eachPlatform.innerHTML = gameConsole.platform.name;

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


function update(title = 'Final-Fantasy-7') {
    const gameGet = get(`https://api.rawg.io/api/games?page_size=5&search=${title}`);
    getTitle(gameGet);
    getPlatforms(gameGet);
}

// Footer
const footerAnchor = document.createElement('a');
game.append(footerAnchor);
$(footerAnchor).attr("name", "bottom");
const footer = document.createElement('footer');
footerAnchor.append(footer);
$(footer).attr("class", "footer")
const footerDiv = document.createElement('div');
footer.append(footerDiv);
$(footerDiv).attr("class", "about")
const img1 = document.createElement('img')
$(img1).attr("src", "img/david.jpeg")
$(img1).attr("class", "student")
const img2 = document.createElement('img')
$(img2).attr("src", "img/kyra.jpeg")
$(img1).attr("class", "student")
const img3 = document.createElement('img')
$(img3).attr("src", "img/gil.jpeg")
$(img1).attr("class", "student")
footerDiv.append(img1, img2, img3)












update();