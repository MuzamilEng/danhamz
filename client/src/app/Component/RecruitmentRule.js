import React, { useState } from "react";
import { recruitment } from "../Data";

const RecruitmentRule = () => {
    const [appReview, setAppView] = useState(false);
    const [telChat, setTelChat] = useState(false);
    const [firstInverview, setFirstInversion] = useState(false);
    const [secondInverview, setSecondInversion] = useState(false);
    const [jobbOffer, setJobOffer] = useState(false);

    // const handleListClick = (title) => {
    //     setShowLettings((prev) => title === "Lettings" ? !prev : false);
    //     setShowSales((prev) => title === "Sales" ? !prev : false);
    //     setShowInvest((prev) => title === "Invest" ? !prev : false);
    //     setShowBlock((prev) => title === "Block" ? !prev : false);
    // };
  return (
    <div>
      <main className="flex w-full max-w-[90vw] bg-white p-vw">
        {recruitment?.map((item, index) => (
            <div className="flex items-center bg-white" key={index}>
                <section className="max-w-[30vw] w-full ">
                    <h1 className="text-white font-semibold text-vw p-vw w-full bg-blue-700">{item?.title}</h1>
                </section>
                <section className="max-w-[30vw] ml-2vw w-full"><p>{item?.info}</p></section>
                <section className="max-w-[30vw] ml-2vw w-full">
                    <img src={item?.img} alt={item?.title}  className="w-full h-20vw"/>
                </section>
            </div>
        ))}
      </main>
    </div>
  );
};

export default RecruitmentRule;
