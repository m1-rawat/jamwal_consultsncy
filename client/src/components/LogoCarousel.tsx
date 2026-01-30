import React, { useEffect, useRef, useState } from 'react';

const companies = [
    { name: 'Company 1', logo: 'logo1.png' },
    { name: 'Company 2', logo: 'logo2.png' },
    { name: 'Company 3', logo: 'logo3.png' },
    { name: 'Company 4', logo: 'logo4.png' },
    { name: 'Company 5', logo: 'logo5.png' },
    { name: 'Company 6', logo: 'logo6.png' },
    { name: 'Company 7', logo: 'logo7.png' },
    { name: 'Company 8', logo: 'logo8.png' },
    { name: 'Company 9', logo: 'logo9.png' },
    { name: 'Company 10', logo: 'logo10.png' },
    { name: 'Company 11', logo: 'logo11.png' },
    { name: 'Company 12', logo: 'logo12.png' },
    { name: 'Company 13', logo: 'logo13.png' },
    { name: 'Company 14', logo: 'logo14.png' },
    { name: 'Company 15', logo: 'logo15.png' },
    { name: 'Company 16', logo: 'logo16.png' },
    { name: 'Company 17', logo: 'logo17.png' },
    { name: 'Company 18', logo: 'logo18.png' },
    { name: 'Company 19', logo: 'logo19.png' },
    { name: 'Company 20', logo: 'logo20.png' },
    { name: 'Company 21', logo: 'logo21.png' },
    { name: 'Company 22', logo: 'logo22.png' },
    { name: 'Company 23', logo: 'logo23.png' },
    { name: 'Company 24', logo: 'logo24.png' },
    { name: 'Company 25', logo: 'logo25.png' },
    { name: 'Company 26', logo: 'logo26.png' },
    { name: 'Company 27', logo: 'logo27.png' },
    { name: 'Company 28', logo: 'logo28.png' },
    { name: 'Company 29', logo: 'logo29.png' },
    { name: 'Company 30', logo: 'logo30.png' },
];

const LogoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + companies.length) % companies.length);
    };

    useEffect(() => {
        intervalRef.current = window.setInterval(nextSlide, 3000);
        return () => {
            if (intervalRef.current !== null) {
                window.clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div className="relative">
            <div className="flex overflow-hidden">
                {companies.map((company, index) => (
                    <div key={index} className={index === currentIndex ? 'shrink-0 w-1/6 transition-transform duration-500 block' : 'shrink-0 w-1/6 transition-transform duration-500 hidden'}>
                        <img src={company.logo} alt={company.name} className="w-full h-auto" />
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full">&#10094;</button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full">&#10095;</button>
            <div className="flex justify-center mt-2">
                {companies.map((_, index) => (
                    <button key={index} className={`w-2 h-2 mx-1 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={() => setCurrentIndex(index)}></button>
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;