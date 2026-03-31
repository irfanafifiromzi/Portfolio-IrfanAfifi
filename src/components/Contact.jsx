import { CONTACT } from "../constants";
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("S4e2HvDA87enV3_MA");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage("Please fill in all fields");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setStatusMessage("");

    try {
      // Replace with your EmailJS service ID and template ID
      const response = await emailjs.send(
        "service_uw1cwbl",
        "template_497vhqn",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: CONTACT.email,
        }
      );

      if (response.status === 200) {
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        setMessageType("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("Failed to send message. Please try again or contact me directly.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="border-b border-transparent pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 lg:px-0"
      >
        {/* Main Contact Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>

            {/* Contact Items */}
            <motion.a
              href={`mailto:${CONTACT.email}`}
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="mt-1 p-3 bg-purple-600 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail className="text-white" size={18} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Email</p>
                <p className="text-purple-600 font-medium text-xs sm:text-sm break-all">{CONTACT.email}</p>
              </div>
            </motion.a>

            <motion.a
              href={`tel:${CONTACT.phoneNo}`}
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="mt-1 p-3 bg-purple-600 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <Phone className="text-white" size={18} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Phone</p>
                <p className="text-purple-600 font-medium text-xs sm:text-sm">{CONTACT.phoneNo}</p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="mt-1 p-3 bg-purple-600 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <MapPin className="text-white" size={18} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">Location</p>
                <p className="text-purple-600 font-medium text-xs sm:text-sm leading-tight">{CONTACT.address}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors placeholder-gray-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors placeholder-gray-500 text-sm sm:text-base"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border-2 border-purple-200 focus:border-purple-600 focus:outline-none transition-colors placeholder-gray-500 resize-none text-sm sm:text-base"
              ></textarea>
            </div>

            {/* Status Message */}
            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg flex items-center gap-2 text-sm sm:text-base ${
                  messageType === "success"
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}
              >
                {messageType === "success" ? (
                  <CheckCircle size={18} />
                ) : (
                  <AlertCircle size={18} />
                )}
                {statusMessage}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className={`w-full ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-lg"
              } text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-shadow duration-300`}
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
