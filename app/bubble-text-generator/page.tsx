export const metadata = {
    title: "Bubble Text Generator (Circle Font)",
    description:
      "Convert text into bubble letters instantly. Copy circle text for Instagram, TikTok, and usernames.",
  };
  
  export default function Page() {
    return (
      <main className="container" style={{ padding: 40 }}>
        <h1>Bubble Text Generator</h1>
  
        <p>
          Turn your text into bubble letters. Great for usernames, bios, and
          decorative text.
        </p>
  
        <textarea placeholder="Enter text..." style={{ width: "100%", height: 120 }} />
  
        <h2>Examples</h2>
        <ul>
          <li>Ⓗⓔⓛⓛⓞ</li>
          <li>Ⓣⓔⓧⓣ</li>
        </ul>
      </main>
    );
  }