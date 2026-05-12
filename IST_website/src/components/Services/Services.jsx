import { useEffect, useRef } from "react";
import {
  Code,
  BarChart3,
  Heart,
  Sprout,
  GraduationCap,
  Store,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import AgricTech from "../../assets/agricTech.jpg";
import Software from "../../assets/software.jpg";
import Data from "../../assets/data.jpg";
import HealthTech from "../../assets/healthTech.jpg";
import EdTech from "../../assets/edTech.jpg";
import SmallBusiness from "../../assets/SME.jpg";

//Framer Motion Variants for Animations
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

const featureItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
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

export function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom Software Development",
      description:
        "We design and develop websites and mobile applications tailored to your needs. From business websites to fully functional web and mobile apps, we create platforms that are user-friendly, scalable, and secure.",
      features: [
        "Web Application Development",
        "Mobile App Development (iOS & Android)",
        "Progressive Web Apps (PWAs)",
        "API Development & Integration",
        "E-commerce Solutions",
        "Custom CRM & ERP Systems",
      ],
      image: Software,
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data Science, Data Analytics & AI",
      description:
        "We leverage data and artificial intelligence to help organizations make smarter, data-driven decisions. From analyzing large datasets to building predictive models, we turn information into actionable insights.",
      features: [
        "Business Intelligence & Reporting",
        "Data Visualization & Dashboards",
        "Predictive Analytics & Forecasting",
        "Machine Learning Solutions",
        "Big Data Processing",
        "AI-Powered Automation",
      ],
      image: Data,
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "HealthTech Solutions",
      description:
        "Innovative technology solutions designed to improve healthcare delivery, patient management, and medical operations across Ghana.",
      features: [
        "Electronic Health Records (EHR) Systems",
        "Patient Management Systems",
        "Telemedicine Platforms",
        "Hospital Information Systems",
        "Medical Billing & Insurance",
        "Health Analytics & Reporting",
      ],
      image: HealthTech,
    },
    {
      icon: <Sprout className="w-12 h-12" />,
      title: "AgriTech Solutions",
      description:
        "Digital tools and platforms that transform agricultural practices, helping farmers and agribusinesses increase productivity and profitability.",
      features: [
        "Farm Management Systems",
        "Crop Monitoring & Analytics",
        "Supply Chain Management",
        "Weather & Climate Data Integration",
        "Market Price Information Systems",
        "Agricultural E-commerce Platforms",
      ],
      image: AgricTech,
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "EdTech Solutions",
      description:
        "Technology solutions that enhance learning experiences, improve educational management, and make quality education more accessible.",
      features: [
        "Learning Management Systems (LMS)",
        "Online Course Platforms",
        "Student Information Systems",
        "Educational Content Management",
        "Virtual Classroom Solutions",
        "Assessment & Examination Systems",
      ],
      image: EdTech,
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: "Digital Solutions for Small Businesses",
      description:
        "Affordable and practical digital tools designed to help small businesses grow, streamline operations, and reach more customers.",
      features: [
        "Business Website Development",
        "Point of Sale (POS) Systems",
        "Inventory Management",
        "Digital Marketing Solutions",
        "Customer Relationship Management",
        "Online Booking & Scheduling",
      ],
      image: SmallBusiness,
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description: "We listen and understand your challenges and goals",
    },
    {
      number: 2,
      title: "Strategy",
      description: "We design a tailored solution that fits your needs",
    },
    {
      number: 3,
      title: "Development",
      description: "We build your solution with quality and precision",
    },
    {
      number: 4,
      title: "Support",
      description: "We provide ongoing support and maintenance",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 md:mt-12">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-amber-100 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed to address Ghana's
            unique challenges across critical sectors
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <ScrollReveal
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              >
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="text-amber-500 mb-4">{service.icon}</div>
                    <motion.h2
                      className="text-3xl md:text-4xl mb-4 text-gray-900"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {service.title}
                    </motion.h2>
                    <motion.p
                      className="text-gray-700 text-lg mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                    <motion.h3
                      className="font-semibold text-gray-900 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Key Features:
                    </motion.h3>
                    <motion.ul
                      className="space-y-2"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          variants={featureItem}
                          className="flex items-start"
                        >
                          <CheckCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    {service.image && (
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="rounded-lg shadow-xl w-full h-auto object-cover"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.3 },
                        }}
                      />
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
                Our Process
              </h2>
              <p className="text-gray-600 text-lg">
                How we deliver exceptional results for our clients
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  transition={{ duration: 0.5 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-xl text-amber-50 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's discuss how our services can help solve your business
            challenges and drive growth. Contact us today to schedule a
            consultation!
          </motion.p>
          <Link
            to="/contact"
            className="bg-white text-amber-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
