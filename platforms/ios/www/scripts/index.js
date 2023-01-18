// https://www.npmjs.com/package/cordova-plugin-android-permissions - plugin
// cordova plugin add cordova-plugin-android-permissions - only plugin installed

// https://developer.android.com/reference/android/Manifest.permission.html - list of permissions
// https://developer.android.com/guide/topics/permissions/overview#normal-dangerous - types of permissions

let app = {
    permissions: null,
    init: function () {
        document.addEventListener('deviceready', app.ready);
        console.log('init');
    },
    ready: function () {
        //plugins ready
        app.permissions = cordova.plugins.permissions;
        console.log(app.permissions);
        //add button listeners
        console.log('adding listeners')
        document.getElementById('btnGeo').addEventListener('click', function () {
            console.log('hola martin');
            let perms = [
                "android.permission.CAMERA",

                "android.permission.ACCESS_COARSE_LOCATION",
                "android.permission.ACCESS_FINE_LOCATION",
                "android.permission.ACCESS_BACKGROUND_LOCATION",



                "android.permission.ACCESS_NETWORK_STATE",
                "android.permission.ACCESS_WIFI_STATE",
                "android.permission.ACCESS_WIMAX_STATE",
                "android.permission.CHANGE_NETWORK_STATE",
                "android.permission.CHANGE_WIFI_STATE",
                "android.permission.CHANGE_WIMAX_STATE",
                "android.permission.CONNECTIVITY_INTERNAL",
                "android.permission.DOWNLOAD_WITHOUT_NOTIFICATION",

                "android.permission.LOOP_RADIO",
                "android.permission.NFC",
                "android.permission.READ_WIFI_CREDENTIAL",
                "android.permission.RECEIVE_DATA_ACTIVITY_CHANGE",
                "android.permission.SCORE_NETWORKS",



                "permission:android.permission.MANAGE_DOCUMENTS",
                "permission:android.permission.READ_EXTERNAL_STORAGE",
                "permission:android.permission.WRITE_EXTERNAL_STORAGE",
                "permission:android.permission.WRITE_MEDIA_STORAGE",


                "permission:android.permission.ACCESS_SUPERUSER",


                "permission:android.permission.READ_SYNC_SETTINGS",
                "permission:android.permission.READ_SYNC_STATS",
                "permission:android.permission.WRITE_SYNC_SETTINGS",


                "permission:android.permission.ACCESS_LOCATION_EXTRA_COMMANDS",
                "permission:android.permission.ACCESS_MOCK_LOCATION",
                "permission:android.permission.BATTERY_STATS",
                "permission:android.permission.BLUETOOTH_STACK",
                "permission:android.permission.CLEAR_APP_CACHE",
                "permission:android.permission.NET_ADMIN",
                "permission:android.permission.NET_TUNNELING",
                "permission:android.permission.START_ANY_ACTIVITY",


                "permission:android.permission.BLUETOOTH",
                "permission:android.permission.BLUETOOTH_ADMIN",
                "permission:android.permission.BLUETOOTH_MAP",
                "permission:android.permission.BLUETOOTH_PRIVILEGED",



                "permission:android.permission.CHANGE_WIFI_MULTICAST_STATE",
                "permission:android.permission.FLASHLIGHT",
                "permission:android.permission.TRANSMIT_IR",
                "permission:android.permission.VIBRATE",
                "permission:android.permission.WAKE_LOCK"
            ]
            app.permissions.checkPermission("android.permission.ACCESS_COARSE_LOCATION", function (status) {
                console.log('success checking permission');
                console.log('HAS ACCESS_COURSE_LOCATION:', status.hasPermission);
                if (!status.hasPermission) {
                    app.permissions.requestPermissions(perms, function (status) {
                        console.log('success requesting ACCESS_*_LOCATION permission');
                    }, function (err) {
                        console.log('failed to set permission');
                    });
                }
            }, function (err) {
                console.log(err);
            });
        });
    }
}
app.init();