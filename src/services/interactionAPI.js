/* ---------- Auth ---------- */
export const createAccount = async (userData) => {
    const url = 'http://localhost:4000/api/auth/register';
    const json = JSON.stringify(userData);

    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    }

    await fetch(url, settings)
        .then(res => res.json())
        .catch(err => {throw new Error('Server Error.')});
}

export const login = async (userData) => {
    const url = 'http://localhost:4000/api/auth/login';
    const json = JSON.stringify(userData)

    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include",
        body: json
    }

    const response = await fetch(url, settings)
        .catch(err => {throw new Error('Server Error.')});
    const data = await response.json();

    if (response.status === 200){
        return data
    } else {
        throw new Error(data.message);
    }
}

export const logout = async () => {
    const url = 'http://localhost:4000/api/auth/logout';
    const res = await fetch(url, {method: 'POST', credentials: "include"})
                        .catch(err => {throw new Error('Server Error.')});
    return res.ok;
}

export const validateAuth = async () => {
    const url = 'http://localhost:4000/api/auth/validate';
    try {
        const response = await fetch(url, {credentials: "include"})
                                .catch(err => {throw new Error('Server Error.')});
        return [response.ok, await response.json()];
    } catch(err){

    }
}

/* ---------- Quizzes ---------- */
export const requestQuestions = async (numberOfQuestions, topic, difficulty) => {
    const baseUrl = 'http://localhost:4000/api';
    const queryObject = {
        numberOfQuestions: numberOfQuestions,
        topic: topic,
        difficulty: difficulty
    };
    const queryStr = new URLSearchParams(queryObject).toString();

    const data = await fetch(baseUrl + '/quiz/generate?' + queryStr).then(res => res.json());
    return data.questions;
}

export const postQuiz = async({difficulty, questionsTotal, rightAnswers, topic}) => {
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

/* ---------- Statistics ---------- */
export const requestStatistics = async (userId) => {
    const url = `http://localhost:4000/api/user/statistics/${userId}`;


    try {
        const response = await fetch(url).then(res => res.json())
                        .catch(err => {throw new Error('Server Error.')});
        return response.data;
    } catch(err) {
        return {}
    }

}