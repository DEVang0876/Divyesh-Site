import { useState, useEffect } from 'react';
import Anime from './Anime';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter, FaInstagram, FaDiscord, FaDownload } from 'react-icons/fa6';
import dhairya from '../assets/dhairya-portrait.png';
//import FeedbackModal from './FeedbackModal';
//import FeedbackList from './FeedbackList';

const Hero = () => {
  //const [showFeedback, setShowFeedback] = useState(false);

  // useEffect(() => {
  //   const hasSubmittedFeedback = localStorage.getItem('hasSubmittedFeedback');
  //   if (!hasSubmittedFeedback) {
  //     const timer = setTimeout(() => {
  //       setShowFeedback(true);
  //     }, 10000); // Show after 10 seconds
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/DEVang0876' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/devang0876/' },
    { icon: FaInstagram, href: 'https://www.instagram.com/__deviiinee_/' },
    { icon: FaXTwitter, href: 'https://x.com/DevangDhandhuk1' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <Anime />
  {/* Removed photo/profile and left column. Animation and social/download now in Anime.jsx. */}
    </>
  );
};

export default Hero; 