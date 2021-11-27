const conn = require('../infra/db')

class ScheduleDAO {
    add(schedule) {
        const sql = 'INSERT INTO Schedules SET ?'

        conn.query(sql, schedule, (err, results) => {
            if(err) {
                console.log(err)
            } else {
                console.log(results)
            }
        })
    }
}

module.exports = new ScheduleDAO()