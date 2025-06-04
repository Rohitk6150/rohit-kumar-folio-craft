import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    // WhatsApp message formatting
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    const whatsappNumber = "919056350089"; // Your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Email formatting
    const emailSubject = `Portfolio Contact: ${formData.subject}`;
    const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0A%0AMessage:%0A${formData.message}`;
    const emailUrl = `mailto:rkumar.kumar899@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open both WhatsApp and Email
    window.open(whatsappUrl, '_blank');
    setTimeout(() => {
      window.open(emailUrl, '_blank');
    }, 1000);

    toast({
      title: "Message Sent!",
      description: "Your message has been forwarded to WhatsApp and Email. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "rkumar.kumar899@gmail.com",
      link: "mailto:rkumar.kumar899@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9056350089",
      link: "tel:+919056350089"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Rupnagar, Punjab, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/Rohitk6150"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/rohit-kumar-138201227"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "LeetCode",
      url: "https://leetcode.com/u/rohitk6150"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, or just have a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">
                        {info.label}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 hover:text-white transition-all duration-200 transform hover:scale-105"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                  placeholder="Project Collaboration / Job Opportunity / etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 font-medium transform hover:scale-105"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
