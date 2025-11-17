function About() {
    return (
        <div className="">
            <aside className="bg-black text-white p-6 rounded-lg w-full max-w-md md:max-w-lg font-mono shadow-lg items-center mx-auto my-20 border border-gray-700">
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-2 text-red-500">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <p className="text-sm">mysql</p>
                            </div>

                            <div className="mt-4">
                                <p className="text-green-400">mysql&gt; SELECT github FROM developers WHERE name = 'Roberto';</p>
                                <p className="text-white">+------------------------------+</p>
                                <p className="text-white text-center">|github|</p>
                                <p className="text-white">+------------------------------+</p>
                                <p className="text-white">
                                    <a href="https://github.com/robertodfj" className="underline hover:text-teal-400">
                                        https://github.com/robertodfj
                                    </a>
                                </p>
                                <p className="text-white">+------------------------------+</p>
                                <p className="text-green-400">1 row in set (0.01 sec)</p>
                            </div>
                        </aside>

            <div className="w-full min-h-screen flex flex-col items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            
        </div>
        </div>
        


    );
}

export default About