export const metadata = {
    title: "Aesthetic Text Generator",
    description:
      "Create aesthetic text styles and symbols instantly. Perfect for Instagram and TikTok.",
  };
  
  export default function Page() {
    return (
      <main className="container" style={{ padding: 40 }}>
        <h1>Aesthetic Text Generator</h1>
  
        <textarea placeholder="Enter text..." style={{ width: "100%", height: 120 }} />
      </main>
    );
  }