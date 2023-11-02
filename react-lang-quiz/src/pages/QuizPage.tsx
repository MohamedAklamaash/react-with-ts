import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const QuizPage = () => {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState<any[]>([]);
  let [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  let [ansCount, setansCount] = useState<number>(0);
  const getQuizData = async () => {
    const { data } = await axios.get(`https://the-trivia-api.com/v2/questions`);
    setQuizData(data);
  };

  useEffect(() => {
    getQuizData();
  }, []);

  const shuffleArr = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  console.log(quizData);
  console.log("Answer Count:", ansCount);

  return (
    <div className="p-4">
      {quizData.map((d: any, index: number) => {
        quizAnswers = [];
        quizAnswers.push(d.correctAnswer, ...d.incorrectAnswers);
        quizAnswers = shuffleArr(quizAnswers);
        return (
          <div className="p-2">
            <h1 className="font-mono">
              Category : {String(d.category).toLocaleUpperCase()}
            </h1>
            <h1 className="text-center">
              Question {index + 1} : {d.question.text}
            </h1>
            <main>
              {quizAnswers.map((ans, ansIndex) => {
                return (
                  <div className="flex items-center space-x-3 flex-wrap">
                    <input
                      type="radio"
                      name={`question${index}`}
                      onClick={() => {
                        ans === d.correctAnswer
                          ? setansCount((prev) => prev + 1)
                          : 0;
                      }}
                      className="rounded-full h-3 w-7 "
                    />
                    <p>
                      Option {ansIndex + 1} : {ans}
                    </p>
                  </div>
                );
              })}
            </main>
            <h1 className="text-end ">Difficulty : {d.difficulty}</h1>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        );
      })}

      <button onClick={()=>{
        navigate(`/result/:${ansCount}`)
      }}>
        Click To Check Your Result
      </button>
    </div>
  );
};

export default QuizPage;
