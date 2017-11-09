﻿/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('Received Device Ready Event');
        console.log('calling setup push');
        app.setupPush();
    },
};

document.addEventListener('deviceready', function () {
// Enable to debug issues.
// window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

var notificationOpenedCallback = function(jsonData) {
console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
};

window.plugins.OneSignal
.startInit("4ffef649-1456-4cde-9ce3-151f00eb81e7")
.handleNotificationOpened(notificationOpenedCallback)
.endInit();

// cordova.InAppBrowser.open('http://www.gestion-sports.com/gestion-sports/application', '_blank', 'location=no,hardwareback=no,toolbar=no,transitionstyle=coververtical');

if (navigator.connection.type == Connection.NONE) 
{
	navigator.notification.alert('An internet connection is required to continue');
} 
else 
{
  window.location="http://www.gestion-sports.com/gestion-sports/application";
}

// Call syncHashedEmail anywhere in your app if you have the user's email.
// This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
// window.plugins.OneSignal.syncHashedEmail(userEmail);
}, false);
