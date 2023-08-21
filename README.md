<!--
    !How to start phone qr code:
    [expo-cli start --tunnel]
    !How to start emulator:
    1. expo start
    2. press a or shift a
    Phone: Pixel_3a_API_34_extension_level_7_x86_64
    !How to start with debugger
    [expo start --no-dev --minify]
    ?Note: When you start your React Native or Expo app, make sure to use the --no-dev --minify flags with the expo start command to enable JavaScript minification and prevent the app from opening in the Expo Developer Tools. This is required to use React Native Debugger with Expo.

    !dataExample = {
        quizes: {
            react: {
                "title": {
                    questions: [
                        {
                            question: "What is..?",
                            options: ["1","2","3","4"],
                            correctAnswer: "0"
                        },
                        {
                            question: "What is..?",
                            options: ["1","2","3","4"],
                            correctAnswer: "0"
                        }
                    ]
                }
            },
            nodejs: {
                "title": {
                    questions: [
                        {
                            question: "What is..?",
                            options: ["1","2","3","4"],
                            correctAnswer: "0"
                        },
                        {
                            question: "What is..?",
                            options: ["1","2","3","4"],
                            correctAnswer: "0"
                        }
                    ]
                }
            }
        }
    }

    ?Things to add to app:
        !1. BUG: When user clicks quiz and exits back with the starting exit button, that quiz cant be entered again until a different quiz is selected.
        !2. BUG: Clicking buttons has a delay on them such as: quiz buttons, and bookmarks.
        3. Implement ads
        4. upload to playstore
 -->
