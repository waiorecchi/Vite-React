import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Introduction.css";

gsap.registerPlugin(ScrollTrigger);

const techStack = {
  languages: ["HTML/CSS", "JavaScript", "Python"],
  frameworks: ["Express.js", "Node.js", "Next.js/Nuxt.js", "Vite-React"],
  tools: ["VS Code", "Cursor", "Git/GitHub"],
  competitive: ["AtCoder"]
};

function Introduction() {
  const [text] = useState({
    title: "自己紹介",
    content: `<section-heading>WHO?</section-heading>
    北村 健紀 (Kitamura Tatsuki) 🌟  
    🎂 21歳 
    📍 千葉県在住  
    早稲田大学教育学部数学科3年  
    💻 プログラミング歴: 1.5年 
    📚 TOEIC 700  
    🔗 GitHub: [アカウント名]
    🎨 ポートフォリオ: [Projectリンク]  

<section-heading>技術スタック</section-heading> 
 
言語:  
- HTML/CSS 🌈  
- JavaScript 🚀  
- Python 🐍  

フレームワーク/ライブラリ:  
- Express.js (学習中) 📚  
- Node.js (勉強中) 🧠  
- Next.js/Nuxt.js (興味あり) 🔥  
- Vite-React (現在開発中!) 💫  

ツール:  
- VS Code 💙  
- Cursor (最近ハマってます！) 🖱️  
- Git/GitHub 🐙  

競技プログラミング:  
- AtCoderでアルゴリズム学習中 🏆  


<section-heading>技術への取り組み</section-heading>  
- Web開発の基礎を独学で習得し、現在はJavaScriptエコシステム（フロントエンド・バックエンド）を拡張中 📈  
- 「ポートフォリオ」では、[具体的なプロジェクト名や成果]を公開 🏆  

<section-heading>実務経験</section-heading>  
1. ゲーム会社 (Gravity Game Arise) 2023-現在  
   - OA業務とデバッグ作業を2年間担当 💻  
     - ✅ テストケースの作成・実行、バグレポートの管理により、製品品質向上に貢献  
     - ✉️ チーム連携ツール（Slack, JIRA）を活用した効率的な課題解決を経験  

2. 飲食店アルバイト (居酒屋・マクドナルド) 計1年  
   - 💬 接客・在庫管理を通じ、スピード対応力とマルチタスク能力を習得 ⚡  

3. 塾講師のアルバイト (1年間)  
   - 👩‍🎓 小学生から高校生まで幅広く指導  
   - ➗ 数学、英語、理科などを担当  
   - 🗣️ 人前で話す力と伝える技術を習得  
   - ❤️ コミュニケーション能力、メンタリングスキルを向上  


<section-heading>学歴・課外活動</section-heading>  
芝浦工業大学柏中学・高校出身  
一年間の浪人を経て早稲田大学入学  
早稲田大学 教育学部 数学科 2023年4月-2027年3月（予定）  
- ➗ 数学的論理思考を活かした問題解決力を養成  

サークル活動  
1. 岳文会（山岳サークル） 書記役職  
   - 🎤 友達がオーナーの渋谷ライブハウスで4年生追い出しコンパを主催 🎉  
   - 📑 引継ぎ資料、会計報告、名簿作成、会議室予約などを担当  
   - 👥 イベント企画・運営、メンバー間の情報共有をリード  

2. DJサークル 1年  
   - 🎶 音楽制作やイベント出演でクリエイティブな表現を探究  
   - 👀 周囲を観察して流す音楽を決める洞察力を養成  


<section-heading>興味・目標</section-heading>  
- 技術面: 「JavaScriptエコシステムの深化」  
  - 現在はExpress.jsを用いたバックエンド開発に挑戦中  
  - Next.jsでのSPA構築にも関心 🔥  
- キャリア: 「教育×テクノロジー」の分野で社会貢献を目指す  

<section-heading>趣味</section-heading>  
- ゲーム: Fortnite, VALORANT, 龍が如く(7,8), RimWorld, パズドラ, Among Us など  
- アウトドア: サークル活動で培った登山スキル（関東近郊の山々を制覇）  
- 音楽: DJ経験を活かし、サウンドクリエイションにも挑戦中  

<section-heading>アピールポイント</section-heading>  
1. 論理的思考: 数学専攻＋競プロ経験で、複雑な問題を構造化できる  
2. チームワーク: アルバイト・サークルで多様なメンバーと協働した実績  
3. 自己学習力: 未経験から1年半でWeb開発の基礎をマスターした成長意欲  

<section-heading>まとめ</section-heading>  
数学的思考力と技術スキルを活かし、「教育×テクノロジー」で社会に貢献したい！  
多彩な経験と柔軟な対応力で、どんな環境でも活躍します✨  

> ゲーム、登山、DJなど趣味も充実！楽しく前向きに挑戦します🎵`,
  });

  const containerRef = useRef(null);
  const headingRefs = useRef([]);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    // 見出しのアニメーション
    headingRefs.current.forEach((heading, index) => {
      if (heading) {
        gsap.fromTo(
          heading,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 90%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // 段落のアニメーション
    paragraphRefs.current.forEach((paragraph, index) => {
      if (paragraph) {
        gsap.fromTo(
          paragraph,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: paragraph,
              start: "top 90%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  const getParagraphClass = (text:string) => {
    if (text.includes("<section-heading>")) return "";
    if (text.trim().startsWith("-")) return "list-item";
    if (text.trim().startsWith(">")) return "quote";
    if (text.trim() === "---") return "divider";
    return "paragraph";
  };

  const processContent = (content:string) => {
    const sections = content.split(/<section-heading>.*?<\/section-heading>/);
    const headings =
      content.match(/<section-heading>(.*?)<\/section-heading>/g) || [];

    const result:string[] = [];
    sections.forEach((section, index) => {
      if (section.trim()) {
        const paragraphs = section.split(/\n\s*\n/);
        paragraphs.forEach((paragraph) => {
          if (paragraph.trim()) {
            result.push(paragraph.trim());
          }
        });
      }
      if (headings[index]) {
        result.push(headings[index]);
      }
    });

    return result;
  };

  return (
    <div className="introduction-container" ref={containerRef}>
      <h1>{text.title}</h1>
      <div className="introduction-content">
        {processContent(text.content).map((paragraph, index) => {
          if (paragraph.includes("<section-heading>")) {
            const heading = paragraph
              .replace("<section-heading>", "")
              .replace("</section-heading>", "");
            
            if (heading === "技術スタック") {
              return (
                <div key={index}>
                  <h2 className="section-heading">{heading}</h2>
                  <div className="tech-stack">
                    <div className="tech-category">
                      <h3>言語</h3>
                      <div className="tech-list">
                        {techStack.languages.map((tech, i) => (
                          <span key={i} className="tech-item">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="tech-category">
                      <h3>フレームワーク/ライブラリ</h3>
                      <div className="tech-list">
                        {techStack.frameworks.map((tech, i) => (
                          <span key={i} className="tech-item">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="tech-category">
                      <h3>ツール</h3>
                      <div className="tech-list">
                        {techStack.tools.map((tech, i) => (
                          <span key={i} className="tech-item">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="tech-category">
                      <h3>競技プログラミング</h3>
                      <div className="tech-list">
                        {techStack.competitive.map((tech, i) => (
                          <span key={i} className="tech-item">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <h2
                key={index}
                className="section-heading"
                ref={(el) => (headingRefs.current[index] = el)}
              >
                {heading}
              </h2>
            );
          }
          return (
            <p
              key={index}
              className={getParagraphClass(paragraph)}
              ref={(el) => (paragraphRefs.current[index] = el)}
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Introduction;
