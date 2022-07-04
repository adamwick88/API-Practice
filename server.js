
const express = require('express')
const app = express()
const cors=require('cors')
const PORT = 8000

app.use(cors())


const chiaotzu
= {
    'saiyan': {
        'locationDuringArc' : 'On Earth',
        'didHeFight?': 'Yes, even blew himself, a fucking team player',
        'powerLevel':'610/3,250-during self-explosion',
        'randomInterestingFact': 'He may be a vampire. Jiang Shi are a particular type of vampiric spirit that were clearly an inspiration for Chiaotzu. Not only do they dress in a similar manner, wearing the Qing-era robes and hat that Chiaotzu’s clothes are based upon, but they also have white skin and hop instead of walk, mirroring Chiaotzu’s habit of floating everywhere. Whether this means he’s actually a vampire in the world of Dragon Ball, we can only guess, but it’s doubtful that Akira Toriyama didn’t have the Jiang Shi in mind when he created Chiaotzu.' ,
        'image': 'https://m.media-amazon.com/images/M/MV5BOTJlM2RjMTItMjdiNS00M2NjLTgxZmYtNmQ0YzQ2MGJlOTI4XkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_FMjpg_UX1000_.jpg'
    },
    'namek':{
            'locationDuringArc' : "King Kai's planet",
            'didHeFight?': 'Yes! He fought and defeated a member of the Ginyu Force. No seriously look it up! It happened! ',
            'powerLevel':'12,000(he beat Guldo)',
            'randomInterestingFact': 'The Ocean Group dub of Dragon Ball Zfea tures a fun little flub about Chiaotzu. After one of Chiaotzu’s deaths and resurrections by the titular Dragon Balls, he is referred to as “Emperor Chiaotzu.' ,
            'image': 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d818cd2-3c41-49f8-ba02-2e465f7bff6a/ddbb8en-9e1d5770-83de-419c-aa0d-1ffcb5b1d613.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFkODE4Y2QyLTNjNDEtNDlmOC1iYTAyLTJlNDY1ZjdiZmY2YVwvZGRiYjhlbi05ZTFkNTc3MC04M2RlLTQxOWMtYWEwZC0xZmZjYjViMWQ2MTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vd2kzc348B-RzBHqBelgHoGPBQMHNjxpLJULz5SY_wc'
        },
    'trunks':{
        'locationDuringArc' : "First in the mountains training, then travel's with Tien to help fight Frieza.",
        'didHeFight?': 'He showed up, but Trunks defeated Frieza before Chiatzou could unleash his secret moves.',
        'powerLevel':'1,0000,0000',
        'randomInterestingFact':'He Has A Small Cameo In The Naruto Manga'  ,
        'image': 'https://static.wikia.nocookie.net/dragonballaffanon/images/2/26/Chiaotzu_.jpeg/revision/latest/top-crop/width/360/height/360?cb=20101230020608'

    },
    'android':{
        'locationDuringArc' : "On Earth, in the kitchen.",
        'didHeFight?': "During this arc Chiatzou cooks food.",
        'powerLevel':'Cooking Power Level Above 9,000,000',
        'randomInterestingFact':'You can actual buy a Chiatzou apron, perfect gift for any occasion',
        'image': 'https://64.media.tumblr.com/f4b31b3f38aadccf5320e13936a387c2/0923d5d8a7ac8f9f-78/s540x810/1f6ce0136c09c92e2093fdf2f934fd96cf4bf3be.jpg'
    },
    'cell':{
        'locationDuringArc' : "On Earth",
        'didHeFight?': "Doesn't appear, Tien says he left him home.",
        'powerLevel':'Self-Esteem Level: -1,000,000,000',
        'randomInterestingFact':'Could he not have at least been in the arc and fought a cell junior? Give my guy something to do.',
        'image': 'https://www.google.com/search?q=chiaotzu+apron&rlz=1C1CHZL_enUS742US742&sxsrf=ALiCzsZut8Po7swdPCQJCZKX1xv22q_U4A:1656638522822&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiMja61w9b4AhXljokEHbblDjIQ_AUoAnoECAEQBA&biw=1538&bih=750&dpr=1.25#imgrc=BZq3hZ6iLVsA5M'
    },
    'buu':{
        'locationDuringArc' : "On Earth",
        'didHeFight?': "No, he does give energy to Goku though.",
        'powerLevel':"Safe to assume Super Saiyan 3 level.",
        'randomInterestingFact':"Chiaotzu has mystical powers that are never explained during Dragon Ball. He could fly before all other characters and in a way that the others didn't (with stiff limbs, in a standing position). He has telekinetic powers that he uses to move objects and has used them to fix the World Martial Arts Tournament twice. Telekinesis is is used by poltergeists. He has a power in which he can paralyse an opponent that he used to try to fix the fight between Tien and Chiaotzu Goku in the the World Martial Arts Tournament, which is a power commonly attributed to ghosts.",
        'image': 'https://cdna.artstation.com/p/assets/images/images/033/336/860/large/shireen-headley-chiaotzu.jpg?1609247625'
    }

    


    }
   


app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:dragonBallName', (request,response)=>{
   const dragonBallName= request.params.dragonBallName.toLowerCase()
   if(chiaotzu[dragonBallName]){
   response.json(chiaotzu[dragonBallName]) 
   }else{
    response.json(character['buu'])
   }
})

app.listen(process.env.PORT || PORT, () =>{
    console.log('Server is running')
})
