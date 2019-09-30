const game = document.querySelector(`[data-gameTitle]`);

function getTitle(object) {
    object.then(info => {
        const gameName = info.results[0].name;
        const titleInfo = document.createElement('p');
        titleInfo.innerHTML = gameName
        game.append(titleInfo);
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
            // console.log(gameConsole.platform.name)
            eachPlatform.innerHTML = gameConsole.platform.name;
            platformInfo.append(eachPlatform);
            game.append(platformInfo)

        });
    });
}

function update() {
    const gameGet = get('https://api.rawg.io/api/games?page_size=5&search=final%20fantasy%20VII')
    getTitle(gameGet)
    getPlatforms(gameGet)
}



update();