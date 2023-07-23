import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import ListItem from "../components/ListItem";
import data from "../utils/data";
import GenreItem from "../components/GenreItem";
import QuestionItem from "../components/QuestionItem";

const Quizes = () => {
  const [genre, setGenre] = useState("react");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [selectedQuizQuestions, setSelectedQuizQuestions] = useState(null);

  const [idCount, setIdCount] = useState(0);
  const [quizLength, setQuizLength] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

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

  // !Displays all title comp. if genre is chosen.
  const renderQuizList = () => {
    if (genre) {
      const quizTitles = data.quizes[genre];
      const quizKeys = Object.keys(quizTitles);
      return (
        <FlatList
          data={quizKeys}
          renderItem={renderQuizItem}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.quizListContainer}
        />
      );
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

  // !WORKING ON SAVEDQUIZES ----->
  // console.log(data.quizes.react["10 react questions"].saved);
  // !WORKING ON SAVEDQUIZES ----->

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
    backgroundColor: "white",
    padding: 10,
    // paddingBottom: 50,
    paddingBottom: "110%",
    // borderWidth: 3,
    // borderColor: "red",
  },
};

export default Quizes;
