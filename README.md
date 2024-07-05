cd android && ./gradlew bundleRelease -x bundleReleaseJsAndAssets

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

Step 2: Go to android directory:
cd android
Step 3: Now in this andrd folder, run this command
./gradlew assembleDebug // debug
./gradlew bundleRelease // release abb file
./gradlew assembleRelease // release apk

npx react-native start --reset-cache
// number , resume , email

profile status 0 = when send otp
profile status 1 = otp verify  
 basic profile status 2 = basic profile done

// drawable duplicate resource
rm -rf ./android/app/src/main/res/drawable-\*

rm -rf ./android/app/src/main/res/raw

// unrelated history
--allow-unrelated-histories

// ios debug release
react-native bundle --dev false --entry-file index.ios.js --bundle-output ios/main.jsbundle --platform ios

//

Run the following commands from the ios directory:

pod deintegrate
pod install
XCode Clean build

Also, new react-native versions index.ios.js not found because of we need run this,

react-native bundle --dev false --entry-file index.js --bundle-output ios/main.jsbundle --platform ios
react-native bundle --entry-file ./index.js --platform ios --bundle-output ios/main.jsbundle --assets-dest ios

react-native run-ios --configuration=release

"scripts": {
"start": "npx react-native start --reset-cache",
"android": "npx react-native run-android",
"ios": "yarn start & npx react-native run-ios",
"test": "jest",
"lint": "eslint .",
"install-all": "yarn install && yarn pod",
"pod": "cd ios && pod install && cd ..",
"clean": "yarn clean-ios && yarn clean-android && yarn clean-node && watchman watch-del-all && rm -rf /tmp/metro-\*",
"clean-android": "rm -rf android/.gradle android/.idea android/build android/app/build",
"clean-ios": "cd ios && pod deintegrate && cd .. && pod cache clean --all && rm -rf ios/build ios/Podfile.lock",
"clean-node": "rm -rf node_modules yarn.lock",
"clean-npm": "npm cache clean --force"
}

Open Terminal
Type open ~/.zshrc (or open ~/.profile if you don't use zsh)
It seems that LANG="en_US.UTF-8" alone isn't enough, so you have to set:

export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8
export LC_ALL=en_US.UTF-8
Save the file

Go back to Terminal and type source ~/.zshrc and type locale

You can now safely run pod update or pod install

Share

// for latest
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

// for release

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/build/intermediates/res/merged/release/ && cd android && ./gradlew assembleRelease && cd ..

for uninstall
adb uninstall com.horecahire

adb reverse tcp:8081 tcp:8081

Error: spawn ./gradlew EACCES = chmod 755 android/gradlew

zsh: permission denied: ./gradlew = chmod +x gradlew

git checkout mergedev2
git pull origin mergedev2
git checkout test
git pull origin mergedev2

// for merge
git merge yupSchema

// for fetch all
git fetch --all

adb logcat e

const [userSignedUp, setUserSignedUp] = useState('true');
const isFocused = useIsFocused();
console.log('userSignedUp', userSignedUp);
useEffect(() => {
const check = async () => {
if (isFocused) {
const value = await AsyncStorage.getItem('userSignedUp');
if (value === 'true') {
RootNavigation.navigate('SeekerTabNavigater');
}
}
};
check();
}, [isFocused]);

for otp Error
apiClient = new GoogleApiClient.Builder(reactContext)
.addApi(Auth.GOOGLE_SIGN_IN_API)
.build();
}

// for ssh key
cat .ssh/id_rsa.pub
