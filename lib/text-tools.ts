export type TextToolResult = {
    label: string;
    value: string;
  };
  
  const bubbleUpper = "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ";
  const bubbleLower = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";
  const bubbleNumber = "⓪①②③④⑤⑥⑦⑧⑨";
  
  const squareUpper = "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉";
  const squareNumber = "0123456789";
  
  const fullWidthStart = 0xff00;
  const asciiStart = 0x20;
  
  const smallCapsMap: Record<string, string> = {
    a: "ᴀ",
    b: "ʙ",
    c: "ᴄ",
    d: "ᴅ",
    e: "ᴇ",
    f: "ꜰ",
    g: "ɢ",
    h: "ʜ",
    i: "ɪ",
    j: "ᴊ",
    k: "ᴋ",
    l: "ʟ",
    m: "ᴍ",
    n: "ɴ",
    o: "ᴏ",
    p: "ᴘ",
    q: "ǫ",
    r: "ʀ",
    s: "s",
    t: "ᴛ",
    u: "ᴜ",
    v: "ᴠ",
    w: "ᴡ",
    x: "x",
    y: "ʏ",
    z: "ᴢ",
  };
  
  const upsideDownMap: Record<string, string> = {
    a: "ɐ",
    b: "q",
    c: "ɔ",
    d: "p",
    e: "ǝ",
    f: "ɟ",
    g: "ƃ",
    h: "ɥ",
    i: "ᴉ",
    j: "ɾ",
    k: "ʞ",
    l: "ꞁ",
    m: "ɯ",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "ɹ",
    s: "s",
    t: "ʇ",
    u: "n",
    v: "ʌ",
    w: "ʍ",
    x: "x",
    y: "ʎ",
    z: "z",
    A: "∀",
    B: "𐐒",
    C: "Ɔ",
    D: "◖",
    E: "Ǝ",
    F: "Ⅎ",
    G: "⅁",
    H: "H",
    I: "I",
    J: "ſ",
    K: "Ʞ",
    L: "⅂",
    M: "W",
    N: "N",
    O: "O",
    P: "Ԁ",
    Q: "Ό",
    R: "ᴚ",
    S: "S",
    T: "⊥",
    U: "∩",
    V: "Λ",
    W: "M",
    X: "X",
    Y: "⅄",
    Z: "Z",
    "0": "0",
    "1": "⇂",
    "2": "ᄅ",
    "3": "Ɛ",
    "4": "ㄣ",
    "5": "ϛ",
    "6": "9",
    "7": "ㄥ",
    "8": "8",
    "9": "6",
    ".": "˙",
    ",": "'",
    "'": ",",
    '"': "„",
    "!": "¡",
    "?": "¿",
    "(": ")",
    ")": "(",
    "[": "]",
    "]": "[",
    "{": "}",
    "}": "{",
    "<": ">",
    ">": "<",
    "_": "‾",
  };
  
  const zalgoUp = [
    "\u030d", "\u030e", "\u0304", "\u0305", "\u033f", "\u0311", "\u0306",
    "\u0310", "\u0352", "\u0357", "\u0351", "\u0307", "\u0308", "\u030a",
    "\u0342", "\u0343", "\u0344", "\u034a", "\u034b", "\u034c", "\u0303",
    "\u0302", "\u030c", "\u0350", "\u0300", "\u0301", "\u030b", "\u030f",
    "\u0312", "\u0313", "\u0314", "\u033d", "\u0309", "\u0363", "\u0364",
    "\u0365", "\u0366", "\u0367", "\u0368", "\u0369", "\u036a", "\u036b",
    "\u036c", "\u036d", "\u036e", "\u036f", "\u033e", "\u035b", "\u0346",
    "\u031a",
  ];
  
  const zalgoMid = [
    "\u0315", "\u031b", "\u0340", "\u0341", "\u0358", "\u0321", "\u0322",
    "\u0327", "\u0328", "\u0334", "\u0335", "\u0336", "\u034f", "\u035c",
    "\u035d", "\u035e", "\u035f", "\u0360", "\u0362", "\u0338", "\u0337",
    "\u0361", "\u0489",
  ];
  
  const zalgoDown = [
    "\u0316", "\u0317", "\u0318", "\u0319", "\u031c", "\u031d", "\u031e",
    "\u031f", "\u0320", "\u0324", "\u0325", "\u0326", "\u0329", "\u032a",
    "\u032b", "\u032c", "\u032d", "\u032e", "\u032f", "\u0330", "\u0331",
    "\u0332", "\u0333", "\u0339", "\u033a", "\u033b", "\u033c", "\u0345",
    "\u0347", "\u0348", "\u0349", "\u034d", "\u034e", "\u0353", "\u0354",
    "\u0355", "\u0356", "\u0359", "\u035a", "\u0323",
  ];
  
  function randomItem(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  function isAlphabetUpper(char: string) {
    return char >= "A" && char <= "Z";
  }
  
  function isAlphabetLower(char: string) {
    return char >= "a" && char <= "z";
  }
  
  function isNumber(char: string) {
    return char >= "0" && char <= "9";
  }
  
  export function toZalgo(text: string) {
    if (!text) return "";
  
    return [...text]
      .map((char) => {
        if (char === " ") return char;
  
        let result = char;
        const upCount = 2;
        const midCount = 1;
        const downCount = 2;
  
        for (let i = 0; i < upCount; i++) result += randomItem(zalgoUp);
        for (let i = 0; i < midCount; i++) result += randomItem(zalgoMid);
        for (let i = 0; i < downCount; i++) result += randomItem(zalgoDown);
  
        return result;
      })
      .join("");
  }
  
  export function toBubble(text: string) {
    return [...text]
      .map((char) => {
        if (isAlphabetUpper(char)) {
          return bubbleUpper[char.charCodeAt(0) - 65];
        }
  
        if (isAlphabetLower(char)) {
          return bubbleLower[char.charCodeAt(0) - 97];
        }
  
        if (isNumber(char)) {
          return bubbleNumber[Number(char)];
        }
  
        return char;
      })
      .join("");
  }
  
  export function toSquare(text: string) {
    return [...text]
      .map((char) => {
        if (isAlphabetUpper(char)) {
          return squareUpper[char.charCodeAt(0) - 65];
        }
  
        if (isAlphabetLower(char)) {
          return squareUpper[char.toUpperCase().charCodeAt(0) - 65];
        }
  
        if (isNumber(char)) {
          return squareNumber[Number(char)];
        }
  
        return char;
      })
      .join("");
  }
  
  export function toSmallCaps(text: string) {
    return [...text]
      .map((char) => {
        const lower = char.toLowerCase();
        return smallCapsMap[lower] ?? char;
      })
      .join("");
  }
  
  export function toMonospace(text: string) {
    return [...text]
      .map((char) => {
        if (isAlphabetUpper(char)) {
          return String.fromCodePoint(0x1d670 + (char.charCodeAt(0) - 65));
        }
  
        if (isAlphabetLower(char)) {
          return String.fromCodePoint(0x1d68a + (char.charCodeAt(0) - 97));
        }
  
        if (isNumber(char)) {
          return String.fromCodePoint(0x1d7f6 + Number(char));
        }
  
        return char;
      })
      .join("");
  }
  
  export function toFullWidth(text: string) {
    return [...text]
      .map((char) => {
        if (char === " ") return "　";
  
        const code = char.charCodeAt(0);
        if (code >= 0x21 && code <= 0x7e) {
          return String.fromCharCode(code - asciiStart + fullWidthStart);
        }
  
        return char;
      })
      .join("");
  }
  
  export function toUpsideDown(text: string) {
    return [...text]
      .reverse()
      .map((char) => upsideDownMap[char] ?? upsideDownMap[char.toLowerCase()] ?? char)
      .join("");
  }
  
  export function generateAllTextStyles(text: string): TextToolResult[] {
    return [
      { label: "Normal", value: text },
      { label: "Zalgo", value: toZalgo(text) },
      { label: "Bubble", value: toBubble(text) },
      { label: "Square", value: toSquare(text) },
      { label: "Small Caps", value: toSmallCaps(text) },
      { label: "Monospace", value: toMonospace(text) },
      { label: "Full Width", value: toFullWidth(text) },
      { label: "Upside Down", value: toUpsideDown(text) },
    ];
  }