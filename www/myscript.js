

$(function() 
{	
	var notificationOpenedCallback = function(jsonData) {
	console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
	};

	window.plugins.OneSignal
	.startInit("4ffef649-1456-4cde-9ce3-151f00eb81e7")
	.handleNotificationOpened(notificationOpenedCallback)
	.endInit();
	/****************** ONE SIGNAL MISE A JOUR **************/
	$( ".connec_send_mail_one_signal" ).click(function() 
	{
		//on envoie le club et l'email a onesignal
		window.plugins.OneSignal.sendTag("email", $("#email_connec").val().toLowerCase());
		window.plugins.OneSignal.sendTag("club", $(".choose_club").val().toLowerCase());
	});
	$( "#testinsertjs" ).click(function() 
	{
		alert("ca marche");
	});
});
		
alert('script inserer');