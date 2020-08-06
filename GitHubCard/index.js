/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    
*/
  import axios from 'axios'
  
  axios.get('https://api.github.com/users/JoelVega97')
    .then(function(reponse){
     const githubProfile = reponse.data 
     const myCard = cardMaker(githubProfile)
     cardContainer.appendChild(myCard)
    })
    .catch(function(error){
      console.log('UH OH')
    })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cardContainer = document.querySelector('.cards')

function cardMaker(gitHubObj){

  const card = document.createElement('div')
  const githubImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileAnchor = document.createElement('a')
  const followersNum = document.createElement('p')
  const followingNum = document.createElement('p')
  const bio = document.createElement('p')

  card.appendChild(githubImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(profileAnchor)
  cardInfo.appendChild(followersNum)
  cardInfo.appendChild(followingNum)
  cardInfo.appendChild(bio)

  card.className = 'card'
  cardInfo.className = 'card-info'
  name.className = 'name'
  username.className = 'username'
  profileAnchor.href = 'https://github.com/JoelVega97'

  githubImg.src = `${gitHubObj.avatar_url}`
  name.textContent = `${gitHubObj.name}`
  username.textContent = `${gitHubObj.login}`
  location.textContent = `Location: ${gitHubObj.location}`
  profile.textContent = 'Profile:'
  profileAnchor.textContent = `${gitHubObj.html_url}`
  followersNum.textContent = `Followers: ${gitHubObj.followers}`
  followingNum.textContent = `Following: ${gitHubObj.following}`
  bio.textContent = `Bio: ${gitHubObj.bio}`

  return card
}




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
