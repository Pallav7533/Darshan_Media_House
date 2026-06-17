import { useState } from "react";

export default function Influencer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    instagram: "",
    youtube: "",
    niche: "",
    followers: "",
    reach: "",
    languages: "",
    experience: "",
    portfolio: "",
    about: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
🔥 NEW INFLUENCER APPLICATION

👤 Full Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🏙 City: ${formData.city}

📸 Instagram: ${formData.instagram}
▶️ YouTube: ${formData.youtube}

🎯 Niche: ${formData.niche}
👥 Followers: ${formData.followers}
📈 Average Reach: ${formData.reach}

🗣 Languages: ${formData.languages}
💼 Experience: ${formData.experience}

🔗 Portfolio: ${formData.portfolio}

📝 About:
${formData.about}
`;

    const whatsappNumber = "917016885397"; // apna whatsapp number

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Influencer Network
          </h1>

          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Collaborate with top brands, get paid campaigns and become part of
            the Darshan Media House creator community.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-black border border-white/20 rounded-xl p-4 w-full"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-black border border-white/20 rounded-xl p-4 w-full"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number *"
                required
                value={formData.phone}
                onChange={handleChange}
                className="bg-black border border-white/20 rounded-xl p-4 w-full"
              />

              <input
                type="text"
                name="city"
                placeholder="City *"
                required
                value={formData.city}
                onChange={handleChange}
                className="bg-black border border-white/20 rounded-xl p-4 w-full"
              />
            </div>

            <input
              type="url"
              name="instagram"
              placeholder="Instagram Profile URL *"
              required
              value={formData.instagram}
              onChange={handleChange}
              className="bg-black border border-white/20 rounded-xl p-4 w-full"
            />

            <input
              type="url"
              name="youtube"
              placeholder="YouTube Channel URL"
              value={formData.youtube}
              onChange={handleChange}
              className="bg-black border border-white/20 rounded-xl p-4 w-full"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <select
                name="niche"
                required
                value={formData.niche}
                onChange={handleChange}
                className="bg-black border border-white/20 rounded-xl p-4 w-full"
              >
                <option value="">Select Niche</option>
                <option>Fashion</option>
                <option>Lifestyle</option>
                <option>Travel</option>
                <option>Food</option>
                <option>Fitness</option>
                <option>Finance</option>
                <option>Technology</option>
                <option>Gaming</option>
                <option>Education</option>
                <option>Other</option>
              </select>

              <input
                type="text"
                name="followers"
                placeholder="Total Followers *"
                required
                value={formData.followers}
                onChange={handleChange}
                className="bg-black border border-white/20 rounded-xl p-4 w-full"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="reach"
                placeholder="Average Monthly Reach"
                value={formData.reach}
                onChange={handleChange}
                className="bg-black border border-white/20 rounded-xl p-4 w-full"
              />

              <input
                type="text"
                name="languages"
                placeholder="Languages Spoken"
                value={formData.languages}
                onChange={handleChange}
                className="bg-black border border-white/20 rounded-xl p-4 w-full"
              />
            </div>

            <input
              type="text"
              name="experience"
              placeholder="Previous Brand Collaborations"
              value={formData.experience}
              onChange={handleChange}
              className="bg-black border border-white/20 rounded-xl p-4 w-full"
            />

            <input
              type="url"
              name="portfolio"
              placeholder="Portfolio / Media Kit Link"
              value={formData.portfolio}
              onChange={handleChange}
              className="bg-black border border-white/20 rounded-xl p-4 w-full"
            />

            <textarea
              name="about"
              rows={5}
              placeholder="Tell us about yourself..."
              value={formData.about}
              onChange={handleChange}
              className="bg-black border border-white/20 rounded-xl p-4 w-full"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-yellow-500 text-black font-bold text-lg hover:scale-[1.02] transition"
            >
              Apply as Influencer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}