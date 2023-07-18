import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

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
  // *console.log(
  //   `Question#: ${questionNum}`,
  //   `Total: ${totalCorrect} / ${lengthOfQuiz}`
  // );

  const renderQuiz = () => {
    return (
      <>
        <Text style={styles.titleText}>{question}</Text>
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
          <Text style={styles.answerText}>
            {currentQuiz[questionNum]?.isCorrect ? "Correct!" : "Wrong!"}
          </Text>
        ) : null}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleGoBack} style={styles.buttonStyle}>
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext} style={styles.buttonStyle}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  // !Displays quiz total
  const renderQuizEnd = () => {
    return (
      <View style={styles.quizEndContainer}>
        <Text style={styles.titleText}>You Finished!</Text>
        <Text
          style={styles.titleText}
        >{`Total: ${totalCorrect} / ${lengthOfQuiz}`}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.quizName}>{quizName}</Text>
      <View style={styles.quizContainer}>
        {isEnd ? renderQuizEnd() : renderQuiz()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 50,
    minHeight: "80%",

    // borderWidth: 3,
    // borderColor: "green",
  },
  titleText: {
    fontSize: 30,
  },
  questionText: {
    fontSize: 50,
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
  },
  questionTextActive: {
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
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
  quizContainer: {
    padding: 10,

    // borderWidth: 2,
    // borderColor: "red",
  },
  quizEndContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 100,
  },
  quizName: {
    textAlign: "center",
    fontSize: 20,
  },
});
export default QuestionItem;
