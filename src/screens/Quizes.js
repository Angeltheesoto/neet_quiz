import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import ListItem from "../components/ListItem";
import data from "../utils/data";
import GenreItem from "../components/GenreItem";
import QuestionItem from "../components/QuestionItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigationState } from "@react-navigation/native";
import { Text } from "react-native";

const Quizes = () => {
  const [genre, setGenre] = useState("react");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [selectedQuizQuestions, setSelectedQuizQuestions] = useState(null);

  const [idCount, setIdCount] = useState(0);
  const [quizLength, setQuizLength] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [savedQuiz, setSavedQuiz] = useState(null);

  const navigationState = useNavigationState((state) => state);
  const currentRouteName = navigationState.routes[navigationState.index].name;
  // console.log(currentRouteName);

  // !Resets everything when you choose a new genre
  const handleGenreSelect = (gen) => {
    setGenre(gen);
    setSelectedQuiz(null);
    setSelectedQuizQuestions(null);
    setIdCount(0);
    setIsEnd(false);
  };
  // *console.log("Selected genre: ", genre);

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
  };
  // *console.log("Selected quiz: ", selectedQuiz);

  const handleQuizQuestions = () => {
    if (selectedQuiz) {
      setSelectedQuizQuestions(data.quizes[genre][selectedQuiz]?.questions);
    }
  };
  // *console.log("Selected questions: ", selectedQuizQuestions);

  // !Displays topbar genres using GenreItem comp.
  const renderGenreItem = ({ item, index }) => (
    <GenreItem
      item={item}
      index={index}
      handleGenreSelect={handleGenreSelect}
      genre={genre}
    />
  );

  // !Displays quiz titles using ListItem comp.
  const renderQuizItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleQuizSelect(item)}>
      <ListItem title={item} genre={genre} />
    </TouchableOpacity>
  );

  // !Gets local storage data to display saved quizes.
  const fetchLocalStorageData = async () => {
    const data = await AsyncStorage.getItem("bookmarkedItems");
    if (data) {
      setSavedQuiz(JSON.parse(data));
    }
  };
  // *console.log(savedQuiz);

  // !Displays all title comp. if genre is chosen.
  const renderQuizList = () => {
    if (genre) {
      const quizTitles = data.quizes[genre];
      const quizKeys = Object.keys(quizTitles);
      const savedQuizTitles = () => {
        if (savedQuiz) {
          return savedQuiz[genre];
        }
        return undefined;
      };
      // console.log(savedQuizTitles());
      if (currentRouteName === "Quizzes") {
        return (
          <FlatList
            data={quizKeys}
            renderItem={renderQuizItem}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.quizListContainer}
          />
        );
      } else if (currentRouteName === "Saved") {
        if (savedQuizTitles() == undefined) {
          return <Text style={styles.savedQuizText}>No saved quizzes</Text>;
        } else {
          return (
            <FlatList
              data={savedQuizTitles()}
              renderItem={renderQuizItem}
              keyExtractor={(item) => item}
              contentContainerStyle={styles.quizListContainer}
            />
          );
        }
      } else {
        return null;
      }
    }
    return null;
  };

  // !Displays our chosen quiz and passes all props.
  const renderQuizQuestions = () => {
    const quizQuestions = data.quizes[genre][selectedQuiz].questions;
    const question = quizQuestions[idCount].question;
    const options = quizQuestions[idCount].options;
    const correctAnswer = quizQuestions[idCount].correctAnswer;
    const lengthOfQuiz = quizQuestions.length;
    // console.log(lengthOfQuiz);
    if (selectedQuizQuestions && idCount >= 0 && idCount <= lengthOfQuiz) {
      if (quizQuestions) {
        return (
          <QuestionItem
            question={question}
            options={options}
            correctAnswer={correctAnswer}
            handleGoBack={handleGoBack}
            handleNext={handleNext}
            questionNum={idCount}
            lengthOfQuiz={lengthOfQuiz}
            quizName={selectedQuiz}
            isEnd={isEnd}
          />
        );
      }
    }
  };
  // *console.log(idCount, quizLength);

  // !Goes to previous question. For [renderQuizQuestions].
  const handleGoBack = () => {
    if (idCount == 0) {
      setSelectedQuizQuestions(null);
    } else {
      setIdCount((prev) => (prev -= 1));
    }
  };

  // !Goes to next question. For [renderQuizQuestions].
  const handleNext = () => {
    if (idCount < quizLength - 1) {
      setIdCount((prev) => (prev += 1));
    } else {
      console.log("You reached the end of the quiz.");
      setIsEnd(!isEnd);
    }
  };

  useEffect(() => {
    const updateQuizQuestions = async () => {
      handleQuizQuestions();

      // !Sets the quizLength onClick for here.
      const hasQuizQuestions = data.quizes[genre][selectedQuiz]?.questions;

      if (hasQuizQuestions) {
        setQuizLength(data.quizes[genre][selectedQuiz].questions.length);
      } else {
        setQuizLength(0);
      }
    };

    if (selectedQuiz) {
      updateQuizQuestions();
    }
  }, [selectedQuiz]);

  // !Fetch local storage data
  useEffect(() => {
    fetchLocalStorageData();
  }, [savedQuiz]);

  return (
    <SafeAreaView styles={styles.container}>
      <FlatList
        data={Object.keys(data.quizes)}
        renderItem={renderGenreItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.genreListContainer}
      />
      {selectedQuizQuestions ? renderQuizQuestions() : renderQuizList()}
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  genreListContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "white",
    minHeight: 55,
  },

  quizListContainer: {
    minHeight: "100%",
    backgroundColor: "white",
    padding: 10,
    paddingBottom: "110%",
    // borderWidth: 3,
    // borderColor: "red",
  },
  savedQuizText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
    color: "gray",
  },
};

export default Quizes;
