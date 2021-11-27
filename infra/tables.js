class Tables {
    init(conn){
        this.conn = conn
        console.log("Tables created")
        this.createSchedules()
    }

    createSchedules(){
        const sql = "CREATE TABLE IF NOT EXISTS Schedules (id int NOT NULL AUTO_INCREMENT, client varchar (20) NOT NULL, service varchar (20) NOT NULL,"+
        " status varchar (20) NOT NULL, date datetime NOT NULL, notes text, PRIMARY KEY(id))"
        this.conn.query(sql, err => {
            if (err){
                console.log(err)
            }else {
                console.log(sql)
                console.log("Successfully create table Schedules!!!AAABCCCC")
            }

        })
    }
}

module.exports = new Tables