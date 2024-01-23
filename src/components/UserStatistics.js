import { useEffect, useState } from "react";
import { requestStatistics } from "../services/interactionAPI";

/*
"data": {
    "totalQuizes": 1,
    "totalQuiestions": 10,
    "easyQuestions": 0,
    "mediumQuestions": 0,
    "hardQuestions": 0,
    "totalRightAnswers": 9,
    "easyRightAnswers": 0,
    "mediumRightAnswers": 0,
    "hardRightAnswers": 0,
    "topics": {
        "General Knowledge": 1
    }
}*/

function UserStatistics({userId, className}){
    const [statistics, setStatistics] = useState({});

    useEffect(() => {
        requestStatistics(userId).then(data => setStatistics(data));
    }, [userId])

    return(
        <div className={"font-custom-main text-white overflow-x-hidden overflow-y-scroll"  + className}>
            <p>{`Total quizes: ${statistics?.totalQuizes || 0}`}</p>
            <p>{`Total questions: ${statistics?.totalQuiestions || 0}`}</p>
            <p>{`Easy questions: ${statistics?.easyQuestions || 0}`}</p>
            <p>{`Medium questions: ${statistics?.mediumQuestions || 0}`}</p>
            <p>{`Hard questions: ${statistics?.hardQuestions || 0}`}</p>

            <p>{`Total right asnwers: ${statistics?.totalRightAnswers || 0}`}</p>
            <p>{`Easy right answers: ${statistics?.easyRightAnswers || 0}`}</p>
            <p>{`Medium right answers: ${statistics?.mediumRightAnswers || 0}`}</p>
            <p>{`Hard right answers: ${statistics?.hardRightAnswers || 0}`}</p>
        </div>
    )
}

export default UserStatistics;