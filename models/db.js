const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'blog_user',
    password: 'Nitin2520.',
    database: 'my_blog_db'
});

db.connect(err => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});

module.exports = db;
