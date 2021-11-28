const scheduleModel = require("../schedules/scheduleModel")

scheduleModel.sync()
        .then(() => console.log("Successfully create table Schedules!!!"))
        .catch(console.log)