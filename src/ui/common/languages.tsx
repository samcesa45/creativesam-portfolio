import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';

export default function Languages() {
  const [frenchCount, setFrenchCount] = useState(0);
  const [englishCount, setEnglishCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (frenchCount < 98) {
        setFrenchCount((prevCount) => prevCount + 1);
      }
      if (englishCount < 88) {
        setEnglishCount((prevCount) => prevCount + 1);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [frenchCount, englishCount]);
  return (
    <div className="flex flex-col space-y-1">
      <span className="text-snow text-xs font-bold">Languages</span>
      <div className="flex items-center justify-center space-x-6">
        <div className="flex flex-col items-center text-white justify-center gap-y-2">
          <Progress
            className="text-white!"
            strokeColor="#1fdf64"
            type="circle"
            percent={frenchCount}
            size={75}
          />
          <span className="text-xs font-bold text-snow">Advanced</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2">
          <Progress
            strokeColor="#1fdf64"
            type="circle"
            percent={englishCount}
            size={75}
          />
          <span className="text-xs font-bold text-snow">Fluent</span>
        </div>
      </div>
    </div>
  );
}
