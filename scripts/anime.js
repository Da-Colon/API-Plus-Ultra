"use strict"

//grabbing data for for first page
function strawHats() {
    const luffy = get( 
        `https://api.themoviedb.org/3/tv/80853?api_key=cc42102845a020075536de832b824222`
        );//Muhyo & Roji
        luffy.then(function(rubber) {
            console.log(rubber);
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