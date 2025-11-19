'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChartBarIcon, LightBulbIcon, CurrencyDollarIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const solutionRef = useRef(null);
  const marketRef = useRef(null);
  const pricingRef = useRef(null);
  const missionRef = useRef(null);

  const isSolutionInView = useInView(solutionRef, { once: true, margin: "-100px" });
  const isMarketInView = useInView(marketRef, { once: true, margin: "-100px" });
  const isPricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-dark-darker text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-primary">Revolutionary</span> Business Model
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your industry with our innovative approach to business solutions
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-darker via-dark to-dark-darker opacity-50"></div>
      </section>

      {/* Solution Section */}
      <section ref={solutionRef} className="py-20 bg-dark">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isSolutionInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <div className="flex items-center mb-12">
            <LightBulbIcon className="w-12 h-12 text-primary mr-4" />
            <h2 className="text-4xl font-bold">Our Solution</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Innovation at its Core</h3>
              <p className="text-gray-300">Our platform leverages cutting-edge technology to deliver unprecedented value to your business operations.</p>
            </div>
            <div className="bg-dark-lighter p-6 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>AI-Powered Analytics</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Real-time Optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Seamless Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Market Gap Section */}
      <section ref={marketRef} className="py-20 bg-dark-darker">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isMarketInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <div className="flex items-center mb-12">
            <ChartBarIcon className="w-12 h-12 text-primary mr-4" />
            <h2 className="text-4xl font-bold">Market Gap</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {['Research', 'Analysis', 'Solution'].map((phase, index) => (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 20 }}
                animate={isMarketInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-dark-lighter p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{phase}</h3>
                <p className="text-gray-300">Identifying and addressing critical market gaps through innovative solutions.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Benefits Section */}
      <section ref={pricingRef} className="py-20 bg-dark">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isPricingInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <div className="flex items-center mb-12">
            <CurrencyDollarIcon className="w-12 h-12 text-primary mr-4" />
            <h2 className="text-4xl font-bold">Pricing Benefits</h2>
          </div>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-primary"></div>
            <div className="space-y-12">
              {[
                { year: '2024', benefit: 'Early Adoption Savings' },
                { year: '2025', benefit: 'Scaling Benefits' },
                { year: '2026', benefit: 'Enterprise Advantages' }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isPricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex ${index % 2 === 0 ? 'justify-end' : ''}`}
                >
                  <div className="bg-dark-lighter p-6 rounded-lg w-full md:w-5/12">
                    <h3 className="text-xl font-semibold text-primary">{item.year}</h3>
                    <p className="text-gray-300">{item.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 bg-dark-darker">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isMissionInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <div className="flex items-center justify-center mb-12">
            <RocketLaunchIcon className="w-12 h-12 text-primary mr-4" />
            <h2 className="text-4xl font-bold">Our Mission</h2>
          </div>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMissionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            To revolutionize business operations through innovative technology solutions that drive growth and efficiency.
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
} 