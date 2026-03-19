export const metadata = {
    title: "Fancy Text Generator",
    description:
      "Convert normal text into fancy fonts instantly. Copy and paste stylish text anywhere.",
  };
  
  export default function Page() {
    return (
      <main className="container" style={{ padding: 40 }}>
        <h1>Fancy Text Generator</h1>
  
        <textarea placeholder="Enter text..." style={{ width: "100%", height: 120 }} />
  
        <h2>Popular Styles</h2>
        <ul>
          <li>Bubble</li>
          <li>Zalgo</li>
          <li>Small Caps</li>
        </ul>
      </main>
    );
  }