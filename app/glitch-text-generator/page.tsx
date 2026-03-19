export const metadata = {
    title: "Glitch Text Generator",
    description:
      "Generate glitchy distorted text instantly. Perfect for aesthetic designs and usernames.",
  };
  
  export default function Page() {
    return (
      <main className="container" style={{ padding: 40 }}>
        <h1>Glitch Text Generator</h1>
  
        <textarea placeholder="Enter text..." style={{ width: "100%", height: 120 }} />
  
        <p>Example: H̷̓ë̸́l̵̍l̸̈́ő̶</p>
      </main>
    );
  }