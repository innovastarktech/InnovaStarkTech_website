import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  CheckCircle,
  Users,
  Target,
  Lightbulb,
  Globe,
  Shield,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";
import AboutUs from "../../assets/about.jpg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const valueItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const teamItem = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Animated Counter Component
const AnimatedCounter = ({ targetValue, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        let numericTarget = parseInt(targetValue);
        if (isNaN(numericTarget)) numericTarget = 0;

        const currentValue = Math.floor(progress * numericTarget);
        setCount(currentValue);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, targetValue, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const ScrollReveal = ({ children, variants = fadeInUp, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Purpose-Driven",
      description:
        "We build technology that solves real problems and creates meaningful impact in Ghana.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We constantly explore new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description:
        "Your success is our success. We work closely with you to achieve your goals.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality & Integrity",
      description:
        "We deliver reliable, secure solutions with honesty and transparency.",
    },
  ];

  const team = [
    {
      name: "Nana Kwame",
      role: "CEO & Founder",
      bio: "15+ years in software development and tech innovation across Africa.",
      image: 1,
    },
    {
      name: "Emplyee2",
      role: "Head of Product",
      bio: "Passionate about creating user-centric solutions that drive business growth.",
      image: 2,
    },
    {
      name: "Iddrisu Sulemana",
      role: "Frontend Lead",
      bio: "Passionate frontend developer focused on building clean and responsive user interfaces.",
      image: 3,
    },
    {
      name: "Emplyee4",
      role: "Data Science Lead",
      bio: "Specializes in AI, machine learning, and turning data into insights.",
      image: 4,
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      icon: <CheckCircle />,
      suffix: "+",
    },
    { number: "30+", label: "Happy Clients", icon: <Users />, suffix: "+" },
    {
      number: "5+",
      label: "Years of Excellence",
      icon: <Clock />,
      suffix: "+",
    },
    { number: "4", label: "Countries Served", icon: <Globe />, suffix: "" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">About Us</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto"
          >
            We're on a mission to transform Ghana's digital landscape through
            innovative, practical technology solutions.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal variants={fadeInLeft}>
              <motion.img
                src={AboutUs}
                alt="Team collaborating"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                whileHover={{ transition: { duration: 0.3 } }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </ScrollReveal>
            <ScrollReveal variants={fadeInRight}>
              <div>
                <motion.h2
                  className="text-3xl md:text-4xl mb-6 text-gray-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Our Story
                </motion.h2>
                <motion.p
                  className="text-gray-700 text-lg leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  InnovaStark Technologies was born from a simple but powerful
                  idea: technology should solve real problems that people face
                  every day. Founded in Accra, Ghana, we saw an opportunity to
                  bridge the gap between cutting-edge technology and the unique
                  challenges facing Ghanaian communities.
                </motion.p>
                <motion.p
                  className="text-gray-700 text-lg leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  From improving healthcare delivery to transforming education,
                  empowering farmers, and helping small businesses thrive, we've
                  made it our mission to create practical, impactful solutions
                  that make a difference.
                </motion.p>
                <motion.p
                  className="text-gray-700 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Today, we're proud to work with businesses and organizations
                  across Ghana, delivering innovative software that drives
                  growth, efficiency, and positive change.
                </motion.p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal variants={fadeInLeft} delay={0.2}>
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:shadow-amber-100 transition-all duration-300"
                whileHover={{ transition: { duration: 0.3 } }}
              >
                <motion.div className="text-amber-500 mb-4">
                  <Target className="w-12 h-12" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower Ghanaian businesses and communities with
                  accessible, innovative technology solutions that solve
                  real-world challenges and drive sustainable growth.
                </p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal variants={fadeInRight} delay={0.2}>
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:shadow-amber-100 transition-all duration-300"
                whileHover={{ transition: { duration: 0.3 } }}
              >
                <motion.div className="text-amber-500 mb-4">
                  <Globe className="w-12 h-12" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become Ghana's most trusted technology partner, recognized
                  for creating impactful solutions that transform key sectors
                  and improve lives across the nation.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
                Our Core Values
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={valueItem}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ transition: { duration: 0.3 } }}
              >
                <motion.div className="text-amber-500 mb-4 flex justify-center">
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section with Animated Counters */}
      <section className="py-16 md:py-24 bg-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  <AnimatedCounter
                    targetValue={stat.number}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </motion.div>
                <div className="text-amber-100 text-lg mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
                Meet Our Leadership
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Passionate experts dedicated to your success
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={teamItem}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:shadow-amber-100 transition-all duration-300"
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold mb-1 text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-amber-500 font-medium mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {member.role}
                  </motion.p>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {member.bio}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how InnovaStark Technologies can help solve your
              business challenges with innovative technology solutions.
            </p>
          </ScrollReveal>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors inline-flex items-center justify-center"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-amber-500 hover:text-amber-500 transition-colors inline-flex items-center justify-center"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
