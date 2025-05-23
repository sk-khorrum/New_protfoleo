import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import { useMediaQuery } from 'react-responsive';
// import LetterPullup from "../@/components/magicui/letter-pullup";

import bgref from '../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png'
// Importing Images
import school5 from '../components/Assest_Used/EducationLogo/Class5_1.png';
import school10 from '../components/Assest_Used/EducationLogo/Class10_1.png';
import school12 from '../components/Assest_Used/EducationLogo/Class12_1.png';
import college from '../components/Assest_Used/EducationLogo/College_1.png';

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

const spline_model = {
  // position: "absolute",  
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "1",
};
const mainContSplinebg = {
  zIndex: '1',
  backgroundImage: `url(${bgref})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'all 0.3s ease',
  position: 'relative', 
};

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const EducationStyle = `
  .Edu {
    font-family: 'Spaceboards', sans-serif;
    font-size: 5rem;
    font-weight: bold;
    background: linear-gradient(90deg, #ff7f00, #ff0000, #ff7f00, #ff0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 
      0 0 3px rgba(255, 127, 0, 0.7), 
      0 0 5px rgba(255, 127, 0, 0.7), 
      0 0 7px rgba(255, 0, 0, 0.7), 
      0 0 9px rgba(255, 0, 0, 0.7), 
      0 0 12px rgba(255, 127, 0, 0.5), 
      0 0 15px rgba(255, 0, 0, 0.5);
    margin-left: 4rem;
    animation: gradient 1.5s infinite, glow 1.2s infinite alternate;
    letter-spacing: 0.1rem;
    background-size: 200% 200%;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes glow {
    0% {
      text-shadow: 
        0 0 0 rgba(255, 127, 0, 0.7), 
        0 0 0 rgba(255, 127, 0, 0.7), 
        0 0 0 rgba(255, 0, 0, 0.7), 
        0 0 0 rgba(255, 0, 0, 0.7), 
        0 0 0 rgba(255, 127, 0, 0.5), 
        0 0 0 rgba(255, 0, 0, 0.5);
    }
    100% {
      text-shadow: 
        0 0 1px rgba(255, 127, 0, 1), 
        0 0 2px rgba(255, 127, 0, 1), 
        0 0 5px rgba(255, 0, 0, 1), 
        0 0 8px rgba(255, 0, 0, 1), 
        0 0 12px rgba(255, 127, 0, 0.7), 
        0 0 15px rgba(255, 0, 0, 0.7);
    }
  }

  .Edu-PC {
    display: none;
  }

  .Edu-Mobile {
    display: block;
  }

  @media (min-width: 768px) {
    .Edu-PC {
      display: block;
    }
    .Edu-Mobile {
      display: none;
    }
  }
`;

const educationData = [
  {
    date: "2022 - Ssc",
    cname: "Vobanipur technical institute",
    title: "Genaral Elictical works",
    iconBg: "#fff",
    icon: college,
    points: [
      "Board: Dhaka",
      "Specialisation: Information & Technology",
      "CGPA : 4:93 (Upto 5)",
      "Member of the College's coding club and tech societies.",
      "Participated in hackathons and coding competitions.",
      "Completed multiple projects with 5 ellence.",
    ],
  },
  {
    date: "April 2019",
    cname: "Chalitadanga BBN ML Highschol",
    title: "High School, 6-8th",
    iconBg: "#fff",
    icon: school12,
    points: [
           "CGPA : 4:78 (Upto 5)",
      "Board: Central Board of Secondary Education, Rajshahi",
      "Specialisation: Non-Medical - PCM",
      "Percentage - 85.4%",
      "Completed various projects with excellence.",
      "Selected for science project and represented school at state level with my friend.",
    ],
  },
  {
    date: "April 2016 ",
    cname: "Chalitadanga Gov Primary School",
    title: "Primary School, 1-5th",
    iconBg: "#fff",
    icon: school10,
    points: [
           "CGPA : 4:87 (Upto 5)",
      "Board: Rajshahi",
      "Percentage - 80%",
      "Science Olympiad Achiever",
      "Taking Part in Many Competitions (Educational/Cultural)",
      "Football & Drawing Awards Winning for School.",
      "Participated in various inter-school competitions.",
    ],
  },
  {
    date: "April 20011",
    cname: "Brac school",
    title: "Play lavel",
    iconBg: "#fff",
    icon: school5,
    points: [
      
    ],
  },
];

const Education = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + EducationStyle;
    document.head.appendChild(styleElement);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <>
    <Helmet>
        <title>My Education | Portfolio - Sk Khorrum</title>
    </Helmet>
    <div style={mainContSplinebg}>
      {!isMobile ? (
        <Spline 
          style={spline_model} 
          scene="https://prod.spline.design/rBcaq3Xa97MnC3a4/scene.splinecode"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ) : (
        <Spline 
          style={spline_model} 
          scene="https://prod.spline.design/tQH4xs3CwWIS7EtM/scene.splinecode"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
      )}
      <div className="mt-40" style={{ zIndex: '20', position: 'relative', pointerEvents: "none", }}>
      <motion.div
        variants={textVariant(0.3)}
        initial="hidden"
        animate="show"
      >
        <div className="Edu Edu-PC" style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '-1.5rem' }}>
          My Education & Qualification
        </div>
        <div className="Edu Edu-Mobile" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          Education
        </div>
      </motion.div>
        <VerticalTimeline>
          {educationData.map((education, index) => (
            <VerticalTimelineElement
              key={`education-${index}`}
              // contentStyle={{ background: "#140b40", color: "#fff", borderRadius: "15px", boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)" }}
              contentStyle={{ background: "rgba(255, 255, 255, 0.09)", color: "#fff", borderRadius: "18px", boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)", backdropFilter: "blur(6px)" }}
              contentArrowStyle={{ borderRight: "10px solid  #232631" }}
              date={education.date}
              dateClassName="date"
              iconStyle={{ background: education.iconBg }}
              icon={<div className="flex items-center justify-center w-full h-full"><img src={education.icon} alt={education.cname} className="w-full h-full object-cover rounded-full" /></div>}
            >
              <h3 className="edu-title">{education.title}</h3>
              <p className="edu-name">{education.cname}</p>
              {/* <p className="edu-name"><LetterPullup words={education.cname} delay={0.05} /></p> */}
              <ul className="mt-5 list-disc ml-5 space-y-3.5">
                {education.points.map((point, idx) => (
                  <li key={`education-point-${idx}`} className="text-[#d4d4d8] sm:text-[15px] text-[12px] pl-1 tracking-wider">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <style jsx global>{`
          .vertical-timeline-element-date {
            font-size: 18px !important;
            color: #fff !important;
            font-weight: bold !important;
          }
          
          .edu-title {
            color: white;
            font-size: 25px;
            font-weight: bold;
          }

          .edu-name {
            color: #e4e4e7 !important;
            font-size: 13px !important;
            font-weight: bold !important;
          }

          @media (max-width: 768px) {
            .Edu {
              font-size: 35px;
              margin-right: 3.7rem;
            }
            .edu-title {
              font-size: 18.5px;
            }
            .vertical-timeline-element-date {
              font-size: 14px !important;
            }
          }
        `}</style>
      </div>
      </div>
    </>
  );
};

export default Education;


// TOdo: Use in Case Of Emergecy
// ! -Purple and cyan Color Gradient with animate

// const EducationStyle = `
//   .Edu {
//     font-family: 'Spaceboards', sans-serif;
//     font-size: 5rem;
//     font-weight: bold;
//     background: linear-gradient(90deg, #0cffc5, #a939ff, #0cffc5, #a939ff);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     text-shadow: 
//       0 0 3px rgba(0, 255, 197, 0.7), 
//       0 0 5px rgba(0, 255, 197, 0.7), 
//       0 0 7px rgba(169, 57, 255, 0.7), 
//       0 0 9px rgba(169, 57, 255, 0.7), 
//       0 0 12px rgba(0, 255, 197, 0.5), 
//       0 0 15px rgba(169, 57, 255, 0.5);
//     margin-left: 4rem;
//     animation: gradient 1.5s infinite, glow 1.2s infinite alternate;
//     letter-spacing: 0.1rem;
//     background-size: 200% 200%;
//   }

//   @keyframes gradient {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }

//   @keyframes glow {
//     0% {
//       text-shadow: 
//         0 0 0 rgba(0, 255, 197, 0.7), 
//         0 0 0 rgba(0, 255, 197, 0.7), 
//         0 0 0 rgba(169, 57, 255, 0.7), 
//         0 0 0 rgba(169, 57, 255, 0.7), 
//         0 0 0 rgba(0, 255, 197, 0.5), 
//         0 0 0 rgba(169, 57, 255, 0.5);
//     }
//     100% {
//       text-shadow: 
//         0 0 1px rgba(0, 255, 197, 1), 
//         0 0 2px rgba(0, 255, 197, 1), 
//         0 0 5px rgba(169, 57, 255, 1), 
//         0 0 8px rgba(169, 57, 255, 1), 
//         0 0 12px rgba(0, 255, 197, 0.7), 
//         0 0 15px rgba(169, 57, 255, 0.7);
//     }
//   }

// .Edu-PC {
//     display: none;
//   }

//   .Edu-Mobile {
//     display: block;
//   }

//   @media (min-width: 768px) {
//     .Edu-PC {
//       display: block;
//     }
//     .Edu-Mobile {
//       display: none;
//     }
//   }
// `;
