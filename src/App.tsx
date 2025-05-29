import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Copyright from "./components/Copyright";
import Projects from "./pages/Projects";
import ComingSoon from "./pages/ComingSoon";
import Introduction from "./pages/Introduction";
import Contact from "./pages/Contact";

function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const statDetails = {
    experience: [
      "フロントエンド開発: 1年",
      "QA,デバック経験: 2年",
      "バックエンド開発: 0.5年"
    ],
    projects: [
      "Webアプリケーション: 5件",
      "モバイルアプリ: 3件",
      "デスクトップアプリ: 2件"
    ],
    techStack: [
      "フロントエンド: React, TypeScript",
      "バックエンド: Node.js, Python,Express.js",
      "データベース: MongoDB",
      "その他: Git, Github, Cursor"
    ]
  };

  const pageGuides = [
    {
      title: "自己紹介",
      description: "私の経歴、スキル、興味について詳しく紹介しています。",
      icon: "👨‍💻"
    },
    {
      title: "プロジェクト",
      description: "これまでに手がけた様々なプロジェクトの一覧です。",
      icon: "🚀"
    },
    {
      title: "お問い合わせ",
      description: "ご質問やお問い合わせはこちらからお気軽にどうぞ。",
      icon: "📬"
    }
  ];

  return (
    <div className="main-content">
      <div className="hero-section">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>ようこそ！</h1>
        <p className="subtitle">ポートフォリオサイトへ</p>
        <div className="hero-description">
          <p>TypeScriptとReactを愛する開発者です。</p>
          <p>新しい技術に挑戦し、クリエイティブな解決策を生み出すことを楽しんでいます。</p>
        </div>
        <div className="page-guides">
          {pageGuides.map((guide, index) => (
            <div key={index} className="guide-item">
              <span className="guide-icon">{guide.icon}</span>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
            </div>
          ))}
        </div>
        <div className="hero-stats">
          <div className="stat-item" onClick={() => toggleAccordion(0)}>
            <div className="stat-header">
              <span className="stat-number">2+</span>
              <span className="stat-label">年の開発経験</span>
              <span className={`accordion-icon ${activeAccordion === 0 ? 'active' : ''}`}>▼</span>
            </div>
            <div className={`accordion-content ${activeAccordion === 0 ? 'active' : ''}`}>
              {statDetails.experience.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="stat-item" onClick={() => toggleAccordion(1)}>
            <div className="stat-header">
              <span className="stat-number">10+</span>
              <span className="stat-label">プロジェクト</span>
              <span className={`accordion-icon ${activeAccordion === 1 ? 'active' : ''}`}>▼</span>
            </div>
            <div className={`accordion-content ${activeAccordion === 1 ? 'active' : ''}`}>
              {statDetails.projects.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div className="stat-item" onClick={() => toggleAccordion(2)}>
            <div className="stat-header">
              <span className="stat-number">5+</span>
              <span className="stat-label">技術スタック</span>
              <span className={`accordion-icon ${activeAccordion === 2 ? 'active' : ''}`}>▼</span>
            </div>
            <div className={`accordion-content ${activeAccordion === 2 ? 'active' : ''}`}>
              {statDetails.techStack.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Vite-React/" element={<Home />} />
        <Route path="/Vite-React/projects" element={<Projects />} />
        <Route path="/Vite-React/coming-soon" element={<ComingSoon />} />
        <Route path="/Vite-React/introduction" element={<Introduction />} />
        <Route path="/Vite-React/contact" element={<Contact />} />
      </Routes>
      <Copyright />
    </Router>
  );
}

export default App;
