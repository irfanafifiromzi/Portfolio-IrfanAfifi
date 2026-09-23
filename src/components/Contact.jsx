import { CONTACT } from "../constants";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

// Mirrors the selectable chips on tubik's own enquiry form.
const TOPICS = [
  "Backend / APIs",
  "Full-stack build",
  "Mobile app",
  "IoT integration",
  "Cloud & deployment",
  "Something else",
];

const FIELDS = [
  { name: "name", label: "Your name", type: "text", placeholder: "Jane Doe" },
  { name: "email", label: "Email address", type: "email", placeholder: "jane@company.com" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    emailjs.init("S4e2HvDA87enV3_MA");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleTopic = (topic) => {
    setTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the address is still selectable/clickable.
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setStatusMessage("Please add your name and email so I can reply.");
      setMessageType("error");
      return;
    }
    if (!formData.message.trim() && topics.length === 0) {
      setStatusMessage("Pick what you need, or tell me about the project.");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setStatusMessage("");

    // Fold the selected chips into the message body so the existing EmailJS
    // template keeps working unchanged.
    const body = topics.length
      ? `Interested in: ${topics.join(", ")}\n\n${formData.message}`.trim()
      : formData.message;

    try {
      const response = await emailjs.send("service_uw1cwbl", "template_497vhqn", {
        from_name: formData.name,
        from_email: formData.email,
        message: body,
        to_email: CONTACT.email,
      });

      if (response.status === 200) {
        setStatusMessage("Thanks — your message is on its way. I'll get back to you soon.");
        setMessageType("success");
        setFormData({ name: "", email: "", message: "" });
        setTopics([]);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("That didn't send. Try again, or email me directly.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="border-t border-ink-200 py-24">
      <SectionHeading kicker="Contact" title="Let's make it happen" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-14 lg:gap-24">
        {/* Details — typographic, no boxes */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest2 text-ink-500">
              Available for work
            </span>
          </div>

          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-8 block font-display text-2xl lg:text-[clamp(1.5rem,2vw,2rem)] font-light leading-tight text-ink-900 transition-colors hover:text-accent break-all"
          >
            {CONTACT.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-3 text-xs font-semibold uppercase tracking-widest2 text-ink-400 underline underline-offset-4 transition-colors hover:text-accent"
          >
            {copied ? "copied" : "copy address"}
          </button>

          <dl className="mt-12 space-y-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest2 text-ink-400">
                Phone
              </dt>
              <dd className="mt-2">
                <a href={`tel:${CONTACT.phoneNo}`} className="text-ink-900 transition-colors hover:text-accent">
                  {CONTACT.phoneNo}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest2 text-ink-400">
                Based in
              </dt>
              <dd className="mt-2 max-w-xs leading-relaxed text-ink-700">{CONTACT.address}</dd>
            </div>
          </dl>
        </motion.div>

        {/* Enquiry form — underline fields, no nested card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest2 text-ink-400">
            What do you need?
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {TOPICS.map((topic) => {
              const selected = topics.includes(topic);
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => toggleTopic(topic)}
                  aria-pressed={selected}
                  className={`rounded-full px-4 py-2.5 text-sm transition-colors duration-200 ${
                    selected
                      ? "bg-accent text-white"
                      : "bg-white text-ink-700 hover:text-ink-900"
                  }`}
                >
                  {topic}
                </button>
              );
            })}
          </div>

          <div className="mt-12 space-y-9">
            {FIELDS.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-xs font-semibold uppercase tracking-widest2 text-ink-400"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="mt-3 w-full border-b border-ink-300 bg-transparent pb-3 text-lg text-ink-900 placeholder-ink-300 transition-colors focus:border-accent focus:outline-none"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-widest2 text-ink-400"
              >
                Project details <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="What are you building?"
                className="mt-3 w-full resize-none border-b border-ink-300 bg-transparent pb-3 text-lg text-ink-900 placeholder-ink-300 transition-colors focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          {statusMessage && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-8 text-sm ${
                messageType === "success" ? "text-accent" : "text-red-600"
              }`}
            >
              {statusMessage}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`group mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium transition-colors duration-300 ${
              loading
                ? "cursor-not-allowed bg-ink-200 text-ink-400"
                : "bg-ink-900 text-white hover:bg-accent"
            }`}
          >
            {loading ? "Sending..." : "Send message"}
            {!loading && (
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            )}
          </button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
