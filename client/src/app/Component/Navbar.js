import React, { useState } from "react";
import { navbar } from "../Data";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const Navbar = () => {
    const [showLettings, setShowLettings] = useState(false);
    const [showSales, setShowSales] = useState(false);
    const [showInvest, setShowInvest] = useState(false);
    const [showBlock, setShowBlock] = useState(false);

    const handleListClick = (title) => {
        setShowLettings((prev) => title === "Lettings" ? !prev : false);
        setShowSales((prev) => title === "Sales" ? !prev : false);
        setShowInvest((prev) => title === "Invest" ? !prev : false);
        setShowBlock((prev) => title === "Block" ? !prev : false);
    };

    return (
        <>
            <nav className="bg-[#fff] flex justify-center items-center w-full">
                {navbar?.map((item, index) => {
                    return (
                        <main className="flex flex-col justify-center items-center w-full" key={index}>
                            <div className="flex justify-between p-[1.5vw] items-center w-full max-w-[80vw]">
                                <Link to={item?.link} className="flex items-center">
                                    <span className="text-blue-950 text-[2.7vw]">{item?.icon}</span>
                                    <span className="ml-2 font-semibold text-blue-950 text-[2.5]">{item?.title}</span>
                                </Link>
                                <section className="flex justify-evenly items-center w-full max-w-[60vw]">
                                    {item?.lists?.map((list, index) => {
                                        return (
                                            <main className="" key={index} onClick={() => handleListClick(list?.title)}>
                                                <div className="flex items-center cursor-pointer">
                                                    <p className="text-blue-950 text-vw uppercase font-semibold">{list?.title}</p>
                                                    <Icon icon="ep:arrow-down-bold" className="text-vw ml-0.5vw" />
                                                </div>
                                            </main>
                                        );
                                    })}
                                    <div className="flex justify-center items-center bg-gray-300 cursor-pointer p-vw">
                                        <p className="text-blue-900 text-vw">Property search</p>
                                        <Icon icon="ic:twotone-search" className="text-[1.4vw] ml-0.5vw " />
                                        </div>
                                        <div className="flex justify-center items-center bg-red-700 cursor-pointer p-vw">
                                        <p className="text-white text-vw">Free valuation</p>
                                        </div>
                                        <Icon icon="ph:list-bold" className="text-2vw" />
                                </section>
                            </div>
                            {showLettings && <div className="bg-gray-300 flex justify-center p-[1.6vw] items-center w-full">
                                {item?.lists?.[0]?.options.map((option, index) => {
                                    return <Link to={option?.link} className="flex ml-4vw items-center" key={index}>
                                        <span className="text-blue-950 text-2vw">{option?.icon}</span>
                                        <span className="ml-2 text-blue-950 hover:text-red-600 text-[1.4vw]">{option?.title}</span>
                                    </Link>
                                })}
                            </div>}
                            {showSales && <div className="bg-gray-300 grid grid-cols-6 justify-center gap-2 p-[1.6vw] items-center w-full">
                                {item?.lists?.[1]?.options.map((option, index) => (
                                    <Link to={option?.link} className="flex justify-center items-center" key={index}>
                                        <span className="text-blue-950 text-2vw">{option?.icon}</span>
                                        <span className="mt-1 text-blue-950 hover:text-red-600 text-[1.4vw]">{option?.title}</span>
                                    </Link>
                                ))}
                            </div>}
                            {showInvest && <div className="bg-gray-300 flex justify-center p-[1.6vw] items-center w-full">
                                {item?.lists?.[2]?.options.map((option, index) => {
                                    return <Link to={option?.link} className="flex ml-4vw items-center" key={index}>
                                        <span className="text-blue-950 text-2vw">{option?.icon}</span>
                                        <span className="ml-2 text-blue-950 hover:text-red-600 text-[1.4vw]">{option?.title}</span>
                                    </Link>
                                })}
                            </div>}
                            {showBlock && <div className="bg-gray-300 flex justify-center p-[1.6vw] items-center w-full">
                                {item?.lists?.[3]?.options.map((option, index) => {
                                    return <Link to={option?.link} className="flex ml-4vw items-center" key={index}>
                                        <span className="text-blue-950 text-2vw">{option?.icon}</span>
                                        <span className="ml-2 text-blue-950 hover:text-red-600 text-[1.4vw]">{option?.title}</span>
                                    </Link>
                                })}
                            </div>}
                        </main>
                    );
                })}
            </nav>
        </>
    );
};

export default Navbar;
