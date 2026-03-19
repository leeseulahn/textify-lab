export const metadata = {
    title: "Cute Text Generator",
    description:
      "Generate cute text styles for social media, usernames, and bios.",
  };
  
  export default function Page() {
    return (
      <main className="container" style={{ padding: 40 }}>
        <h1>Cute Text Generator</h1>
  
        <textarea placeholder="Enter text..." style={{ width: "100%", height: 120 }} />
  
        <p>Example: ♡ hello ♡</p>
      </main>
    );
  }