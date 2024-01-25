/* ---------- Quizzes ---------- */
export const requestQuiz = async (numberOfQuestions, topic, difficulty) => {
    const baseUrl = 'http://localhost:4000/api';
    const queryObject = {
        numberOfQuestions: numberOfQuestions,
        topic: topic,
        difficulty: difficulty
    };
    const queryStr = new URLSearchParams(queryObject).toString();

    const data = await fetch(baseUrl + '/quiz/generate?' + queryStr).then(res => res.json());
    return data.quiz;
}

export const postQuizResult = async(difficulty, questionsTotal, rightAnswers, topic) => {
    const url = 'http://localhost:4000/api/quiz/add';
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ difficulty, questionsTotal, rightAnswers, topic })
    };

    const response = await fetch(url, settings)
                        .catch(err => {throw new Error('Server Error.')});

    if (response.status !== 201) throw new Error('Error occured. Quiz was not added');
}