import React, { createContext, useContext, ReactNode } from 'react';

type Course = {
  id: string;
  title: string;
};

type CoursesContextType = {
  courses: Course[];
  getCourseById: (id: string) => Course | undefined;
};

const CoursesContext = createContext<CoursesContextType | undefined>(undefined);

const courses: Course[] = [
  { id: 'combined-level-2-3-personal-training-diploma', title: 'Combined Level 2 & 3 Personal Training Diploma' },
  { id: 'level-2-gym-instructor-certificate', title: 'Level 2 Gym Instructor Certificate' },
  { id: 'level-3-personal-training-qualification', title: 'Level 3 Personal Training Qualification' },
  { id: 'level-2-award-in-mental-health-awareness', title: 'Level 2 Award in Mental Health Awareness' },
  { id: 'level-3-award-in-supporting-pre-post-natal-clients', title: 'Level 3 Award in Supporting Pre & Post Natal Clients with Exercise and Nutrition' },
  { id: 'level-3-award-in-emergency-first-aid-at-work', title: 'Level 3 Award in Emergency First Aid at Work' },
];

export const CoursesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getCourseById = (id: string): Course | undefined => courses.find(course => course.id === id);

  return (
    <CoursesContext.Provider value={{ courses, getCourseById }}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = (): CoursesContextType => {
  const context = useContext(CoursesContext);
  if (!context) {
    throw new Error('useCourses must be used within a CoursesProvider');
  }
  return context;
};