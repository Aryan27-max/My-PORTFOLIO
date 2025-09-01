import { counterItems } from "../constants/index.js";

const AnimatedCounter = () => {
    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {counterItems.map((item) => (
                    <div
                        key={item.label}
                        className="bg-zinc-900 rounded-lg p-10 flex flex-col items-center justify-center"
                    >
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            0 {item.suffix}
                        </div>
                        <div className="text-white/50 text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;
