﻿cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.NotificationProxy",
        "file": "plugins/cordova-plugin-dialogs/src/windows/NotificationProxy.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "file": "plugins/cordova-plugin-statusbar/src/windows/StatusBarProxy.js",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "id": "phonegap-plugin-push.PushNotification",
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "pluginId": "phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "id": "phonegap-plugin-push.PushPlugin",
        "file": "plugins/phonegap-plugin-push/src/windows/PushPluginProxy.js",
        "pluginId": "phonegap-plugin-push",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "file": "plugins/cordova-plugin-network-information/src/windows/NetworkInfoProxy.js",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "file": "plugins/cordova-plugin-inappbrowser/src/windows/InAppBrowserProxy.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "id": "onesignal-cordova-plugin.OneSignal",
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "id": "onesignal-cordova-plugin.OneSignalPushProxy",
        "file": "plugins/onesignal-cordova-plugin/src/windows/OneSignalPushProxy.js",
        "pluginId": "onesignal-cordova-plugin",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-camera.Camera",
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "id": "cordova-plugin-camera.camera",
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraProxy",
        "file": "plugins/cordova-plugin-camera/src/windows/CameraProxy.js",
        "pluginId": "cordova-plugin-camera",
        "runs": true
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "file": "plugins/cordova-plugin-splashscreen/www/windows/SplashScreenProxy.js",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.7",
    "cordova-plugin-dialogs": "1.2.1",
    "cordova-plugin-statusbar": "2.1.3",
    "cordova-plugin-whitelist": "1.2.2",
    "phonegap-plugin-push": "1.8.4",
    "cordova-plugin-network-information": "1.3.3",
    "cordova-plugin-inappbrowser": "1.7.1",
    "onesignal-cordova-plugin": "2.2.2",
    "cordova-plugin-camera": "3.0.0",
    "cordova-plugin-splashscreen": "4.0.3"
};
// BOTTOM OF METADATA
});