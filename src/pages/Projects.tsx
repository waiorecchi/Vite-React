import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "AtCoder",
      description: "競技プログラミングの解答コードとチートシート",
      technologies: ["Python"],
      details: "AtCoderのコンテスト問題の解答コードと、便利なチートシートを管理するリポジトリ",
      githubLink: "https://github.com/waiorecchi/Atcoder",
    },
    {
      title: "Vite-React",
      description: "ViteとReactを使用したモダンなウェブアプリケーション",
      technologies: ["TypeScript", "React", "Vite", "React Router DOM"],
      details: "モダンなナビゲーションバー、レスポンシブデザイン、複数ページのルーティング機能を備えたウェブアプリケーション",
      githubLink: "https://github.com/waiorecchi/Vite-React",
    },
    {
      title: "MACRO-krunker",
      description: "Krunker.ioのためのPythonマクロプロジェクト",
      technologies: ["Python"],
      details: "Krunker.ioゲームの自動化と最適化のためのマクロツール",
      githubLink: "https://github.com/waiorecchi/macro-krunker",
    },
    {
      title: "Personal Website",
      technologies: ["HTML", "CSS", "JavaScript"],
      details:
        "モダンなデザインとインタラクティブな要素を備えたパーソナルウェブサイト",
      githubLink: "https://github.com/waiorecchi/waiorecchi.github.io",
    },
    {
      title: "STUDY-ENGLISH-ON-WALLPAPER",
      description: "デスクトップ壁紙で英語を学習するプロジェクト",
      technologies: ["Python", "Batchfile", "VBScript"],
      details:
        "デスクトップの壁紙に英語の名言やフレーズを表示し、日常的に英語に触れる機会を作るツール",
      githubLink: "https://github.com/waiorecchi/study-english-on-wallpaper",
    },
  ];

  return (
    <div className="projects-container">
      <h1>Projects!</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            {project.description && (
              <p className="project-description">{project.description}</p>
            )}
            <div className="project-tech">
              <span>🛠️ 使用技術: </span>
              {project.technologies.join(", ")}
            </div>
            <div className="project-details">
              <span>📝 説明: </span>
              {project.details}
            </div>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHubで見る
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
