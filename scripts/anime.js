"use strict"


function car(doodle,videoUrl,piece,stream){
    const canvas = document.getElementById('canvas1');
    const embed = document.getElementById('embed1');
    const link = document.getElementById('link1');
    const view = document.getElementById('view')

      //Using paring var  variables to populate in webpage 
            //First carousel item "Splash"
            canvas.setAttribute('src', `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${doodle}`);

            //Second carousel item "Trailer"
            // embed.setAttribute('src', `https://www.youtube.com/embed/LYUuTF7vLcg`);
            embed.setAttribute('src', videoUrl);
            embed.style.width = "833px";
            embed.style.height = "350px";
            embed.style.frameborder = "0px";
            embed.setAttribute('allow', `accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen`)
            // document.body.appendChild(iframe);

            //Third carousel item "Streaming page link"
            link.setAttribute('src',piece )
            view.setAttribute('href', stream);
            view.setAttribute('target', '_blank');
}
//<iframe width="560" height="315" src="https://www.youtube.com/embed/uhlBqFj9kDw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//grabbing data for for first page
function strawHats() {
    const luffy = get(
        `https://api.themoviedb.org/3/tv/80853?api_key=cc42102845a020075536de832b824222`
    ); //Muhyo & Roji

    luffy.then(function(rubber) {
        console.log(rubber)
            //Grabbing relvent information of which to populate in the DOM


            
            const doodle = rubber.backdrop_path
            const photo = rubber.poster_path
            const name = rubber.name
            const home = rubber.homepage
            const overview = rubber.overview
            const dubs = rubber.original_language

            //Setting pointers to HTML IDs as variables
            const icon = document.getElementById('icon1');
            const image = document.createElement('img');
            const iframe = document.createElement('iframe')
            const title = document.getElementById('title1');
            const website = document.getElementById('website1');
            const desk = document.getElementById('description1');
            const lang = document.getElementById('lang1');
            // const canvas = document.getElementById('canvas1');
            // const embed = document.getElementById('embed1');
            // const link = document.getElementById('link1');

            
            // //Using paring both variables to populate in webpage 
            // //First carousel item "Splash"
            // canvas.setAttribute('src', `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${doodle}`);

            // //Second carousel item "Trailer"
            // embed.setAttribute('src', `https://www.youtube.com/embed/LYUuTF7vLcg`);
            // embed.style.width = "900px";
            // embed.style.height = "350px";
            // embed.style.frameborder = "0px";
            // document.body.appendChild(iframe);

            // //Third carousel item "Streaming page link"
            // link.setAttribute('src', `https://image.tmdb.org/t/p/w300_and_h450_bestv2//vUWWBAmfyJOQxZcPIwEJS2OByrJ.jpg`)

            //Setting items 1 and 3 for Carousel
            let video = `https://www.youtube.com/embed/LYUuTF7vLcg`
            let art = `https://img1.ak.crunchyroll.com/i/spire3/8522d0abbd4217fc6b4628b1488577561533274977_full.jpg`
            let watch = `https://www.crunchyroll.com/muhyo-rojis-bureau-of-supernatural-investigation`
            car(doodle,video,art, watch);
            //Changing carousel items when name is clicked
            title.addEventListener('click', function(){
                car(doodle,video,art,watch);
            });

            //Card items
            image.setAttribute('src', `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${photo}`);
            icon.appendChild(image);
            title.innerHTML = name;
            website.innerHTML = home;
            website.setAttribute('href', home);
            website.setAttribute('target', '_blank');
            desk.innerHTML = overview;
            lang.innerHTML = "available languages: " + dubs;

            
            
            //<iframe width="560" height="315" src="https://www.youtube.com/embed/LYUuTF7vLcg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        });

    const zoro = get(
        `https://api.themoviedb.org/3/tv/67075-100?api_key=cc42102845a020075536de832b824222`
        );//Mob Psycho 100
        zoro.then(function(sword) {
            console.log(sword);
            //
            const doodle = sword.backdrop_path
            const photo = sword.poster_path
            const name = sword.name
            const home = sword.homepage
            const overview = sword.overview
            const dubs = sword.original_language

            //
            const icon = document.getElementById('icon2');
            const image = document.createElement('img');
            const iframe = document.createElement('iframe')
            const title = document.getElementById('title2');
            const website = document.getElementById('website2');
            const desk = document.getElementById('description2');
            const lang = document.getElementById('lang2');

            //
            let video = `https://www.youtube.com/embed/GR6sJfFdB9I`
            let art = `https://img1.ak.crunchyroll.com/i/spire4/24452933dd3f9282b32e49f0ce5fdc5b1546985597_full.jpg`
            let watch = `https://www.crunchyroll.com/mob-psycho-100`
            
            //
            title.addEventListener('click', function(){
                car(doodle,video,art,watch);
            });
            image.setAttribute('src', `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${photo}`);
            icon.appendChild(image);
            title.innerHTML = name;
            website.innerHTML = home;
            website.setAttribute('href', home);
            website.setAttribute('target', '_blank');
            desk.innerHTML = overview;
            lang.innerHTML = "available languages: " + dubs;
        });
        const nami = get(
            `https://api.themoviedb.org/3/tv/45790?api_key=cc42102845a020075536de832b824222`
            );//Jojo's Bizzare Adventure
            nami.then(function(staff) {
            console.log(staff);
            //
            const doodle = staff.backdrop_path
            const photo = staff.poster_path
            const name = staff.name
            const home = staff.homepage
            const overview = staff.overview
            const dubs = staff.original_language

            //
            const icon = document.getElementById('icon3');
            const image = document.createElement('img');
            const iframe = document.createElement('iframe')
            const title = document.getElementById('title3');
            const website = document.getElementById('website3');
            const desk = document.getElementById('description3');
            const lang = document.getElementById('lang3');

            //
            let video = `https://www.youtube.com/embed?v=GR6sJfFdB9I`
            let art = `https://img1.ak.crunchyroll.com/i/spire3/            04b29833ccaaf2ee6bda1d08f2f02ecf1539039197_full.jpg`
            let watch = `https://www.crunchyroll.com/jojos-bizarre-adventure`
            //
            title.addEventListener('click', function(){
                car(doodle,video,art,watch);
            });
            //
            image.setAttribute('src', `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${photo}`);
            icon.appendChild(image);
            title.innerHTML = name;
            website.innerHTML = home;
            website.setAttribute('href', home);
            website.setAttribute('target', '_blank');
            desk.innerHTML = overview;
            lang.innerHTML = "available languages: " + dubs;
            });

        const usopp = get( 
            `https://api.themoviedb.org/3/tv/64196?api_key=cc42102845a020075536de832b824222`
            );//Overlord
        usopp.then(function(sling) {
            console.log(sling);
            //
            const doodle = sling.backdrop_path
            const photo = sling.poster_path
            const name = sling.name
            const home = sling.homepage
            const overview = sling.overview
            const dubs = sling.original_language

            //
            const icon = document.getElementById('icon4');
            const image = document.createElement('img');
            const iframe = document.createElement('iframe')
            const title = document.getElementById('title4');
            const website = document.getElementById('website4');
            const desk = document.getElementById('description4');
            const lang = document.getElementById('lang4');

            //
            let video = `https://www.youtube.com/embed/uhlBqFj9kDw`
            let art = `https://img1.ak.crunchyroll.com/i/spire3/9e1a4846885dc3994414b608f80490781531935326_full.jpg`
            let watch = `https://www.crunchyroll.com/overlord`
            //
            title.addEventListener('click', function(){
                car(doodle,video,art,watch);
            });
            //
            image.setAttribute('src', `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${photo}`);
            icon.appendChild(image);
            title.innerHTML = name;
            website.innerHTML = home;
            website.setAttribute('href', home);
            website.setAttribute('target', '_blank');
            desk.innerHTML = overview;
            lang.innerHTML = "available languages: " + dubs;
            });

        const sanji = get( 
            `https://api.themoviedb.org/3/tv/75775?api_key=cc42102845a020075536de832b824222`
        );//Junji Ito Collection
        sanji.then(function(chef) {
            console.log(chef);
            //
            const doodle = chef.backdrop_path
            const photo = chef.poster_path
            const name = chef.name
            const home = chef.homepage
            const overview = chef.overview
            const dubs = chef.original_language

            //
            const icon = document.getElementById('icon5');
            const image = document.createElement('img');
            const iframe = document.createElement('iframe')
            const title = document.getElementById('title5');
            const website = document.getElementById('website5');
            const desk = document.getElementById('description5');
            const lang = document.getElementById('lang5');

            //
            let video = `https://www.youtube.com/embed/6-oDNer9O0w`
            let art = `https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_60,h_750,w_1920/oth/FunimationStoreFront/1963558/Japanese/1963558_Japanese_ShowDetailHeaderDesktop_d1b5ba4f-7581-e911-8175-020165574d09.jpg`
            let watch = `https://www.funimation.com/shows/junji-ito-collection/?qid=196dbf53e124f33e`
            //
            title.addEventListener('click', function(){
                car(doodle,video,art,watch);
            });
            //
            image.setAttribute('src', `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${photo}`);
            icon.appendChild(image);
            title.innerHTML = name;
            website.innerHTML = home;
            website.setAttribute('href', home);
            website.setAttribute('target', '_blank');
            desk.innerHTML = overview;
            lang.innerHTML = "available languages: " + dubs;
            });

        const chopper = get( 
            `https://api.themoviedb.org/3/tv/71024?api_key=cc42102845a020075536de832b824222`
        );//Castlevania
        chopper.then(function(meds) {
            console.log(meds);
            //
            const doodle = meds.backdrop_path
            const photo = meds.poster_path
            const name = meds.name
            const home = meds.homepage
            const overview = meds.overview
            const dubs = meds.original_language

            //
            const icon = document.getElementById('icon6');
            const image = document.createElement('img');
            const iframe = document.createElement('iframe')
            const title = document.getElementById('title6');
            const website = document.getElementById('website6');
            const desk = document.getElementById('description6');
            const lang = document.getElementById('lang6');

            //
            let video = `https://www.youtube.com/embed/Kbb8zPQBmOw`
            let art = `https://occ-0-3432-2433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfN2af8twyCldGC7j84xtG3D6cLj4gDBodE4szv_uFwhtEKqFbwF21V9_9WGQElavrQkwIxKBthQ11b_NwYN8rxcStBE.jpg?r=b69`
            let watch = `https://www.netflix.com/title/80095241`
            //
            title.addEventListener('click', function(){
                car(doodle,video,art,watch);
            });
            //
            image.setAttribute('src', `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${photo}`);
            icon.appendChild(image);
            title.innerHTML = name;
            website.innerHTML = home;
            website.setAttribute('href', home);
            website.setAttribute('target', '_blank');
            desk.innerHTML = overview;
            lang.innerHTML = "available languages: " + dubs;
            });
        }
strawHats();


//.homepage for target's wesite|.name for target's title|.overview for target's description|.poster_path for target's card image|.backdrop_path for carousel image|.original_language for languages

//grabbing data for second page

//grabbing data for third page


//add SAO, .HACK, Persona 5, Danganronpa, Kirby, Devil May Cry, Pokemon, Castlevania

//<img src="https://img1.ak.crunchyroll.com/i/spire3/${8522d0abbd4217fc6b4628b1488577561533274977_full.jpg}" class="poster xsmall-margin-bottom" alt="Muhyo &amp; Roji's Bureau of Supernatural Investigation">
//<img src="https://img1.ak.crunchyroll.com/i/spire4/24452933dd3f9282b32e49f0ce5fdc5b1546985597_full.jpg" class="poster xsmall-margin-bottom" alt="Mob Psycho 100">
//<img src="https://img1.ak.crunchyroll.com/i/spire3/${04b29833ccaaf2ee6bda1d08f2f02ecf1539039197_full.jpg}" class="poster xsmall-margin-bottom" alt="JoJo's Bizarre Adventure">
//<img src="https://img1.ak.crunchyroll.com/i/spire3/9e1a4846885dc3994414b608f80490781531935326_full.jpg" class="poster xsmall-margin-bottom" alt="Overlord">
//<img class="img-responsive show-detail-hero" src="https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_60,h_750,w_1920/oth/FunimationStoreFront/1963558/Japanese/1963558_Japanese_ShowDetailHeaderDesktop_d1b5ba4f-7581-e911-8175-020165574d09.jpg" data-url="https://derf9v1xhwwx1.cloudfront.net/image/upload/c_fill,q_60,h_750,w_1920/oth/FunimationStoreFront/1963558/Japanese/1963558_Japanese_ShowDetailHeaderDesktop_d1b5ba4f-7581-e911-8175-020165574d09.jpg" title="Junji Ito Collection" alt="Junji Ito Collection">
//<section class="nmtitle-section has-trailer" id="section-hero" style="background-image:url(https://occ-0-3432-2433.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfN2af8twyCldGC7j84xtG3D6cLj4gDBodE4szv_uFwhtEKqFbwF21V9_9WGQElavrQkwIxKBthQ11b_NwYN8rxcStBE.jpg?r=b69);
/*.canvas2
{object-fit: cover;
    width:900px;
    height: 350px;

}*/
