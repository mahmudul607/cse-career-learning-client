import { useEffect, useState } from "react";



const UsageStatistics = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount >= 1000) {
                    clearInterval(interval);
                    return 1000;
                }
                return prevCount + 1;
            });
        }, 4);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="p-4 pt-24 ">
            <div className="text-center ">
                <h1 className="customAfter   relative inline-block text-[#5bbdf2] lg:px-4 text-lx lg:text-3xl">Facility Usage Statistics</h1>
                <p>{`Don't waste your time start your journey`}</p>
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 p-4 pt-8 gap-2 ">
                <div className="items px-2  text-center p-4 rounded-lg shadow-lg shadow-cyan-500/50">
                    <div className="context_count">
                        <h1 className="text-xl">Learner</h1>
                        <p>Happy Learner in here Thousand+</p>
                    </div>
                    <div className="countdown font-mono text-6xl ">

                        {count}
                    </div>
                </div>
                <div className="items px-2 rounded-lg text-center p-4 shadow-lg shadow-blue-500/50 ">
                    <div className="context_count">
                        <h1 className="text-xl">User</h1>
                        <p>Happy Learner in here Thousand+</p>
                    </div>
                    <div className="countdown font-mono text-6xl ">

                        {count}
                    </div>
                </div>
                <div className="items px-2 text-center p-4 rounded-lg shadow-lg shadow-cyan-500/50">
                    <div className="context_count">
                        <h1 className="text-xl">Got Job</h1>
                        <p>Happy Learner in here Thousand+</p>
                    </div>
                    <div className="countdown font-mono text-6xl ">

                        {count}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UsageStatistics;