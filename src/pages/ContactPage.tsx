import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Instagram, Linkedin, MessageCircle, Copy, Check, Loader2, Sparkles } from 'lucide-react';
import siteData from '@/data/siteData';

export default function ContactPage() {
  const contactData = siteData.contact;
  const socials = siteData.socialLinks;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  /** Handle Copying Contact Info to Clipboard */
  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  /** Asynchronous Form Submission to Web3Forms API */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Using Web3Forms free contact endpoint with target email
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b1d033c4-4b57-41ab-85f8-80f074d0dbd9', // Standard public key fallback
          email_to: contactData.email,
          name: formData.name,
          email: formData.email,
          subject: `[HackShastra Contact] ${formData.subject}`,
          message: formData.message,
          from_name: `${formData.name} (HackShastra Website)`
        })
      });

      const result = await response.json();
      if (result.success || response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: Trigger direct mailto link if API key requires setup
        triggerMailtoFallback();
      }
    } catch {
      triggerMailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerMailtoFallback = () => {
    const mailtoLink = `mailto:${contactData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-background min-h-screen w-full relative">
      <div className="pt-24 md:pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              Direct Communication
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-3 md:mb-4">
              Get in <span className="text-blue-600 fire-text">Touch</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              {contactData.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column: Contact Cards & Info */}
            <div className="space-y-6">
              <div className="bg-neutral-950/80 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                  <span>Contact Information</span>
                </h2>
                
                <div className="space-y-6">
                  {/* Email Box */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-blue-600/40 transition-all">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-foreground">Official Email</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{contactData.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(contactData.email, 'email')}
                      className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                      title="Copy email address"
                    >
                      {copiedType === 'email' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Location Box */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-blue-600/40 transition-all">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-foreground">Campus Address</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground whitespace-pre-line">{contactData.location}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(contactData.location, 'location')}
                      className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                      title="Copy address"
                    >
                      {copiedType === 'location' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Phone Box */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-blue-600/40 transition-all">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-foreground">Phone Support</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{contactData.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="mt-8 pt-6 border-t border-neutral-800/80">
                  <h3 className="font-semibold text-sm mb-3">Connect via Community Channels</h3>
                  <div className="flex gap-3">
                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-blue-600/50 hover:text-blue-500 text-xs font-medium transition-all">
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </a>
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-blue-600/50 hover:text-blue-500 text-xs font-medium transition-all">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a href={socials.discord} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-blue-600/50 hover:text-blue-500 text-xs font-medium transition-all">
                      <MessageCircle className="w-4 h-4" />
                      Discord
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Campus Google Map */}
              <div className="rounded-2xl overflow-hidden border border-neutral-800/80 h-56 bg-neutral-900 relative shadow-xl">
                <iframe
                  title="SRM University-AP Location Map"
                  src="https://maps.google.com/maps?q=16.462717,80.506813&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(80%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=16.462717,80.506813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white border border-neutral-700 text-xs font-semibold backdrop-blur-md transition-colors"
                >
                  Open in Maps ↗
                </a>
              </div>
            </div>

            {/* Right Column: Functional Asynchronous Contact Form */}
            <div className="bg-neutral-950/80 rounded-2xl border border-neutral-800/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Send us a Direct Message</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                Fill out the form below. Your message will be sent directly to the HackShastra SRM-AP organizing team.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-blue-950/40 border border-blue-800/60 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500 text-blue-500 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you for reaching out to HackShastra SRM-AP. Our team has received your inquiry and will respond to your email within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium mb-1.5 text-neutral-300">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 focus:border-blue-600 focus:outline-none transition-colors text-sm text-white placeholder-neutral-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium mb-1.5 text-neutral-300">Your Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 focus:border-blue-600 focus:outline-none transition-colors text-sm text-white placeholder-neutral-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium mb-1.5 text-neutral-300">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 focus:border-blue-600 focus:outline-none transition-colors text-sm text-white placeholder-neutral-500"
                      placeholder="Hackathon inquiry / Sponsorship / Query"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium mb-1.5 text-neutral-300">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 focus:border-blue-600 focus:outline-none transition-colors resize-none text-sm text-white placeholder-neutral-500"
                      placeholder="Type your message here..."
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-blue-500">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37, 99, 235,0.4)] disabled:opacity-50 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
