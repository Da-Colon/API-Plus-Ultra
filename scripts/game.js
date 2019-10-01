const game = document.querySelector(`[data-gameTitle]`);

function searchBar() {
    const barForm = document.createElement('form')
    const barInput = document.createElement('input');
    barForm.append(barInput);
    game.append(barForm);
    $('input').attr("id", "input")
    $('#input').attr("placeholder", "Find a Game!");
    $('#input').attr("type", "text");
}

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


        var x = 0
        imageInfo.src = gameImages[x]
        console.log(gameImages)


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


function update() {
    // const gameGet = get('https://api.rawg.io/api/games?page_size=5&searcxh=Cancy Crush')
    const gameGet = get('https://api.rawg.io/api/games?page_size=5&search=Call of Duty')
        // const gameGet = get('https://api.rawg.io/api/games?page_size=5&search=final%20fantasy%20VII')
    searchBar()
    getTitle(gameGet)
    getPlatforms(gameGet)
}


update();