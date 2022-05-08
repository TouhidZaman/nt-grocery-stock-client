import React, { useEffect, useState } from "react";
import questionImage1 from "../../../../images/question-image-1.png";

const Blogs = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch("questions-data.json")
            .then((res) => res.json())
            .then((data) => setQuestions(data));
    }, []);

    return (
        <div className="w-5/6 md:w-2/3 lg:w-2/3 mx-auto py-8">
            <div className="flex flex-col items-center pb-6">
                <h3 className="text-3xl text-stone-400 mb-3">Interview Questions</h3>
                <div className="mb-2 border-b w-[120px] border-stone-300 rounded-lg"></div>
            </div>
            {questions.map((q) => (
                <div
                    key={q.id}
                    className="mb-6 flex flex-col items-center rounded-lg border shadow-md md:flex-row border-gray-700 bg-gray-800"
                >
                    <img
                        className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src={questionImage1}
                        alt="Item-img"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-center md:text-left text-2xl font-bold tracking-tight text-stone-400">
                            {q.question}
                        </h5>
                        <p className="mb-2 text-justify md:text-left  font-normal text-gray-400">{q.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blogs;
