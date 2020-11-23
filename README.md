# Running the project locally

1. run `npm install`
2. Platform
    - web: `ionic serve`
    - ios: (https://ionicframework.com/docs/developing/ios)
        - Make sure you have xcode installed
        - update xcode command line tools with `xcode-select --install`
        - Create an ios emulator (Windows -> Devices and simulators)
        - run `npm run build`
        - run `ionic capacitor add ios` (only need to run once -> creates an ios directory in your project)
        - Optional: Open project in Xcode with `ionic capacitor open ios`
        - To deploy updates, run `ionic capacitor copy ios` and click the play button in xcode
        - To provide live reload functionality run `ionic capacitor run ios -l --external`, then press play on a simulator. If this isn't working, try stopping the app and starting it again.
 