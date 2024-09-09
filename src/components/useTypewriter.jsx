import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50) => {
    const [displayedText, setDisplayedText] = useState('');
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(prev => prev + text[index]);
            index += 1;
            if (index > text.length - 1) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);
    return displayedText;
};

export default useTypewriter;
