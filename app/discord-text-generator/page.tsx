export const metadata = {
    title: "Discord Text Generator",
    description:
      "Create stylish Discord text for usernames, nicknames, and messages.",
  };
  
  export default function Page() {
    return (
      <main className="container" style={{ padding: 40 }}>
        <h1>Discord Text Generator</h1>
  
        <textarea placeholder="Enter text..." style={{ width: "100%", height: 120 }} />
      </main>
    );
  }