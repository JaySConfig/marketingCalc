'use client';

import { useState } from 'react';

const ROICalculator = () => {
    const [adSpend, setAdSpend] = useState('');
    const [revenue, setRevenue] = useState('');
    
    const [results, setResults] = useState({
        profit: 0,
        roi: 0,
        showResults: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const spend = parseFloat(adSpend);
        const rev = parseFloat(revenue);

        const profit = rev - spend;
        const roi = ((profit) / spend) * 100;

        setResults({
            profit: profit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            roi: roi.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            showResults: true
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div className="text-left">
                        <label className="block text-xl font-semibold mb-2">
                            Ad Spend ($)
                        </label>
                        <input
                            type="number"
                            value={adSpend}
                            onChange={(e) => setAdSpend(e.target.value)}
                            className="w-full p-3 border rounded-lg bg-white text-lg"
                            placeholder="Enter your total investment"
                            required
                        />
                    </div>

                    <div className="text-left">
                        <label className="block text-xl font-semibold mb-2">
                            Revenue ($)
                        </label>
                        <input
                            type="number"
                            value={revenue}
                            onChange={(e) => setRevenue(e.target.value)}
                            className="w-full p-3 border rounded-lg bg-white text-lg"
                            placeholder="Enter total revenue generated"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn bg-blue-800 text-white w-full text-lg py-3 mt-6"
                >
                    Calculate ROI
                </button>
            </form>

            {results.showResults && (
                <div className="mt-8 p-6 bg-base-100 rounded-2xl text-left">
                    <h3 className="text-2xl font-bold mb-4">Results</h3>
                    <div className="space-y-4 text-xl">
                        <p><span className="font-semibold">Profit:</span> ${results.profit}</p>
                        <p><span className="font-semibold">ROI:</span> {results.roi}%</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ROICalculator;