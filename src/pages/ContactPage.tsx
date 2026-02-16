import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Phone, Send, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hssc2025@srmap.edu.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-background min-h-screen w-full relative">
      <Link
        to="/"
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-black/50 backdrop-blur-sm rounded-full border border-border hover:border-primary transition-colors text-white text-sm"
      >
        <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
        <span className="text-xs md:text-sm font-medium">Back</span>
      </Link>

      <div className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3 md:mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Have questions about HackShastra SRM-AP? Want to collaborate or sponsor an event? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h2>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm md:text-base">Email</h3>
                      <p className="text-muted-foreground text-xs md:text-sm">hssc2025@srmap.edu.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm md:text-base">Location</h3>
                      <p className="text-muted-foreground text-xs md:text-sm">SRM University-AP<br />Amaravati, Andhra Pradesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm md:text-base">Phone</h3>
                      <p className="text-muted-foreground text-xs md:text-sm">Available on request</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Follow Us</h3>
                <div className="flex gap-3 md:gap-4">
                  <a href="https://www.instagram.com/hackshastra.srmap/" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/hackshastra" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a href="https://discord.gg/hackshastra" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border h-40 md:h-48 bg-card flex items-center justify-center">
                <p className="text-muted-foreground text-xs md:text-sm">SRM University-AP Campus</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs md:text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none text-sm md:text-base"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 md:py-3 px-4 md:px-6 rounded-xl bg-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors text-sm md:text-base"
                >
                  <Send className="w-3 h-3 md:w-4 md:h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
