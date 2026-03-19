export const metadata = {
    title: "Stylish Font Generator",
    description:
      "Generate stylish fonts for Instagram, TikTok, and Discord. Copy fancy text instantly.",
  };
  
  export default function Page() {
    return (
      <main className="container" style={{ padding: 40 }}>
        <h1>Stylish Font Generator</h1>
  
        <textarea placeholder="Enter text..." style={{ width: "100%", height: 120 }} />
  
        <p>Generate multiple stylish fonts in one click.</p>
      </main>
    );
  }