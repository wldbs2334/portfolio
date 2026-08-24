import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Geo } from "../components/Geo";
import { Section } from "../components/Section";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section id="contact" style={{ background: "#F7FBFE" }}>
      <Geo shape="circle" size={500} color="#9AE3F7" opacity={0.2} className="bottom-[-150px] right-[-150px]" />
      <Geo shape="circle" size={280} color="#FDE991" opacity={0.35} className="top-[-80px] left-[-80px]" />
      <Geo shape="ring" size={200} color="#2AB8DC" opacity={0.15} className="top-20 right-1/3" />
      <Geo shape="square" size={70} color="#FDE991" opacity={0.3} className="bottom-1/3 left-1/3" />

      <div className="relative z-10 flex flex-col justify-center h-full px-12 md:px-24 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "10px", color: "#2AB8DC", letterSpacing: "0.2em" }}
              className="mb-3"
            >
              04 / CONTACT
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'Unbounded', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.1,
                color: "#0D1A2A",
              }}
            >
              함께
              <br />
              <span style={{ color: "#2AB8DC" }}>일해요</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-5 text-base leading-relaxed"
              style={{ color: "#5A7A8A", fontFamily: "'DM Sans', sans-serif" }}
            >
              새로운 프로젝트, 콜라보, 또는 그냥 안녕이라도 — 언제든 환영합니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mt-8 flex flex-col gap-4"
            >
              {[
                { icon: <Mail size={17} />, label: "hello@leejiyoon.dev" },
                { icon: <Github size={17} />, label: "github.com/leejiyoon" },
                { icon: <Linkedin size={17} />, label: "linkedin.com/in/leejiyoon" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3 cursor-pointer group">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: "#2AB8DC20", color: "#2AB8DC", border: "1.5px solid #2AB8DC40" }}
                  >
                    {icon}
                  </span>
                  <span
                    className="group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "#5A7A8A" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {sent ? (
              <div
                className="flex flex-col items-center justify-center h-72 rounded-3xl text-center"
                style={{ background: "#2AB8DC12", border: "1.5px solid #2AB8DC30" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#2AB8DC" }}
                >
                  <Send size={24} color="#FFFFFF" />
                </div>
                <p style={{ fontFamily: "'Unbounded', sans-serif", color: "#2AB8DC", fontSize: "16px", fontWeight: 700 }}>
                  메시지 전송 완료!
                </p>
                <p className="mt-2" style={{ color: "#5A7A8A", fontFamily: "'DM Sans', sans-serif" }}>
                  곧 연락드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSend} className="flex flex-col gap-4">
                {[
                  { key: "name", placeholder: "이름", type: "text" },
                  { key: "email", placeholder: "이메일", type: "email" },
                ].map(({ key, placeholder, type }) => (
                  <input
                    key={key}
                    type={type}
                    placeholder={placeholder}
                    required
                    value={formData[key as keyof typeof formData]}
                    onChange={(e) => setFormData((prev) => ({ ...prev, [key]: e.target.value }))}
                    className="w-full px-5 py-4 rounded-2xl outline-none transition-all duration-300"
                    style={{
                      background: "#FFFFFF",
                      border: "1.5px solid #2AB8DC25",
                      color: "#0D1A2A",
                      fontFamily: "'DM Sans', sans-serif",
                      boxShadow: "0 2px 8px rgba(42,184,220,0.06)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#2AB8DC")}
                    onBlur={(e) => (e.target.style.borderColor = "#2AB8DC25")}
                  />
                ))}
                <textarea
                  placeholder="메시지"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-5 py-4 rounded-2xl outline-none resize-none transition-all duration-300"
                  style={{
                    background: "#FFFFFF",
                    border: "1.5px solid #2AB8DC25",
                    color: "#0D1A2A",
                    fontFamily: "'DM Sans', sans-serif",
                    boxShadow: "0 2px 8px rgba(42,184,220,0.06)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#2AB8DC")}
                  onBlur={(e) => (e.target.style.borderColor = "#2AB8DC25")}
                />
                <button
                  type="submit"
                  className="w-full py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "#2AB8DC",
                    color: "#FFFFFF",
                    fontFamily: "'Unbounded', sans-serif",
                    fontSize: "12px",
                    boxShadow: "0 4px 20px #2AB8DC35",
                  }}
                >
                  <Send size={15} />
                  메시지 보내기
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
        style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "9px", color: "#0D1A2A40", letterSpacing: "0.2em" }}
      >
        © 2024 LEE JI YOON · WEB PUBLISHER
      </div>
    </Section>
  );
}
