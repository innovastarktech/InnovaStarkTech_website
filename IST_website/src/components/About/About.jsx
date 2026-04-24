import React from "react";
import { Link } from "react-router-dom";
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
      name: "Michael Appiah",
      role: "CEO & Founder",
      bio: "15+ years in software development and tech innovation across Africa.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Adwoa Mensah",
      role: "Head of Product",
      bio: "Passionate about creating user-centric solutions that drive business growth.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Iddrisu Sulemana",
      role: "Frontend Lead",
      bio: "Passionate frontend developer focused on building clean and responsive user interfaces.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Esi Boateng",
      role: "Data Science Lead",
      bio: "Specializes in AI, machine learning, and turning data into insights.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <CheckCircle /> },
    { number: "30+", label: "Happy Clients", icon: <Users /> },
    { number: "5+", label: "Years of Excellence", icon: <Clock /> },
    { number: "4", label: "Countries Served", icon: <Globe /> },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">About Us</h1>
          <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto">
            We're on a mission to transform Ghana's digital landscape through
            innovative, practical technology solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={AboutUs}
                alt="Team collaborating"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                InnovaStark Technologies was born from a simple but powerful
                idea: technology should solve real problems that people face
                every day. Founded in Accra, Ghana, we saw an opportunity to
                bridge the gap between cutting-edge technology and the unique
                challenges facing Ghanaian communities.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                From improving healthcare delivery to transforming education,
                empowering farmers, and helping small businesses thrive, we've
                made it our mission to create practical, impactful solutions
                that make a difference.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we're proud to work with businesses and organizations
                across Ghana, delivering innovative software that drives growth,
                efficiency, and positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:shadow-amber-100 transition-all duration-300">
              <div className="text-amber-500 mb-4">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower Ghanaian businesses and communities with accessible,
                innovative technology solutions that solve real-world challenges
                and drive sustainable growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:shadow-amber-100 transition-all duration-300">
              <div className="text-amber-500 mb-4">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become Ghana's most trusted technology partner, recognized
                for creating impactful solutions that transform key sectors and
                improve lives across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="text-amber-500 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">
                  {stat.number}
                </div>
                <div className="text-amber-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate experts dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:shadow-amber-100 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-amber-500 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how InnovaStark Technologies can help solve your
            business challenges with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors inline-flex items-center justify-center"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-amber-500 hover:text-amber-500 transition-colors inline-flex items-center justify-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
