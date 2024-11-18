"use client";















import { motion } from "framer-motion";







import { Bot, Brain, LineChart } from "lucide-react";







import Link from "next/link";















const services = [







  {







    title: "AI Agents Development",







    description: "Build intelligent AI agents tailored to your business needs. From customer service bots to advanced decision-making agents, we create solutions that enhance productivity and efficiency.",







    icon: Bot,







    deliverables: [







      "Fully trained AI agents optimized for specific business functions",







      "Integration with platforms like Slack, CRM systems, or proprietary apps",







      "Custom-built knowledge base integration"







    ],







    timeline: "4-6 weeks",







    price: "Starting at $10,000"







  },







  {







    title: "Fine-Tuning & Training LLMs",







    description: "Customize pre-trained AI models like GPT to understand and cater to your unique business context.",







    icon: Brain,







    deliverables: [







      "Fine-tuned LLM trained on your proprietary data",







      "Domain-specific capabilities for customer queries and analytics",







      "API integration for seamless access across your tools"







    ],







    timeline: "6-8 weeks",







    price: "Starting at $15,000"







  },







  {







    title: "Predictive Analytics & Data Modeling",







    description: "Harness AI to predict trends, manage risks, and gain insights from your data for proactive decision-making.",







    icon: LineChart,







    deliverables: [







      "Predictive AI models built on your historical data",







      "Real-time dashboard for analytics and insights",







      "Training sessions for your team"







    ],







    timeline: "5-7 weeks",







    price: "Starting at $12,000"







  }







];















export function AIDevelopment() {







  return (







    <section id="ai-development" className="py-24 relative overflow-hidden">







      {/* Background Elements */}







      <div className="absolute inset-0 bg-gradient-radial opacity-20" />







      <div className="absolute inset-0 grid-overlay opacity-10" />







      







      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">







        <motion.div







          initial={{ opacity: 0, y: 20 }}







          whileInView={{ opacity: 1, y: 0 }}







          viewport={{ once: true }}







          transition={{ duration: 0.6 }}







          className="text-center mb-16"







        >







          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">







            Transform Ideas into Reality with<br />Custom AI Development







          </h2>







          <p className="text-xl text-gray-400 max-w-3xl mx-auto">







            Leverage cutting-edge technology to develop bespoke AI models that revolutionize your business operations.







          </p>







        </motion.div>















        <div className="grid md:grid-cols-3 gap-8">







          {services.map((service, index) => (







            <motion.div







              key={service.title}







              initial={{ opacity: 0, y: 20 }}







              whileInView={{ opacity: 1, y: 0 }}







              viewport={{ once: true }}







              transition={{ duration: 0.6, delay: index * 0.1 }}







              className="relative group"







            >







              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-200" />







              <div className="relative dark-card p-8 rounded-2xl h-full">







                <service.icon className="w-12 h-12 text-purple-500 mb-6" />







                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>







                <p className="text-gray-400 mb-6">{service.description}</p>







                







                <div className="space-y-4 mb-6">







                  <h4 className="text-lg font-semibold text-white">Deliverables:</h4>







                  <ul className="space-y-2">







                    {service.deliverables.map((item, i) => (







                      <li key={i} className="text-gray-400 flex items-start">







                        <span className="text-purple-500 mr-2">•</span>







                        {item}







                      </li>







                    ))}







                  </ul>







                </div>







                







                <div className="space-y-2">







                  <p className="text-gray-400">







                    <span className="text-white font-semibold">Timeline:</span> {service.timeline}







                  </p>







                  <p className="text-gray-400">







                    <span className="text-white font-semibold">Price:</span> {service.price}







                  </p>







                </div>







              </div>







            </motion.div>







          ))}







        </div>







      </div>







    </section>







  );







} 








































































































































































































































































































































































































































