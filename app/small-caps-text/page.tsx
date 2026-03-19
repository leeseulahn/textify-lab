export const metadata = {
    title: "Small Caps Text Generator",
    description:
      "Convert normal text into small caps instantly. Copy stylish small capital text.",
  };
  
  export default function Page() {
    return (
      <main className="container" style={{ padding: 40 }}>
        <h1>Small Caps Generator</h1>
  
        <textarea placeholder="Enter text..." style={{ width: "100%", height: 120 }} />
  
        <h2>Example</h2>
        <p>ʜᴇʟʟᴏ ᴡᴏʀʟᴅ</p>
      </main>
    );
  }