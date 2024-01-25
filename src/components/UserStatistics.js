import { useEffect, useState } from "react";
import { requestStatistics } from "../services/userService";

function UserStatistics({userId, className}){
    const [statistics, setStatistics] = useState({});

    useEffect(() => {
        requestStatistics(userId).then(data => setStatistics(data));
    }, [userId])

    return(
        <div className={"font-custom-main text-white text-sm overflow-x-hidden overflow-y-scroll"  + className}>
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