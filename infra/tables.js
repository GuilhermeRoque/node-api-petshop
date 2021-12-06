const scheduleModel = require("../schedules/scheduleModel")
const usersModel = require("../users/usersModel")

scheduleModel.sync()
        .then(() => console.log("Successfully create table Schedules!!!"))
        .catch(console.log)

usersModel.sync()
        .then(() => console.log("Successfully create table Users!!!"))
        .catch(console.log)