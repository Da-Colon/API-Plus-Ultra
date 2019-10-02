"use strict"

//grabbing data for for first page
function strawHats() {
    const luffy = get( 
        `https://api.themoviedb.org/3/tv/80853?api_key=cc42102845a020075536de832b824222`
        );//Muhyo & Roji
        
        luffy.then(function(rubber) {
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
            const title = document.getElementById('title1');
            const website = document.getElementById('website1');
            const desk = document.getElementById('description1');
            const lang = document.getElementById('lang1');
            const canvas = document.getElementById('canvas1')
            
            //Using paring both variables to populate in webpage 
            image.setAttribute('src', `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${photo}`);
            icon.appendChild(image);
            title.innerHTML = name;
            website.innerHTML = home;
            website.setAttribute('href', home);
            website.setAttribute('target', '_blank');
            desk.innerHTML = overview;
            lang.innerHTML = dubs;
            //image.setAttribute('src', `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${photo}`);
            //canvas.appendChild(image)

        });
    
        const zoro = get(
        `https://api.themoviedb.org/3/tv/67075-100?api_key=cc42102845a020075536de832b824222`
        );//Mob Psycho 100
        zoro.then(function(sword) {
            console.log(sword);
        });
        const nami = get(
            `https://api.themoviedb.org/3/tv/45790?api_key=cc42102845a020075536de832b824222`
            );//Jojo's Bizzare Adventure
            nami.then(function(staff) {
                console.log(staff);
            });

        const usopp = get( 
            `https://api.themoviedb.org/3/tv/64196?api_key=cc42102845a020075536de832b824222`
            );//Overlord
            usopp.then(function(sling) {
                console.log(sling);
            });

        const sanji = get( 
            `https://api.themoviedb.org/3/tv/61752?api_key=cc42102845a020075536de832b824222`
            );//Helsing Ultimate
            sanji.then(function(chef) {
                console.log(chef);
            });

            const chopper = get( 
            `https://api.themoviedb.org/3/tv/71024?api_key=cc42102845a020075536de832b824222`
            );//Castlevania
            chopper.then(function(meds) {
                console.log(meds);
            });
    
        }
strawHats()


//.homepage for target's wesite|.name for target's title|.overview for target's description|.poster_path for target's card image|.backdrop_path for carousel image|.original_language for languages

//grabbing data for second page

//grabbing data for third page

/*        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
            <figure id="icon1"></figure>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#" id="title1"> luffy.name</a>
                    </h4>
                    <h5>
                    <a href ='#' id="website1">luffy.homepage</a>
                    </h5>
                    <p class="card-text" id="description1">luffy.Overview</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted" id="lang">luffy.original_language</small>
                </div>
            </div>
        </div>*/