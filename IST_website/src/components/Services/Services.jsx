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
import AgricTech from "../../assets/agricTech.jpg";
import Software from "../../assets/software.jpg";
import Data from "../../assets/data.jpg";
import HealthTech from "../../assets/healthTech.jpg";
import EdTech from "../../assets/edTech.jpg";
import SmallBusiness from "../../assets/SME.jpg";

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

  return (
    <div>
      {/* Hero Section - Updated to dark/amber theme */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 md:mt-12">
          <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to address Ghana's
            unique challenges across critical sectors
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Services with Images - Now showing all 6 services with images */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="text-amber-500 mb-4">{service.icon}</div>
                  <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-6">
                    {service.description}
                  </p>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Key Features:
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-xl w-full h-auto object-cover"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg">
              How we deliver exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Discovery</h3>
              <p className="text-gray-600">
                We listen and understand your challenges and goals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Strategy</h3>
              <p className="text-gray-600">
                We design a tailored solution that fits your needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Development</h3>
              <p className="text-gray-600">
                We build your solution with quality and precision
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Support</h3>
              <p className="text-gray-600">
                We provide ongoing support and maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-amber-50 mb-8">
            Let's discuss how our services can help solve your business
            challenges
          </p>
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
