"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  generateAllTextStyles,
  type TextToolResult,
} from "@/lib/text-tools";

export default function Page() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Textify Lab",
    url: "https://yourdomain.com",
    applicationCategory: "Utility",
    operatingSystem: "All",
    description:
      "Online fancy text generator that converts normal text into stylish fonts instantly.",
  };

  const [input, setInput] = useState("Hello world");
  const [copied, setCopied] = useState("");

  const results = useMemo<TextToolResult[]>(() => {
    return generateAllTextStyles(input);
  }, [input]);

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(""), 1200);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleCopyAll = async () => {
    const merged = results
      .map((item) => `${item.label}\n${item.value}`)
      .join("\n\n");

    try {
      await navigator.clipboard.writeText(merged);
      setCopied("전체 복사");
      setTimeout(() => setCopied(""), 1200);
    } catch (error) {
      console.error("Copy all failed:", error);
    }
  };

  const handleReset = () => {
    setInput("");
  };

  return (
    <main className="page">
      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <p className="eyebrow">Text Tools</p>
            <h1 className="top-title">Textify Lab</h1>
          </div>

          <a className="top-button" href="#results">
            결과 보기
          </a>
        </div>
      </header>

      <section className="hero container">
        <div className="hero-text">
          <span className="badge">Textify Lab</span>
          <h2>
            텍스트를
            <br />
            예쁘고 특이하게 바꿔보세요
          </h2>
          <p>
            일반 문장을 Zalgo, Bubble, Square, Small Caps, Monospace,
            Full Width, Upside Down 스타일로 즉시 변환할 수 있는 웹앱입니다.
            SNS 닉네임, 소개글, 제목 꾸미기에 바로 사용할 수 있어요.
          </p>
        </div>

        <div className="hero-card">
          <p className="hero-card-label">인기 스타일 미리보기</p>

          <div className="preview-box">
            <span className="preview-name">Zalgo</span>
            <strong>H̴̍e̶̚l̷̈́l̴͑o̷̔</strong>
          </div>

          <div className="preview-box">
            <span className="preview-name">Bubble</span>
            <strong>Ⓗⓔⓛⓛⓞ</strong>
          </div>

          <div className="preview-box">
            <span className="preview-name">Small Caps</span>
            <strong>ʜᴇʟʟᴏ</strong>
          </div>
        </div>
      </section>

      <section className="container main-grid">
        <div className="card input-card">
          <div className="card-head">
            <div>
              <h3>입력</h3>
              <p>원하는 문장을 입력하면 아래에서 여러 스타일로 변환됩니다.</p>
            </div>
            <span className="live-chip">Live</span>
          </div>

          <textarea
            className="textarea"
            placeholder="예: Hello world / 안녕하세요 / Fancy text tools"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="action-row">
            <button className="btn btn-primary" onClick={handleCopyAll}>
              전체 복사
            </button>
            <button className="btn btn-secondary" onClick={handleReset}>
              초기화
            </button>
          </div>

          {copied && <p className="copied-state">복사됨: {copied}</p>}
        </div>

        <div className="side-column">
          <div className="card side-card blue">
            <p className="side-label">추천 포인트</p>
            <h3>수익형 확장도 쉬워요</h3>
            <ul className="feature-list">
              <li>SEO용 개별 스타일 페이지 확장 가능</li>
              <li>광고 배치에 적합한 카드형 구조</li>
              <li>닉네임 생성기와 묶어서 트래픽 확장 가능</li>
            </ul>
          </div>

          <div className="card side-card">
            <p className="side-label dark">추천 SEO 키워드</p>
            <div className="keyword-wrap">
              <span>fancy text generator</span>
              <span>zalgo text</span>
              <span>bubble text</span>
              <span>small caps text</span>
              <span>weird text generator</span>
              <span>stylish font text</span>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="container results-section">
        <div className="section-head">
          <div>
            <h3>변환 결과</h3>
            <p>각 카드에서 바로 복사할 수 있어요.</p>
          </div>
          <span className="count-chip">{results.length} styles</span>
        </div>

        <div className="results-grid">
          {results.map((item) => (
            <article className="result-card" key={item.label}>
              <div className="result-head">
                <span className="result-label">{item.label}</span>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy(item.value, item.label)}
                >
                  복사
                </button>
              </div>

              <p className="result-value">{item.value || "-"}</p>
            </article>
          ))}
        </div>

        
      </section>

       

 

<section className="container" style={{ marginTop: 80 }}>
  <h1>Fancy Text Generator & Stylish Font Tool</h1>

  <p>
    Textify Lab is a powerful fancy text generator that converts normal text
    into stylish fonts instantly. You can generate Zalgo text, bubble text,
    small caps, and aesthetic fonts for Instagram, TikTok, and Discord.
  </p>

  <h2>Popular Tools</h2>
  <ul>
    <li>Instagram Font Generator</li>
    <li>Zalgo Text Generator</li>
    <li>Bubble Text Generator</li>
    <li>Small Caps Text</li>
  </ul>

  <h2>Why use our text generator?</h2>
  <p>
    Our tool uses Unicode characters to create unique text styles that can be
    copied and pasted anywhere. No installation needed.
  </p>
</section>


      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
    </main>
  );
}