// Declarations for our song values
let art;
let showInfo;

// Spotify Client Creds
// const clientId = '7c6c168ee3e74062ae7411dc4cb18b16';
// const clientSecret = '9b73bbf5a3a248b68b21bcb2a2fa46ec';

// const _getToken = async () => {
//     const result = await fetch(`https://accounts.spotify.com/api/token`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
//         },
//         body: 'grant_type=client_credentials'
//     });

//     // Access the data given to us by the fetch response (Promise)
//     const data = await result.json();
//     return data.access_token
// }

// Function to get art info when image figure is clicked
/**
 * @param img_index
 * @param item_index
 * 
 * Function gets a art from spotify using the image index of our gallery. Then
 * it finds the correct item_index inside of the JSON response data from Spotify
 * which will produce a preview URL that will be used to play our selected art.
 * 
 */

async function clickedEvent(img_index, item_index){
    // Get piece name
    let piece = document.getElementsByTagName('img')[img_index].attributes[2].value

    // Get our token
    // let token = await _getToken();

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['AIC-User-Agent, coding_temple_homework (aydenoa99@gmail.com)']
        // ['Authorization', `Bearer ${token}`]
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${piece}`,{
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response)
    let art = response.pieces.items[item_index].preview_url

    // Before we play a art, first check if showInfo is True, and if so, stop it
    if (showInfo){
        stopSnippet();
    }
    artSnippet(art);
}

/**
 * @param id
 * @param event
 * 
 * id = image id for gallery image
 * event = Mouse event given by the action from our user
 * 
 * Our function will produce arts from the clickeEvent based on the index of the image.
 */

function getart(id, event){
    switch(id){
        case 'fig1': { // The Alchemist -Haarper
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'fig2': { // BOONDOCK -NotNevi
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'fig3': { // Sympathy Coil -Shadient
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'fig4': { // Tonight - Jker
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig5': { // Cult of the Lamp -Willro
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig6': { // Limbo -Freddie Dredd
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
    }
}

/**
 * @param url
 * 
 * url is the art preview url
 * 
 * function will return an audio clip given by the url
 */

function artSnippet(url){
    showInfo = new Audio(url);
    return showInfo.play()
}

/**
 * NO PARAMS
 * 
 * Function returns an event to stop the art snippet
 */

function  stopSnippet(){
    return showInfo.pause();
}