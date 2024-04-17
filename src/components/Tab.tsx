"use client";

import React, { useState } from 'react';
// Import your CSS file for styling

interface Course {
  id: number;
  name: string;
  description: string;
  instructor: string;
  duration: string;
  price: number;
  rating: number;
  startDate: string;
  endDate: string;
  category: string[];
  image: string;
  link: string;
}

const TabFilter: React.FC<{ courses: Course[] }> = ({ courses }) => {
    const [activeTab, setActiveTab] = useState<string>('All'); // Default to 'All'
  
    const filteredCourses = courses.filter((course) => {
      if (activeTab === 'Live') {
        return new Date(course.startDate) <= new Date() && new Date(course.endDate) >= new Date();
      } else if (activeTab === 'Upcoming') {
        return new Date(course.startDate) > new Date();
      } else if (activeTab === 'Recorded') {
        return new Date(course.endDate) < new Date();
      }
      return true; // Show all courses for 'All' tab
    });
   
    return (
      <div className="tab-filter">
        <div className="tabs">
          <button onClick={() => setActiveTab('Live')}>Live</button>
          <button onClick={() => setActiveTab('Upcoming')}>Upcoming</button>
          <button onClick={() => setActiveTab('Recorded')}>Recorded</button>
          <button onClick={() => setActiveTab('All')}>All</button>
        </div>
        <div className="course-list">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course">
              {/* Display course details here */}
              <h3>{course.name}</h3>
              {/* Other course details */}
            </div>
          ))}
        </div>
      </div>
    );
  };
export default TabFilter;
