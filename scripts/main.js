document.getElementById('davidGit').addEventListener('click', function (e) {
    window.open('https://github.com/Da-Colon')
    });

document.getElementById('kyraGit').addEventListener('click', function (e) {
    window.open('https://github.com/KyraTheDork')
    });

document.getElementById('gilGit').addEventListener('click', function (e) {
    window.open('https://github.com/GilliamD')
    });

const goku = get("https://api.themoviedb.org/3/search/tv?api_key=cc42102845a020075536de832b824222&language=en-US&query=Dragonball%20z&page=1")
    goku.then(info => {
        const gokuDescription = info.results[1].overview
        const gokuwhatever = document.querySelector('#gokuDes')
        gokuDes.innerHTML = gokuDescription;
    });