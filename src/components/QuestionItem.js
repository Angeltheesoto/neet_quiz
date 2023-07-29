import React, { useContext, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { darkTheme, lightTheme } from "../styles/globalStyles";
import MyContext from "../contexts/MyContext";

const QuestionItem = ({
  question,
  options,
  correctAnswer,
  handleGoBack,
  handleNext,
  questionNum,
  lengthOfQuiz,
  quizName,
  isEnd,
  idCount,
}) => {
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState(() => {
    const initialState = {
      selectedOption: null,
      isCorrect: null,
      isReveal: false,
    };

    return Array.from({ length: lengthOfQuiz }, () => ({ ...initialState }));
  });
  // *console.log(currentQuiz);

  const { theme } = useContext(MyContext);

  // !Keeps track of quiz progress.
  const handleCheck = (index) => {
    if (index != null) {
      setCurrentQuiz((prevState) => {
        return {
          ...prevState,
          [questionNum]: {
            selectedOption: index,
            isCorrect: index == correctAnswer,
            isReveal: true,
          },
        };
      });
      setTotalCorrect((prev) => (index == correctAnswer ? prev + 1 : prev));
    }
  };

  const renderQuiz = () => {
    return (
      <>
        <Text
          style={[styles.titleText, theme ? lightTheme.text : darkTheme.text]}
        >
          {question}
        </Text>
        <View>
          {options?.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.questionItem,
                currentQuiz[questionNum].isReveal
                  ? index == correctAnswer
                    ? styles.correct
                    : styles.incorrect
                  : null,
              ]}
              onPress={() => handleCheck(index)}
            >
              <Text key={index} style={styles.questionText}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {currentQuiz[questionNum]?.isReveal ? (
          <Text style={[styles.answerText, theme ? null : darkTheme.text]}>
            {currentQuiz[questionNum]?.isCorrect ? "Correct!" : "Wrong!"}
          </Text>
        ) : null}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleGoBack}
            style={[
              styles.buttonStyle,
              theme ? null : darkTheme.buttonContainer,
            ]}
          >
            <Text style={theme ? null : darkTheme.text}>
              {idCount == 0 ? "Exit Quiz" : "Back"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNext}
            style={[
              styles.buttonStyle,
              theme ? null : darkTheme.buttonContainer,
            ]}
          >
            <Text style={theme ? null : darkTheme.text}>Next</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  // !Displays quiz total
  const renderQuizEnd = () => {
    return (
      <View style={styles.quizEndContainer}>
        <Text style={[styles.titleText, theme ? null : darkTheme.text]}>
          You Finished!
        </Text>
        <Text
          style={[styles.titleText, theme ? null : darkTheme.text]}
        >{`Total: ${totalCorrect} / ${lengthOfQuiz}`}</Text>
        <View
          style={[
            styles.percentageContainer,
            totalCorrect > lengthOfQuiz / 2
              ? { borderColor: "green" }
              : { borderColor: "red" },
          ]}
        >
          <Text
            style={[styles.percentageText, theme ? null : darkTheme.text]}
          >{`${(totalCorrect / lengthOfQuiz) * 100}%`}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={[
        styles.container,
        theme ? lightTheme.background : darkTheme.background,
      ]}
    >
      <Text style={[styles.quizName, theme ? null : darkTheme.buttonContainer]}>
        <FontAwesome5
          name="question-circle"
          size={25}
          color={theme ? "black" : "white"}
        />{" "}
        {quizName}
      </Text>
      {isEnd ? renderQuizEnd() : renderQuiz()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 50,
    paddingBottom: "100%",
  },
  titleText: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  optionsText: {
    borderWidth: 2,
    borderColor: "red",
  },
  questionItem: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  questionItemActive: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  questionText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  questionTextActive: {
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },
  buttonStyle: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  correct: {
    backgroundColor: "limegreen",
  },
  incorrect: {
    backgroundColor: "tomato",
  },
  answerText: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  quizEndContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: "100%",
  },
  quizName: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 30,
    backgroundColor: "#eee",
    borderRadius: 22,
    paddingVertical: 10,
  },
  percentageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  percentageText: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
export default QuestionItem;
