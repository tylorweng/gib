//齊齊帶你愛運動

var request = require("request");
var cheerio = require("cheerio");

const linebot = require('linebot');
const express = require('express');

const bot = linebot({
	channelId: process.env.CHANNEL_ID,
	channelSecret: process.env.CHANNEL_SECRET,
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

const app = express();

const linebotParser = bot.parser();

app.get('/',function(req,res){
    res.send('Hello World!');
});

app.post('/linewebhook', linebotParser);

//每當server啟動，或是重build時，發送給自己的訊息
setTimeout(function(){
    var userId = 'U087e7ce49ad11b0bdbc68a240e6d8108';
    var sendMsg = 'server啟動惹';
    bot.push(userId,sendMsg);
    console.log('send: '+sendMsg);
},5000);


//製作回覆
bot.on('message', function (event) {

switch(event.message.type){

	case 'text':
	
		switch(event.message.text){

		//純文字區	
		case '安安':

			event.reply('安安 你好 幾歲 住哪?');

			break;


			
			

		}
	break;

	
}

});




app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});