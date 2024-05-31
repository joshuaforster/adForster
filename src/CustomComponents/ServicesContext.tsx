import React, { createContext, useContext, ReactNode } from 'react';
import { FaWindows, FaBorderStyle, FaHome, FaTint, FaSolarPanel, FaCaravan, FaBuilding, FaThLarge, FaTractor } from 'react-icons/fa';

type Service = {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: React.ElementType;
  image: string;
  details: string;
  moreInfoLink: string;
};

const services: { [key: string]: Service } = {
  windows: {
    id: 'windows',
    title: 'Window Cleaning',
    description: 'Expert cleaning for clearer, streak-free windows, enhancing the view and brightness of your space.',
    path: '/services/windows',
    icon: FaWindows,
    image: '/images/windowclean.jpg',
    details: `Our window cleaning services include both exterior and interior window cleaning.<br /><br />
      We use pure water technology to leave your windows sparkling clean without any streaks.<br /><br />
      Our team ensures thorough cleaning to enhance the appearance of your windows. Regular window cleaning can improve the lifespan of your windows and prevent damage from dirt and grime build-up.<br /><br />
      We offer flexible scheduling to suit your needs and guarantee satisfaction with every service.`,
    moreInfoLink: '/services/windows'
  },
  'frames-sills': {
    id: 'frames-sills',
    title: 'Frames and Sills',
    description: 'Detailed cleaning to protect and maintain the condition of your window frames and sills.',
    path: '/services/frames-sills',
    icon: FaBorderStyle,
    image: '/images/beforeafter/sill1.JPG',
    details: `We provide detailed cleaning of window frames and sills to remove dirt, grime, and mildew.<br /><br />
      Our services help in maintaining the longevity and appearance of your window frames. Clean frames and sills can significantly enhance the overall look of your windows and home.<br /><br />
      Regular cleaning ensures your windows look great and last longer. We use specialized tools and techniques to ensure a thorough clean without damaging the surfaces.<br /><br />
      Trust us to keep your frames and sills in pristine condition.`,
    moreInfoLink: '/services/frames-sills'
  },
  conservatories: {
    id: 'conservatories',
    title: 'Conservatories',
    description: 'Comprehensive cleaning solutions to keep your conservatory sparkling clean and enjoyable all year round.',
    path: '/services/conservatories',
    icon: FaHome,
    image: '/images/conservatories.jpg',
    details: `Our conservatory cleaning services include roof, frame, and glass cleaning.<br /><br />
      We ensure your conservatory remains bright and welcoming all year round. A clean conservatory can improve natural light and create a more pleasant living space.<br /><br />
      Our thorough cleaning approach helps in maintaining the beauty and functionality of your conservatory. We tackle dirt, algae, and moss build-up to ensure a spotless finish.<br /><br />
      Enjoy your conservatory to the fullest with our professional cleaning services.`,
    moreInfoLink: '/services/conservatories'
  },
  'gutters-fascias': {
    id: 'gutters-fascias',
    title: 'Gutters and Fascias',
    description: 'Effective cleaning to ensure your gutters and fascias are debris-free and functioning properly.',
    path: '/services/gutters-fascias',
    icon: FaTint,
    image: '/images/gutters.jpg',
    details: `We clean gutters and fascias to prevent blockages and maintain the integrity of your property.<br /><br />
      Regular cleaning can prevent water damage and extend the lifespan of your gutters. Blocked gutters can lead to serious issues like roof damage and leaks.<br /><br />
      Our services ensure efficient water flow and protect your property from potential damage. We use high-quality tools to remove debris and dirt, ensuring your gutters and fascias are functioning properly.<br /><br />
      Keep your home safe and secure with our expert gutter and fascia cleaning services.`,
    moreInfoLink: '/services/gutters-fascias'
  },
  'solar-panels': {
    id: 'solar-panels',
    title: 'Solar Panels',
    description: 'Specialized cleaning to maintain the efficiency and performance of your solar panels.',
    path: '/services/solar-panels',
    icon: FaSolarPanel,
    image: '/images/cleanhouse.jpeg',
    details: `Our solar panel cleaning services ensure that your panels are free of dirt and debris.<br /><br />
      Clean panels maximize their efficiency and energy production. Dust and grime can significantly reduce the performance of your solar panels.<br /><br />
      Regular cleaning helps in maintaining the performance and longevity of your solar panels. We use gentle, yet effective methods to clean your panels without causing any damage.<br /><br />
      Trust us to keep your solar panels operating at peak efficiency.`,
    moreInfoLink: '/services/solar-panels'
  },
  'caravan-cleaning': {
    id: 'caravan-cleaning',
    title: 'Caravan Cleaning',
    description: 'Thorough cleaning services to keep your caravan in pristine condition, ready for your next adventure.',
    path: '/services/caravan-cleaning',
    icon: FaCaravan,
    image: '/images/caravan.jpg',
    details: `We offer comprehensive cleaning services for caravans, including exterior washing and interior cleaning.<br /><br />
      Our services ensure your caravan remains in top condition for your travels. Clean caravans not only look better but also provide a healthier environment for your trips.<br /><br />
      Regular cleaning helps in maintaining the appearance and value of your caravan. We use specialized products and techniques to tackle all areas of your caravan, from the bodywork to the interior surfaces.<br /><br />
      Get ready for your next adventure with our professional caravan cleaning services.`,
    moreInfoLink: '/services/caravan-cleaning'
  },
  'domestic-commercial': {
    id: 'domestic-commercial',
    title: 'Domestic and Commercial',
    description: 'Tailored window cleaning services to meet the specific needs of both homes and businesses, ensuring a clear and welcoming environment.',
    path: '/services/domestic-commercial',
    icon: FaBuilding,
    image: '/images/about.jpg',
    details: `Our window cleaning services cater to both domestic and commercial properties.<br /><br />
      We ensure a clean and healthy environment for your home or business. Clean windows can improve productivity, health, and overall well-being.<br /><br />
      Our team provides customised window cleaning solutions to meet your specific needs.<br /><br />
      Trust us to deliver exceptional results and keep your windows spotless.`,
    moreInfoLink: '/services/domestic-commercial'
  },
  'patio-regular-cleans': {
    id: 'patio-regular-cleans',
    title: 'Patios',
    description: 'Professional cleaning to revive your patio, making it a perfect spot for relaxation or entertainment.',
    path: '/services/patio-regular-cleans',
    icon: FaThLarge,
    image: '/images/patio.jpeg',
    details: `Our patio cleaning services remove dirt, algae, and stains, restoring your patio to its original condition.<br /><br />
      We also offer regular maintenance to keep it looking great throughout the year. Clean patios can enhance the appearance and usability of your outdoor space.<br /><br />
      Our services enhance the appearance and safety of your patio area. We use high-pressure washing and other techniques to ensure a thorough clean.<br /><br />
      Enjoy your outdoor spaces with our professional patio cleaning services.`,
    moreInfoLink: '/services/patio-regular-cleans'
  },
  'mini-digger': {
    id: 'mini-digger',
    title: 'Mini Digger Hire',
    description: 'Reliable mini digger hire for your construction and landscaping needs, available with skilled operators.',
    path: '/services/mini-digger',
    icon: FaTractor,
    image: '/images/digger.HEIC',
    details: `We offer mini digger hire and cleaning services for construction and landscaping projects.<br /><br />
      Our services ensure your equipment is clean and ready for use, improving efficiency and safety. Clean equipment operates better and lasts longer.<br /><br />
      Regular maintenance and cleaning extend the lifespan of your mini digger. We provide thorough cleaning to remove dirt, grease, and debris from your machinery.<br /><br />
      Trust us to keep your mini digger in excellent condition and ready for your next project.`,
    moreInfoLink: '/services/mini-digger'
  },
  'roof-cleaning': {
    id: 'roof-cleaning',
    title: 'Roof Cleaning',
    description: 'Professional roof cleaning services to remove moss, algae, and debris, ensuring a clean and well-maintained roof.',
    path: '/services/roof-cleaning',
    icon: FaHome,
    image: '/images/roof.jpg',  // Placeholder image path
    details: `Our roof cleaning services help maintain the integrity and appearance of your roof.<br /><br />
      We remove moss, algae, and debris to prevent damage and extend the lifespan of your roof. Clean roofs can improve the overall look of your property.<br /><br />
      Our team uses safe and effective methods to clean your roof without causing damage. Regular roof cleaning can prevent costly repairs and maintain property value.<br /><br />
      Trust us to keep your roof in excellent condition with our professional cleaning services.`,
    moreInfoLink: '/services/roof-cleaning'
  }
};


type ServicesContextType = {
  services: { [key: string]: Service };
  getServiceById: (id: string) => Service | undefined;
};

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

export const ServicesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getServiceById = (id: string): Service | undefined => services[id];

  return (
    <ServicesContext.Provider value={{ services, getServiceById }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = (): ServicesContextType => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('useServices must be used within a ServicesProvider');
  }
  return context;
};
