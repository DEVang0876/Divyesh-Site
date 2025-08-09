import React from "react";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaDownload } from 'react-icons/fa6';
import "./Anime.css";

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/DEVang0876' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/devang0876/' },
  { icon: FaInstagram, href: 'https://www.instagram.com/__deviiinee_/' },
  { icon: FaXTwitter, href: 'https://x.com/DevangDhandhuk1' },
];

export default function Anime() {
  return (
    <div className="anime-container">
      <div className="content">
        <div className="bulb-wrapper">
          <div className="spark"></div>
          <div className="bulb"></div>
        </div>
  <h1 className="title">Divyesh Dhandhukiya</h1>
  <p className="subtitle">Electrical Engineer</p>
        <div className="anime-actions">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = '/Resume.pdf';
            }}
            className="anime-cv-btn"
          >
            <FaDownload />
            <span style={{ marginLeft: 8 }}>Download CV</span>
          </motion.button>
          <div className="anime-socials">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#87CEEB' }}
                whileTap={{ scale: 0.95 }}
                className="anime-social-btn"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
