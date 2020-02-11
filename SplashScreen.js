/*
 * A smart splash screen for react-native apps
 * https://github.com/react-native-component/react-native-smart-splash-screen/
 * Released under the MIT license
 * Copyright (c) 2016 react-native-component <moonsunfall@aliyun.com>
 */

import {
    NativeModules,
} from 'react-native'

const SplashScreenModule = NativeModules.SplashScreen;

export default class SplashScreen {
    /**add by david at 2020-2-11 */
    //清除租户id
    static cleanEnterpriseId() {
        SplashScreenModule.cleanEnterpriseId()
    }
    /**add by david at 2020-2-11 */

    static loadLaunchScreenImage(start_url, icon_url, id) {
        SplashScreenModule.loadLaunchScreenImage(start_url, icon_url, id);
    }
    static close(param) {
        SplashScreenModule.close(param);
    }
    static cleanScreenImage() {
        SplashScreenModule.cleanScreenImage();
    }
}

