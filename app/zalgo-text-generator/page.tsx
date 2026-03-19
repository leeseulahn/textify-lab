export const metadata = {
    title: "Zalgo Text Generator (Glitch Text)",
    description:
      "Generate creepy Zalgo text instantly. Copy and paste glitch text for Discord, Instagram, and more.",
  };
  
  export default function Page() {
    return (
      <main className="container" style={{ padding: 40 }}>
        <h1>Zalgo Text Generator</h1>
  
        <p>
          Create glitchy and creepy Zalgo text instantly. Perfect for memes,
          usernames, and aesthetic effects.
        </p>
  
        <textarea placeholder="Enter text..." style={{ width: "100%", height: 120 }} />
  
        <h2>What is Zalgo Text?</h2>
        <p>
          Zalgo text uses Unicode combining characters to create a distorted,
          glitch-like effect.
        </p>
  
        <h2>Examples</h2>
        <ul>
          <li>H̴̍e̶̚l̷̈́l̴͑o̷̔</li>
          <li>T̵̾e̴͌x̶̿t̷͂</li>
        </ul>
      </main>
    );
  }