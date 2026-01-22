import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Code, Users, Lightbulb, Trophy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import ClickEffect from '@/components/ClickEffect';
import CustomCursor from '@/components/CustomCursor';

const benefits = [
  { icon: Code, title: 'Learn & Build', desc: 'Work on real projects and sharpen your coding skills' },
  { icon: Users, title: 'Network', desc: 'Connect with like-minded developers and industry mentors' },
  { icon: Lightbulb, title: 'Innovate', desc: 'Turn your ideas into reality with team support' },
  { icon: Trophy, title: 'Compete', desc: 'Participate in hackathons and win exciting prizes' },
];

const roles = [
  { title: 'Developer', desc: 'Build amazing projects with cutting-edge tech', skills: ['React', 'Python', 'Node.js'] },
  { title: 'Designer', desc: 'Create stunning UI/UX for our projects', skills: ['Figma', 'UI/UX', 'Prototyping'] },
  { title: 'Content Creator', desc: 'Help us spread the word and create content', skills: ['Writing', 'Social Media', 'Video'] },
  { title: 'Event Manager', desc: 'Organize and manage club events', skills: ['Planning', 'Coordination', 'Leadership'] },
];

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    regNumber: '',
    year: '',
    branch: '',
    role: '',
    skills: '',
    why: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Application submitted! We\'ll review and get back to you soon.');
    setFormData({ name: '', email: '', regNumber: '', year: '', branch: '', role: '', skills: '', why: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-background min-h-screen w-full relative">
      <CustomCursor />
      <ClickEffect />
      
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-border hover:border-primary transition-colors text-white"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Join <span className="text-primary">HackShastra SRM-AP</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Be part of SRM-AP's most innovative tech community. 
              Build, learn, and grow with us.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Why Join Us?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/50 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Roles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Open Roles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {roles.map((role, i) => (
                <div key={i} className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-colors">
                  <h3 className="font-bold text-lg mb-2">{role.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{role.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, j) => (
                      <span key={j} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold mb-2 text-center">Apply Now</h2>
              <p className="text-muted-foreground text-center text-sm mb-8">Fill out the form below to join our community</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@srmap.edu.in"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="regNumber" className="block text-sm font-medium mb-2">Reg. Number</label>
                    <input
                      type="text"
                      id="regNumber"
                      name="regNumber"
                      value={formData.regNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="AP21XXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium mb-2">Year</label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="branch" className="block text-sm font-medium mb-2">Branch</label>
                    <input
                      type="text"
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="CSE, ECE, etc."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-2">Preferred Role</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a role</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="content">Content Creator</option>
                    <option value="events">Event Manager</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-medium mb-2">Your Skills</label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="React, Python, Figma, etc."
                  />
                </div>

                <div>
                  <label htmlFor="why" className="block text-sm font-medium mb-2">Why do you want to join?</label>
                  <textarea
                    id="why"
                    name="why"
                    value={formData.why}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about yourself and why you want to be part of HackShastra SRM-AP..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  Submit Application
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground justify-center">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Applications reviewed within 48 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
