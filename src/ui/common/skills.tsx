import { SKILLS } from '@/constants';
import React from 'react';
import LinearBar from './linear-bar';

export default function Skills() {
  return (
    <div className="flex flex-col space-y-1 pt-6 pb-3">
      <div className="flex flex-col gap-y-4">
        <span className="text-snow text-xs font-bold bg-gradient-to-bl">
          Expertise & Competencies
        </span>
        <div className="flex flex-col space-y-4">
          {SKILLS.map((skill, index) => {
            return (
              <LinearBar
                key={index}
                title={skill.title}
                percent={skill.level}
                bgColor="bg-green"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
