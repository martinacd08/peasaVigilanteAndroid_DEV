/*
var serviceApp = {
	// Application Constructor
	initialize : function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		$(document).ready(function() {
			$('#btnServiceTesintg').click(function() {
				getMenuList("V")

			});
		});

	

		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady : function() {
		serviceApp.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent : function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	}
};

serviceApp.initialize();

// parsing json data received from the server.

function menuListJsonDataParse(json) {

	lert(json);

}

// Calling the servlet that returns json data through ajax.
// we are using data type jsonp which supports cross domain url. if your servlet
// is deployed in the local server, then use local server/ client ip address
// instead of localhost.

function getMenuList(menuType) {

	$.ajax({

		type : "GET",
		url : "http://peasanodejsdev.dreamhosters.com:9988/testing",
		dataType : 'jsonp',
	
		error : function() {
			alert("Errr is occured");
		}
	});
}

*/