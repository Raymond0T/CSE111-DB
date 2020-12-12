// Create express app
var express = require("express")
var app = express()

const Computers = require('./handleSql.js')
var computers = new Computers('../dataIndex.sqlite')

// Server port
var HTTP_PORT = 8092

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});



// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({ "message": "Ok" })
});

// Insert here other API endpoints
//API endpoint to get all the options for location by nation for user selection 
app.get("/api/location/nation", (req, res, next) => {
    computers.allLocation()
        .then((location) => {
            res.json({
                "message": "success",
                "data": location
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
});



////API endpoint to get all the options for teams for user selection 
app.get("/api/streamers/team", (req, res, next) => {
    computers.allStreamerTeam()
        .then((streamerteam) => {
            res.json({
                "message": "success",
                "data": streamerteam
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
});

////API endpoint to get all the options for sponsor for the user selection 
app.get("/api/sponsor/company", (req, res, next) => {
    computers.allSponsor()
        .then((sponsorComp) => {
            res.json({
                "message": "success",
                "data": sponsorComp
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
});

//----------------------------------------- UPDATE THE USER INFORMATIONS -----------
app.get("/api/account/update/:gender-:streamer-:age-:platform", (req, res, next) => {
    
    computers.updateStreamer(req.params.gender, req.params.streamer, req.params.age,req.params.platform)
    .then((acc) => {
        res.json({
            "message": `success`,
            "data": acc
        })
    })
    .catch((err) => {
        res.status(400).json({ "error": err.message });
        return;
    })
});


//----------------------------------------- GET THE USERNAME AND PASSWORD
app.get("/api/account/login/streamer/:username-:password", (req, res, next) => {
    
    computers.accountStreamer(req.params.username,req.params.password)
        .then((acc) => {
            res.json({
                "message": `Login ${req.params.username}`,
                "data": acc
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/account/login/viewer/:username-:password", (req, res, next) => {
    
    computers.accountViewer(req.params.username,req.params.password)
        .then((acc) => {
            res.json({
                "message": `Streamer by ${req.params.username}`,
                "data": acc
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});

//----------------------------------------- SEARCH BY SEARCH BAR INPUT
app.get("/api/search/streamer/input/:selSearch", (req, res, next) => {
    
    computers.byS1(req.params.selSearch)
        .then((Search) => {
            res.json({
                "message": `Streamer by ${req.params.selSearch}`,
                "data": Search
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});


//------------------------------------------------ SEARCH BY SINGLE FILTER----------------------------------------------------------
//To get user's input for ONLY Gender
app.get("/api/search/streamer/gender/:selGender", (req, res, next) => {
    
    computers.byF1(req.params.selGender)
        .then((Gender) => {
            res.json({
                "message": `Streamer by ${req.params.selGender}`,
                "data": Gender
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});

//To get user's input for ONLY Location
app.get("/api/search/streamer/location/:selLocation", (req, res, next) => {
    
        computers.byF2(req.params.selLocation)
            .then((nation) => {
                res.json({
                    "message": `Streamer by ${req.params.selLocation}`,
                    "data": nation
                })
            })
            .catch((err) => {
                res.status(400).json({ "error": err.message });
                return;
            })
       
});

//To get user's input for ONLY Age
app.get("/api/search/streamer/Age/:selAge", (req, res, next) => {
    
    computers.byF3(req.params.selAge)
        .then((Age) => {
            res.json({
                "message": `Streamer by ${req.params.selAge}`,
                "data": Age
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});

//To get user's input for ONLY platform
app.get("/api/search/streamer/platform/:selPlatform", (req, res, next) => {
    
    computers.byF4(req.params.selPlatform)
        .then((Platform) => {
            res.json({
                "message": `Streamer by ${req.params.selPlatform}`,
                "data": Platform
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});

//To get user's input for ONLY team
app.get("/api/search/streamer/team/:selTeam", (req, res, next) => {
    
    computers.byF5(req.params.selTeam)
        .then((Team) => {
            res.json({
                "message": `Streamer by ${req.params.selTeam}`,
                "data": Team
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});

//To get user's input for ONLY sponsor
app.get("/api/search/streamer/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF6(req.params.selSponsor)
        .then((Sponsor) => {
            res.json({
                "message": `Streamer by ${req.params.selSponsor}`,
                "data": Sponsor
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});

//To get user's input for ONLY platform
app.get("/api/search/streamer/games/:selGames", (req, res, next) => {
    
    computers.byF7(req.params.selGames)
        .then((Games) => {
            res.json({
                "message": `Streamer by ${req.params.selGames}`,
                "data": Games
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});

//------------------------------------------------ SEARCH BY FILTER ONE + AN ADDITIONAL FILTER----------------------------------------------------------
//To get user's input for ONLY platform
app.get("/api/search/streamer/gender/:selGender/location/:selLocation", (req, res, next) => {
    
    computers.byF1F2(req.params.selGender,req.params.selLocation)
        .then((F1F2) => {
            res.json({
                "message": `Streamer by ${req.params.selGender} by ${req.params.selLocation}`,
                "data": F1F2
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/age/:selAge", (req, res, next) => {
    
    computers.byF1F3(req.params.selGender,req.params.selAge)
        .then((F1F3) => {
            res.json({
                "message": `Streamer by ${req.params.selGender} by ${req.params.selAge}`,
                "data": F1F3
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/platform/:selPlatform", (req, res, next) => {
    
    computers.byF1F4(req.params.selGender,req.params.selPlatform)
        .then((F1F4) => {
            res.json({
                "message": `Streamer by ${req.params.selGender} by ${req.params.selPlatform}`,
                "data": F1F4
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/team/:selTeam", (req, res, next) => {
    
    computers.byF1F5(req.params.selGender,req.params.selTeam)
        .then((F1F5) => {
            res.json({
                "message": `Streamer by ${req.params.selGender} by ${req.params.selTeam}`,
                "data": F1F5
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF1F6(req.params.selGender,req.params.selSponsor)
        .then((F1F6) => {
            res.json({
                "message": `Streamer by ${req.params.selGender} by ${req.params.selSponsor}`,
                "data": F1F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/games/:selGames", (req, res, next) => {
    
    computers.byF1F7(req.params.selGender,req.params.selGames)
        .then((F1F7) => {
            res.json({
                "message": `Streamer by ${req.params.selGender} by ${req.params.selGames}`,
                "data": F1F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER TWO + AN ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/location/:selLocation/age/:selAge", (req, res, next) => {
    
    computers.byF2F3(req.params.selLocation,req.params.selAge)
        .then((F2F3) => {
            res.json({
                "message": `Streamer by ${req.params.selLocation} by ${req.params.selAge}`,
                "data": F2F3
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/location/:selLocation/platform/:selPlatform", (req, res, next) => {
    
    computers.byF2F4(req.params.selLocation,req.params.selPlatform)
        .then((F2F4) => {
            res.json({
                "message": `Streamer by ${req.params.selLocation} by ${req.params.selPlatform}`,
                "data": F2F4
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/location/:selLocation/team/:selTeam", (req, res, next) => {
    
    computers.byF2F5(req.params.selLocation,req.params.selTeam)
        .then((F2F5) => {
            res.json({
                "message": `Streamer by ${req.params.selLocation} by ${req.params.selTeam}`,
                "data": F2F5
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/location/:selLocation/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF2F6(req.params.selLocation,req.params.selSponsor)
        .then((F2F6) => {
            res.json({
                "message": `Streamer by ${req.params.selLocation} by ${req.params.selSponsor}`,
                "data": F2F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/location/:selLocation/games/:selGames", (req, res, next) => {
    
    computers.byF2F7(req.params.selLocation,req.params.selGames)
        .then((F2F7) => {
            res.json({
                "message": `Streamer by ${req.params.selLocation} by ${req.params.selGames}`,
                "data": F2F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER THREE + AN ADDITIONAL FILTER----------------------------------------------------------    
app.get("/api/search/streamer/age/:selAge/platform/:selPlatform", (req, res, next) => {
    
    computers.byF3F4(req.params.selAge,req.params.selPlatform)
        .then((F3F4) => {
            res.json({
                "message": `Streamer by ${req.params.selAge} by ${req.params.selPlatform}`,
                "data": F3F4
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/age/:selAge/team/:selTeam", (req, res, next) => {
    
    computers.byF3F5(req.params.selAge,req.params.selTeam)
        .then((F3F5) => {
            res.json({
                "message": `Streamer by ${req.params.selAge} by ${req.params.selTeam}`,
                "data": F3F5
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/age/:selAge/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF3F6(req.params.selAge,req.params.selSponsor)
        .then((F3F6) => {
            res.json({
                "message": `Streamer by ${req.params.selAge} by ${req.params.selSponsor}`,
                "data": F3F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/age/:selAge/games/:selGames", (req, res, next) => {
    
    computers.byF3F7(req.params.selAge,req.params.selGames)
        .then((F3F7) => {
            res.json({
                "message": `Streamer by ${req.params.selAge} by ${req.params.selGames}`,
                "data": F3F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER FOUR + AN ADDITIONAL FILTER----------------------------------------------------------  
app.get("/api/search/streamer/platform/:selPlatform/team/:selTeam", (req, res, next) => {
    
    computers.byF4F5(req.params.selPlatform,req.params.selTeam)
        .then((F4F5) => {
            res.json({
                "message": `Streamer by ${req.params.selPlatform} by ${req.params.selTeam}`,
                "data": F4F5
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/platform/:selPlatform/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF4F6(req.params.selPlatform,req.params.selSponsor)
        .then((F4F6) => {
            res.json({
                "message": `Streamer by ${req.params.selPlatform} by ${req.params.selSponsor}`,
                "data": F4F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/platform/:selPlatform/games/:selGames", (req, res, next) => {
    
    computers.byF4F7(req.params.selPlatform,req.params.selGames)
        .then((F4F7) => {
            res.json({
                "message": `Streamer by ${req.params.selPlatform} by ${req.params.selGames}`,
                "data": F4F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER FIVE + AN ADDITIONAL FILTER---------------------------------------------------------- 
app.get("/api/search/streamer/team/:selTeam/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF5F6(req.params.selTeam,req.params.selSponsor)
        .then((F5F6) => {
            res.json({
                "message": `Streamer by ${req.params.selPlatform} by ${req.params.selSponsor}`,
                "data": F5F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/team/:selTeam/games/:selGames", (req, res, next) => {
    
    computers.byF5F7(req.params.selTeam,req.params.selGames)
        .then((F5F7) => {
            res.json({
                "message": `Streamer by ${req.params.selPlatform} by ${req.params.selGames}`,
                "data": F5F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER SIX + AN ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/sponsor/:selSponsor/games/:selGames", (req, res, next) => {
    
    computers.byF6F7(req.params.selSponsor,req.params.selGames)
        .then((F6F7) => {
            res.json({
                "message": `Streamer by ${req.params.selSponsor} by ${req.params.selGames}`,
                "data": F6F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});

//------------------------------------------------ SQL for FILTER ONE, TWO + AN ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/age/:selAge", (req, res, next) => {
    
    computers.byF1F2F3(req.params.selGender,req.params.selLocation, req.params.selAge)
        .then((F1F2F3) => {
            res.json({
                "message": `Streamer by ${req.params.selGender},${req.params.selLocation}, and ${req.params.selAge}`,
                "data": F1F2F3
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/platform/:selPlatform", (req, res, next) => {
    
    computers.byF1F2F4(req.params.selGender,req.params.selLocation, req.params.selPlatform)
        .then((F1F2F4) => {
            res.json({
                "message": `Streamer by ${req.params.selGender},${req.params.selLocation}, and ${req.params.selPlatform}`,
                "data": F1F2F4
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/team/:selTeam", (req, res, next) => {
    
    computers.byF1F2F5(req.params.selGender,req.params.selLocation, req.params.selTeam)
        .then((F1F2F5) => {
            res.json({
                "message": `Streamer by ${req.params.selGender},${req.params.selLocation}, and ${req.params.selTeam}`,
                "data": F1F2F5
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF1F2F6(req.params.selGender,req.params.selLocation, req.params.selSponsor)
        .then((F1F2F6) => {
            res.json({
                "message": `Streamer by ${req.params.selGender},${req.params.selLocation}, and ${req.params.selSponsor}`,
                "data": F1F2F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/games/:selGames", (req, res, next) => {
    
    computers.byF1F2F7(req.params.selGender,req.params.selLocation, req.params.selGames)
        .then((F1F2F7) => {
            res.json({
                "message": `Streamer by ${req.params.selGender},${req.params.selLocation}, and ${req.params.selGames}`,
                "data": F1F2F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});

//------------------------------------------------ SQL for FILTER ONE, TWO + TWO ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/age/:selAge/platform/:selPlatform", (req, res, next) => {
    
    computers.byF1F2F3F4(req.params.selGender,req.params.selLocation, req.params.selAge, req.params.selPlatform)
        .then((F1F2F3F4) => {
            res.json({
                "message": `Streamer by F1,F2,F3,F4`,
                "data": F1F2F3F4
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/age/:selAge/team/:selTeam", (req, res, next) => {
    
    computers.byF1F2F3F5(req.params.selGender,req.params.selLocation, req.params.selAge, req.params.selTeam)
        .then((F1F2F3F5) => {
            res.json({
                "message": `Streamer by F1,F2,F3,F5`,
                "data": F1F2F3F5
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/age/:selAge/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF1F2F3F6(req.params.selGender,req.params.selLocation, req.params.selAge, req.params.selSponsor)
        .then((F1F2F3F6) => {
            res.json({
                "message": `Streamer by F1,F2,F3,F6`,
                "data": F1F2F3F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/age/:selAge/games/:selGames", (req, res, next) => {
    
    computers.byF1F2F3F7(req.params.selGender,req.params.selLocation, req.params.selAge, req.params.selGames)
        .then((F1F2F3F7) => {
            res.json({
                "message": `Streamer by F1,F2,F3,F7`,
                "data": F1F2F3F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER ONE, TWO + THREE ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/age/:selAge/platform/:selPlatform/team/:selTeam", (req, res, next) => {
    
    computers.byF1F2F3F4F5(req.params.selGender,req.params.selLocation, req.params.selAge, req.params.selPlatform, req.params.selTeam)
        .then((F1F2F3F4F5) => {
            res.json({
                "message": `Streamer by F1,F2,F3,F4,F5`,
                "data": F1F2F3F4F5
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/age/:selAge/platform/:selPlatform/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF1F2F3F4F6(req.params.selGender,req.params.selLocation, req.params.selAge, req.params.selPlatform, req.params.selSponsor)
        .then((F1F2F3F4F6) => {
            res.json({
                "message": `Streamer by F1,F2,F3,F4,F6`,
                "data": F1F2F3F4F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/age/:selAge/platform/:selPlatform/games/:selGames", (req, res, next) => {
    
    computers.byF1F2F3F4F7(req.params.selGender,req.params.selLocation, req.params.selAge, req.params.selPlatform, req.params.selGames)
        .then((F1F2F3F4F7) => {
            res.json({
                "message": `Streamer by F1,F2,F3,F4,F7`,
                "data": F1F2F3F4F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER ONE, TWO + FOUR ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/age/:selAge/platform/:selPlatform/team/:selTeam/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF1F2F3F4F5F6(req.params.selGender,req.params.selLocation, req.params.selAge, req.params.selPlatform, req.params.selTeam,req.params.selSponsor)
        .then((F1F2F3F4F5F6) => {
            res.json({
                "message": `Streamer by F1,F2,F3,F4,F5,F6`,
                "data": F1F2F3F4F5F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/age/:selAge/platform/:selPlatform/team/:selTeam/games/:selGames", (req, res, next) => {
    
    computers.byF1F2F3F4F5F7(req.params.selGender,req.params.selLocation, req.params.selAge, req.params.selPlatform, req.params.selTeam,req.params.selGames)
        .then((F1F2F3F4F5F7) => {
            res.json({
                "message": `Streamer by F1,F2,F3,F4,F5,F7`,
                "data": F1F2F3F4F5F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER ONE, TWO + FIVE ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/gender/:selGender/location/:selLocation/age/:selAge/platform/:selPlatform/team/:selTeam/sponsor/:selSponsor/games/:selGames", (req, res, next) => {
    
    computers.byF1F2F3F4F5F6F7(req.params.selGender,req.params.selLocation, req.params.selAge, req.params.selPlatform, req.params.selTeam,req.params.selSponsor,req.params.selGames)
        .then((F1F2F3F4F5F6F7) => {
            res.json({
                "message": `Streamer by F1,F2,F3,F4,F5,F6,F7`,
                "data": F1F2F3F4F5F6F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER TWO,THREE + ONE ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/location/:selLocation/age/:selAge/platform/:selPlatform", (req, res, next) => {
    
    computers.byF2F3F4(req.params.selLocation, req.params.selAge, req.params.selPlatform)
        .then((byF2F3F4) => {
            res.json({
                "message": `Streamer by byF2F3F4`,
                "data": byF2F3F4
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/location/:selLocation/age/:selAge/team/:selTeam", (req, res, next) => {
    
    computers.byF2F3F5(req.params.selLocation, req.params.selAge, req.params.selTeam)
        .then((byF2F3F5) => {
            res.json({
                "message": `Streamer by byF2F3F5`,
                "data": byF2F3F5
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/location/:selLocation/age/:selAge/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF2F3F6(req.params.selLocation, req.params.selAge, req.params.selSponsor)
        .then((byF2F3F6) => {
            res.json({
                "message": `Streamer by byF2F3F6`,
                "data": byF2F3F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/location/:selLocation/age/:selAge/games/:selGames", (req, res, next) => {
    
    computers.byF2F3F7(req.params.selLocation, req.params.selAge, req.params.selGames)
        .then((byF2F3F7) => {
            res.json({
                "message": `Streamer by byF2F3F7`,
                "data": byF2F3F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER TWO,THREE + TWO ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/location/:selLocation/age/:selAge/platform/:selPlatform/team/:selTeam", (req, res, next) => {
    
    computers.byF2F3F4F5(req.params.selLocation, req.params.selAge, req.params.selPlatform,req.params.selTeam)
        .then((byF2F3F4F5) => {
            res.json({
                "message": `Streamer by byF2F3F4F5`,
                "data": byF2F3F4F5
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/location/:selLocation/age/:selAge/platform/:selPlatform/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF2F3F4F6(req.params.selLocation, req.params.selAge, req.params.selPlatform,req.params.selSponsor)
        .then((byF2F3F4F6) => {
            res.json({
                "message": `Streamer by byF2F3F4F6`,
                "data": byF2F3F4F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/location/:selLocation/age/:selAge/platform/:selPlatform/games/:selGames", (req, res, next) => {
    
    computers.byF2F3F4F7(req.params.selLocation, req.params.selAge, req.params.selPlatform,req.params.selGames)
        .then((byF2F3F4F7) => {
            res.json({
                "message": `Streamer by byF2F3F4F7`,
                "data": byF2F3F4F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER TWO,THREE + THREE ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/location/:selLocation/age/:selAge/platform/:selPlatform/team/:selTeam/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF2F3F4F5F6(req.params.selLocation, req.params.selAge, req.params.selPlatform,req.params.selTeam,req.params.selSponsor)
        .then((byF2F3F4F5F6) => {
            res.json({
                "message": `Streamer by byF2F3F4F5F6`,
                "data": byF2F3F4F5F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/location/:selLocation/age/:selAge/platform/:selPlatform/team/:selTeam/games/:selGames", (req, res, next) => {
    
    computers.byF2F3F4F5F7(req.params.selLocation, req.params.selAge, req.params.selPlatform,req.params.selTeam,req.params.selGames)
        .then((byF2F3F4F5F7) => {
            res.json({
                "message": `Streamer by byF2F3F4F5F7`,
                "data": byF2F3F4F5F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER THREE, FOUR + ONE ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/age/:selAge/platform/:selPlatform/team/:selTeam", (req, res, next) => {
    
    computers.byF3F4F5(req.params.selAge, req.params.selPlatform,req.params.selTeam)
        .then((byF3F4F5) => {
            res.json({
                "message": `Streamer by byF3F4F5`,
                "data": byF3F4F5
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/age/:selAge/platform/:selPlatform/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF3F4F6(req.params.selAge, req.params.selPlatform,req.params.selSponsor)
        .then((byF3F4F6) => {
            res.json({
                "message": `Streamer by byF3F4F6`,
                "data": byF3F4F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/age/:selAge/platform/:selPlatform/games/:selGames", (req, res, next) => {
    
    computers.byF3F4F7(req.params.selAge, req.params.selPlatform,req.params.selGames)
        .then((byF3F4F7) => {
            res.json({
                "message": `Streamer by byF3F4F7`,
                "data": byF3F4F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER THREE,FOUR + TWO ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/age/:selAge/platform/:selPlatform/team/:selTeam/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF3F4F5F6(req.params.selAge, req.params.selPlatform,req.params.selTeam,req.params.selSponsor)
        .then((byF3F4F5F6) => {
            res.json({
                "message": `Streamer by byF3F4F5F6`,
                "data": byF3F4F5F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/age/:selAge/platform/:selPlatform/team/:selTeam/games/:selGames", (req, res, next) => {
    
    computers.byF3F4F5F7(req.params.selAge, req.params.selPlatform,req.params.selTeam,req.params.selGames)
        .then((byF3F4F5F7) => {
            res.json({
                "message": `Streamer by byF3F4F5F7`,
                "data": byF3F4F5F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER THREE,FOUR + THREE ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/age/:selAge/platform/:selPlatform/team/:selTeam/sponsor/:selSponsor/games/:selGames", (req, res, next) => {
    
    computers.byF3F4F5F6F7(req.params.selAge, req.params.selPlatform,req.params.selTeam,req.params.selSponsor,req.params.selGames)
        .then((byF3F4F5F6F7) => {
            res.json({
                "message": `Streamer by byF3F4F5F6F7`,
                "data": byF3F4F5F6F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER FOUR, FIVE + ONE ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/platform/:selPlatform/team/:selTeam/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF4F5F6(req.params.selPlatform,req.params.selTeam,req.params.selSponsor)
        .then((byF4F5F6) => {
            res.json({
                "message": `Streamer by byF4F5F6`,
                "data": byF4F5F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/platform/:selPlatform/team/:selTeam/games/:selGames", (req, res, next) => {
    
    computers.byF4F5F7(req.params.selPlatform,req.params.selTeam,req.params.selGames)
        .then((byF4F5F7) => {
            res.json({
                "message": `Streamer by byF4F5F7`,
                "data": byF4F5F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER FOUR, FIVE + TWO ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/platform/:selPlatform/team/:selTeam/sponsor/:selSponsor/games/:selGames", (req, res, next) => {
    
    computers.byF4F5F6F7(req.params.selPlatform,req.params.selTeam,req.params.selSponsor, req.params.selGames)
        .then((byF4F5F6F7) => {
            res.json({
                "message": `Streamer by byF4F5F6F7`,
                "data": byF4F5F6F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER FIVE, SIX + ONE ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/team/:selTeam/sponsor/:selSponsor/games/:selGames", (req, res, next) => {
    
    computers.byF5F6F7(req.params.selTeam,req.params.selSponsor, req.params.selGames)
        .then((byF5F6F7) => {
            res.json({
                "message": `Streamer by byF5F6F7`,
                "data": byF5F6F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
//------------------------------------------------ SQL for FILTER SIX, SEVEN + NO ADDITIONAL FILTER----------------------------------------------------------
app.get("/api/search/streamer/sponsor/:selSponsor/games/:selGames", (req, res, next) => {
    
    computers.byF6F7(req.params.selSponsor, req.params.selGames)
        .then((byF6F7) => {
            res.json({
                "message": `Streamer by byF6F7`,
                "data": byF6F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});

//-----------------------------------------------MISSED SQL FILTER-----------------------------------------------------------
app.get("/api/search/streamer/gender/:selGender/age/:selAge/team/:selTeam/games/:selGames", (req, res, next) => {
    
    computers.byF1F3F5F7(req.params.selGender, req.params.selAge, req.params.selTeam, req.params.selGames)
        .then((byF1F3F5F7) => {
            res.json({
                "message": `Streamer by F1F3F5F7`,
                "data": byF1F3F5F7
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});
app.get("/api/search/streamer/location/:selLocation/platform/:selPlatform/sponsor/:selSponsor", (req, res, next) => {
    
    computers.byF2F4F6(req.params.selLocation, req.params.selPlatform,req.params.selSponsor )
        .then((byF2F4F6) => {
            res.json({
                "message": `Streamer by F2F4F6`,
                "data": byF2F4F6
            })
        })
        .catch((err) => {
            res.status(400).json({ "error": err.message });
            return;
        })
   
});

// Default response for any other request
app.use(function (req, res) {
    res.status(404);
});

