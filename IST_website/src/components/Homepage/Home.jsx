import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  ArrowRight,
  Code,
  BarChart3,
  Heart,
  Sprout,
  GraduationCap,
  Store,
  CheckCircle,
  Star,
} from "lucide-react";
import Hero from "../../assets/hero.jpg";
import About from "../../assets/about.jpg";
import WhyChooseUs from "../../assets/choose.jpg";

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

const serviceCard = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const featureItem = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

// ScrollReveal component
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

export function Home() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description:
        "Tailored solutions built to meet your unique business needs",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics & Business Intelligence",
      description: "Turn data into actionable insights for smarter decisions",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "HealthTech Solutions",
      description: "Innovative technology for better healthcare delivery",
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "AgriTech Solutions",
      description: "Digital tools to transform agricultural practices",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "EdTech Solutions",
      description: "Technology solutions to enhance learning experiences",
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Digital Solutions for Small Business",
      description: "Affordable tools to help small businesses grow",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Solving Ghana's Biggest Challenges with Technology
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-8 text-amber-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Innovative software solutions that make a real impact on
                education, healthcare, agriculture, and small businesses across
                Ghana.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors inline-flex items-center justify-center"
                >
                  Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 50, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={Hero}
                alt="Technology Innovation in Africa"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                whileHover={{ transition: { duration: 0.3 } }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal variants={fadeInLeft}>
              <motion.img
                src={About}
                alt="Business Professionals Collaborating"
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
                  About InnovaStark Technologies
                </motion.h2>
                <motion.p
                  className="text-gray-700 text-lg leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  At InnovaStark Technologies, we believe technology should
                  solve real problems that people face every day. That's why we
                  focus on understanding the most pressing challenges in Ghana
                  especially in education, healthcare, agriculture, and small
                  businesses and building practical software solutions to
                  address them.
                </motion.p>
                <motion.p
                  className="text-gray-700 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  We're passionate about creating tools that make life easier,
                  improve access to essential services, and help individuals and
                  organizations grow. By combining innovation with a deep
                  understanding of local needs, InnovaStark is committed to
                  making a meaningful impact and contributing to a better, more
                  connected future for Ghana.
                </motion.p>
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/about"
                    className="text-amber-500 font-semibold inline-flex items-center hover:text-amber-600 transition-colors"
                  >
                    Learn More About Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl mb-4 text-gray-900"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Key Services
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Comprehensive technology solutions designed to address Ghana's
                unique challenges
              </motion.p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={serviceCard}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-amber-100 transition-all duration-300 cursor-pointer"
                whileHover={{ transition: { duration: 0.3 } }}
              >
                <div className="text-amber-500 mb-4">{service.icon}</div>
                <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors inline-flex items-center"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal variants={fadeInLeft}>
              <div>
                <motion.h2
                  className="text-3xl md:text-4xl mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Why Choose InnovaStark?
                </motion.h2>
                <motion.p
                  className="text-xl text-amber-50 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  We don't just build software, we solve real problems. At
                  InnovaStark Technologies, we create smart, practical solutions
                  tailored to Ghana's needs. Simple, effective, and built to
                  make an impact.
                </motion.p>
                <motion.div
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    variants={featureItem}
                    className="flex items-start space-x-3"
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Local Expertise
                      </h3>
                      <p className="text-amber-50">
                        Deep understanding of Ghana's unique challenges and
                        opportunities
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={featureItem}
                    className="flex items-start space-x-3"
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Practical Solutions
                      </h3>
                      <p className="text-amber-50">
                        Technology that works in real-world conditions
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={featureItem}
                    className="flex items-start space-x-3"
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Impact-Driven
                      </h3>
                      <p className="text-amber-50">
                        Focused on creating meaningful change and sustainable
                        growth
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </ScrollReveal>
            <ScrollReveal variants={fadeInRight}>
              <motion.img
                src={WhyChooseUs}
                alt="Software Development Team Working Together"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                whileHover={{ transition: { duration: 0.3 } }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
