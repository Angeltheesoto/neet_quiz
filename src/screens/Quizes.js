import React, { useEffect, useState, useContext } from "react";
import { Text, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import ListItem from "../components/ListItem";
import data from "../utils/data";
import GenreItem from "../components/GenreItem";
import QuestionItem from "../components/QuestionItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigationState } from "@react-navigation/native";
import { darkTheme, lightTheme } from "../styles/globalStyles";
import MyContext from "../contexts/MyContext";

const Quizes = ({ fetchLsData, setFetchLsData }) => {
  const [genre, setGenre] = useState("javascript");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [selectedQuizQuestions, setSelectedQuizQuestions] = useState(null);
  const [testQuizQuestions, setTestQuizQuestions] = useState(null);

  const [idCount, setIdCount] = useState(0);
  const [quizLength, setQuizLength] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [savedQuiz, setSavedQuiz] = useState(null);

  const navigationState = useNavigationState((state) => state);
  const currentRouteName = navigationState.routes[navigationState.index].name;
  // console.log(currentRouteName);

  const { theme } = useContext(MyContext);

  // !Resets everything when you choose a new genre
  const handleGenreSelect = (gen) => {
    setGenre(gen);
    setSelectedQuiz(null);
    setSelectedQuizQuestions(null);
    setIdCount(0);
    setIsEnd(false);
  };
  // *console.log("Selected genre: ", genre);

  // !Resets idCount and isEnd for retake
  const handleRetakeQuiz = (gen, quizName) => {
    setIdCount(0);
    setIsEnd(false);
    handleQuizQuestions();
  };

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
  };
  // *console.log("Selected quiz: ", selectedQuiz);

  // !Reorders the quizzes so they are not in order everytime
  const reorderQuestions = (questions) => {
    // Convert the object keys into an array of questions
    const questionsArray = Object.values(questions);
    // console.log("---Not shuffled", questionsArray);
    // shuffle the array using a function
    const shuffledQuestions = shuffleArray(questionsArray);
    // console.log("---Shuffled array: ", shuffledQuestions);
    return shuffledQuestions;
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleQuizQuestions = () => {
    if (selectedQuiz) {
      // ? This returns the array in order
      // setSelectedQuizQuestions(data.quizes[genre][selectedQuiz]?.questions);
      // ? This returns the array shuffled
      const quizQuestions = data.quizes[genre][selectedQuiz]?.questions;
      const reorderedQ = reorderQuestions(quizQuestions);
      setSelectedQuizQuestions(reorderedQ);
      // setTestQuizQuestions(reorderedQ);
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
    } else {
      setSavedQuiz({});
    }
  };
  // *console.log(savedQuiz);
  // console.log(fetchLsData);

  // !Displays all title comp. if genre is chosen.
  const renderQuizList = () => {
    if (genre) {
      const quizTitles = data.quizes[genre];
      const quizKeys = Object.keys(quizTitles);
      const savedQuizTitles = () => {
        if (savedQuiz && savedQuiz[genre]) {
          if (savedQuiz[genre].length === 0) {
            return undefined;
          } else {
            return savedQuiz[genre];
          }
        } else {
          return undefined;
        }
      };
      // console.log(savedQuizTitles());
      if (currentRouteName === "Quizzes") {
        return (
          <FlatList
            data={quizKeys}
            renderItem={renderQuizItem}
            keyExtractor={(item) => item}
            contentContainerStyle={[
              styles.quizListContainer,
              theme ? lightTheme.background : darkTheme.background,
            ]}
          />
        );
      } else if (currentRouteName === "Saved") {
        if (savedQuizTitles() === undefined) {
          return (
            <Text
              style={[
                styles.savedQuizText,
                theme ? null : darkTheme.background,
              ]}
            >
              No saved quizzes
            </Text>
          );
        } else {
          return (
            <FlatList
              data={savedQuizTitles()}
              renderItem={renderQuizItem}
              keyExtractor={(item) => item}
              contentContainerStyle={[
                styles.quizListContainer,
                theme ? lightTheme.background : darkTheme.background,
              ]}
            />
          );
        }
      } else {
        return null;
      }
    }
    return null;
  };
  // *console.log(savedQuiz[genre].length == 0);

  // !Displays our chosen quiz and passes all props.
  const renderQuizQuestions = () => {
    const quizQuestions = data.quizes[genre][selectedQuiz].questions;
    // const question = quizQuestions[idCount].question;
    // const options = quizQuestions[idCount].options;
    // const correctAnswer = quizQuestions[idCount].correctAnswer;
    const question = selectedQuizQuestions[idCount].question;
    const options = selectedQuizQuestions[idCount].options;
    const correctAnswer = selectedQuizQuestions[idCount].correctAnswer;
    const lengthOfQuiz = selectedQuizQuestions.length;
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
            idCount={idCount}
            handleGenreSelect={handleGenreSelect}
            genre={genre}
            handleRetakeQuiz={handleRetakeQuiz}
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
      // console.log("You reached the end of the quiz.");
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
  }, [savedQuiz, fetchLsData]);
  // console.log(savedQuiz);

  return (
    <SafeAreaView styles={styles.container}>
      <FlatList
        data={Object.keys(data.quizes)}
        renderItem={renderGenreItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        style={[
          styles.genreContainer,
          theme ? lightTheme.background : darkTheme.background,
        ]}
      />
      {selectedQuizQuestions ? renderQuizQuestions() : renderQuizList()}
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  quizListContainer: {
    minHeight: "100%",
    padding: 10,
    paddingBottom: "110%",
    // borderWidth: 1,
    // borderColor: "red",
  },
  savedQuizText: {
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: "200%",
    fontSize: 30,
    fontWeight: "bold",
    color: "gray",
  },
  genreContainer: {
    minHeight: 50,
    paddingHorizontal: 10,
    backgroundColor: "white",
    paddingTop: 5,
    // borderWidth: 1,
    // borderColor: "red",
  },
};

export default Quizes;
