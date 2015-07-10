var server      = require('http').createServer();
var io          = require('socket.io')(server);
var mysql      	= require('mysql');
var colors = require('colors');

console.log('SERVER START'.red);

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'auto'
});

connection.connect(function(err) {
	if (err) 
	{
		console.error('ERROR CONNECTING: ' + err.stack);
		return;
	}

	console.log('CONNECTED AS ID ' + connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});
io.on('connection', function (socket)
    {
		console.log('ON CONNECT');
		console.log(socket.handshake);
		
        function emit(options)
        {
            options.A_TYPE = 'FROM_NODE';

            // парсим в джейсона
            options = JSON.stringify(options);


            socket.emit(token, options);
        }

        socket.on('init', function (data)
        {
            console.log(data)
        });

        socket.on('disconnect', function ()
        {
            console.log('ON DISCONNECT');
        });

    });
    server.listen(8391);

