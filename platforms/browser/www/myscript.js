
	/****************** ONE SIGNAL MISE A JOUR **************/
	$( '.connec_send_mail_one_signal' ).click(function() 
	{
		//on envoie le club et l'email a onesignal
		window.plugins.OneSignal.sendTag('email', $('#email_connec').val().toLowerCase());
		window.plugins.OneSignal.sendTag('club', $('.choose_club').val().toLowerCase());
	});
	$( '#testinsertjs' ).click(function() 
	{
		alert('ca marche');
	});

		
alert('script inserer');