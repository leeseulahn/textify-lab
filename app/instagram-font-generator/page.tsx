export const metadata = {
    title: "Instagram Font Generator",
    description:
      "Generate Instagram fonts for bio, captions, and usernames. Copy and paste instantly.",
  };
  
  export default function InstagramFontGeneratorPage() {
    return (
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px" }}>
        <h1>Instagram Font Generator</h1>
        <p>
          Create stylish Instagram fonts for bios, captions, and usernames.
        </p>
  
        <textarea
          placeholder="Enter text..."
          style={{
            width: "100%",
            minHeight: 140,
            marginTop: 16,
            padding: 16,
            borderRadius: 16,
            border: "1px solid #ddd",
          }}
        />
  
        <section style={{ marginTop: 32 }}>
          <h2>How to use</h2>
          <ol>
            <li>Type your text</li>
            <li>Copy the styled result</li>
            <li>Paste it into Instagram</li>
          </ol>
        </section>
      </main>
    );
  }