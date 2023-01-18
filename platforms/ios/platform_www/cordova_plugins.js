cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-cors.mobi-xhr",
      "file": "plugins/cordova-plugin-cors/www/ios/xhr.js",
      "pluginId": "cordova-plugin-cors",
      "clobbers": [
        "window.XMLHttpRequest"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection"
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
      "id": "phonegap-plugin-mobile-accessibility.mobile-accessibility",
      "file": "plugins/phonegap-plugin-mobile-accessibility/www/mobile-accessibility.js",
      "pluginId": "phonegap-plugin-mobile-accessibility",
      "clobbers": [
        "window.MobileAccessibility"
      ]
    },
    {
      "id": "phonegap-plugin-mobile-accessibility.MobileAccessibilityNotifications",
      "file": "plugins/phonegap-plugin-mobile-accessibility/www/MobileAccessibilityNotifications.js",
      "pluginId": "phonegap-plugin-mobile-accessibility",
      "clobbers": [
        "MobileAccessibilityNotifications"
      ]
    },
    {
      "id": "cordova-plugin-android-permissions.Permissions",
      "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
      "pluginId": "cordova-plugin-android-permissions",
      "clobbers": [
        "cordova.plugins.permissions"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-cors": "1.1.1",
    "cordova-plugin-device": "2.0.4-dev",
    "cordova-plugin-network-information": "3.0.0-dev",
    "cordova-plugin-splashscreen": "6.0.1-dev",
    "cordova-plugin-whitelist": "1.3.4",
    "phonegap-plugin-mobile-accessibility": "1.0.5-dev",
    "cordova-plugin-android-permissions": "1.1.5"
  };
});