import React from 'react';
import { Link } from 'react-router-dom';
import { useCourses } from '../CustomComponents/ServicesContext';

interface ServiceDropdownProps {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  handleLinkClick: () => void;
}

const ServiceDropdown: React.FC<ServiceDropdownProps> = ({ isDropdownOpen, toggleDropdown, closeDropdown, handleLinkClick }) => {
  const { courses } = useCourses();

  return (
    <div className="relative">
      <div
        className={`${
          isDropdownOpen ? 'block' : 'hidden'
        } absolute left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:right-0 lg:top-full w-full lg:w-auto bg-white dark:bg-gray-800 text-base z-10 lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-gray-600 rounded shadow-lg`}
      >
        <ul className="py-1 lg:flex lg:space-x-0 text-center w-full">
          {courses.map((course) => (
            <li key={course.id} className="w-full lg:border-r lg:last:border-r-0 lg:border-gray-300 dark:lg:border-gray-600">
              <Link
                to={`/services/${course.id}`}
                onClick={() => {
                  handleLinkClick(); // Ensure mobile menu closes
                  closeDropdown();
                }}
                className="text-gray-700 dark:text-white block w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {course.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDropdown;