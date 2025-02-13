// 'use client';

// import Link from 'next/link';

// const Footer = () => {
//     return (
//         <footer className="bg-base-100 mt-auto">
//             <div className="max-w-6xl mx-auto p-8">
//                 {/* Navigation Links */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-black">
//                     {/* Quick Links */}
//                     <div>
//                         <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
//                         <ul className="space-y-2">
//                             <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
//                             <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
//                         </ul>
//                     </div>

//                     {/* Calculators */}
//                     <div>
//                         <h3 className="font-semibold text-lg mb-4">Calculators</h3>
//                         <ul className="space-y-2">
//                             <li><Link href="/calculators/roi-calculator" className="hover:text-blue-600">ROI Calculator</Link></li>
//                             <li><Link href="/calculators/roas-calculator" className="hover:text-blue-600">ROAS Calculator</Link></li>
//                             <li><Link href="/calculators/ltv-calculator" className="hover:text-blue-600">LTV Calculator</Link></li>
//                             <li><Link href="/calculators/cac-calculator" className="hover:text-blue-600">CAC Calculator</Link></li>

//                         </ul>
//                     </div>

//                     {/* More Calculators */}
//                     <div>
//                         <h3 className="font-semibold text-lg mb-4">More Tools</h3>
//                         <ul className="space-y-2">
//                             <li><Link href="/calculators/social-media-engagement-calculator" className="hover:text-blue-600">Social Media Calculator</Link></li>
//                             <li><Link href="/calculators/ppc-calculator" className="hover:text-blue-600">PPC Calculator</Link></li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Copyright and Disclaimer */}
//                 <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
//                     <p className="mb-2">
//                         These calculators are for informational purposes only. Please consult with marketing professionals for specific advice.
//                     </p>
//                     <p>
//                         © 2024 Marketing Calculators. All rights reserved.
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

'use client';

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-base-100 mt-auto">
            <div className="max-w-6xl mx-auto p-8">
                {/* Navigation Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-black">
                    {/* Property Tools */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Property Tools</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-600">Buy vs Rent Calculator</Link></li>
                            <li><Link href="/how-it-works" className="hover:text-blue-600">How It Works</Link></li>
                        </ul>
                    </div>

                    {/* Marketing Calculators */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Marketing Calculators</h3>
                        <ul className="space-y-2">
                            <li><a href="https://marketingcalculators.net/calculators/roi-calculator" className="hover:text-blue-600">ROI Calculator</a></li>
                            <li><a href="https://marketingcalculators.net/calculators/roas-calculator" className="hover:text-blue-600">ROAS Calculator</a></li>
                            <li><a href="https://marketingcalculators.net/calculators/ltv-calculator" className="hover:text-blue-600">LTV Calculator</a></li>
                            <li><a href="https://marketingcalculators.net/calculators/cac-calculator" className="hover:text-blue-600">CAC Calculator</a></li>
                            <li><a href="https://marketingcalculators.net/calculators/social-media-engagement-calculator" className="hover:text-blue-600">Social Media Calculator</a></li>
                            <li><a href="https://marketingcalculators.net/calculators/ppc-calculator" className="hover:text-blue-600">PPC Calculator</a></li>
                        </ul>
                    </div>

                    {/* Investment Tools */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Investment Tools</h3>
                        <ul className="space-y-2">
                            <li><a href="https://dividendreinvestmentcalculator.net" className="hover:text-blue-600">Dividend Reinvestment Calculator</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright and Disclaimer */}
                <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
                    <p className="mb-2">
                        This calculator is for informational purposes only. Please consult with financial and property professionals for specific advice.
                    </p>
                    <p>
                        © 2024 UK Buy vs Rent Calculator. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;