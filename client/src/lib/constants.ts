// Project Image Guidelines:
// 1. Place your project images in /public/images/ directory
// 2. Use high-quality images (recommended: 1200x800 pixels)
// 3. Supported formats: JPG, PNG, WebP
// 4. Example path: "/images/your-project-name.jpg"

export const musicProjects = [
  {
    title: "Discography",
    description:
      "Advanced deep learning models for real-time audio synthesis and generative music composition",
    image: "/images/neural-synthesis.jpg",
    technologies: ["TensorFlow", "PyTorch", "Web Audio API", "React", "Python"],
    demoUrl: "https://neural-music.mit.edu",
    projectUrl: "https://neural-synthesis.mit.edu",
    videoUrl: "https://example.com/videos/neural-synthesis-demo.mp4",
    liveDemo: true,
    demoDescription:
      "Experience real-time music generation powered by neural networks. Create unique musical patterns and explore AI-driven sound synthesis through an intuitive interface.",
    detailedDescription: `
      Neural Synthesis is a groundbreaking project that combines deep learning with real-time audio synthesis. 
      The system uses a novel architecture that combines transformer-based models with traditional DSP techniques 
      to generate high-quality musical content in real-time.

      The project features multiple interconnected modules:
      1. A neural network trained on a diverse dataset of musical performances
      2. A real-time audio synthesis engine that converts model outputs into sound
      3. An intuitive web interface for controlling and manipulating the generation process
      4. A collaborative environment where multiple users can interact with the system simultaneously

      The system has been used in live performances and installations, demonstrating its reliability and creative potential.
    `,
    features: [
      "Real-time audio synthesis",
      "Neural network-based generation",
      "Interactive pattern creation",
      "Multi-track mixing capabilities",
      "MIDI export functionality",
    ],
  },
  {
    title: "Computer Music",
    description:
      "Transformer-based models for generating complex musical arrangements and harmonies",
    image: "/images/ai-composer.jpg", // Place in public/images/
    technologies: [
      "GPT Architecture",
      "TensorFlow",
      "MIDI Processing",
      "Python",
      "Flask",
    ],
    demoUrl: "https://ai-composer.mit.edu",
    liveDemo: true,
    demoDescription:
      "Create complete musical compositions using advanced AI models. Explore different styles, harmonies, and arrangements through an interactive interface.",
    features: [
      "Style transfer composition",
      "Harmonic analysis",
      "Multi-instrument arrangement",
      "Real-time preview",
      "Score visualization",
    ],
  },
  {
    title: "Music Theory Research",
    description:
      "AI-powered system for automated mixing, mastering, and sound design",
    image: "/images/smart-production.jpg", // Place in public/images/
    technologies: ["Deep Learning", "DSP", "C++", "JUCE Framework", "Python"],
    demoUrl: "https://smart-production.mit.edu",
    liveDemo: true,
    demoDescription:
      "Experience professional-grade automated music production. Upload your tracks and let AI handle mixing, mastering, and sound design.",
    features: [
      "Automated mixing",
      "AI mastering",
      "Intelligent EQ",
      "Dynamic processing",
      "Spatial audio enhancement",
    ],
  },
  {
    title: "Neighborhood Music Research",
    description: "Context-aware AI systems for dynamic soundtrack generation",
    image: "/images/adaptive-music.jpg", // Place in public/images/
    technologies: [
      "Machine Learning",
      "Unity3D",
      "C#",
      "Web Audio API",
      "Node.js",
    ],
    demoUrl: "https://adaptive-music.mit.edu",
    liveDemo: true,
    demoDescription:
      "Experience interactive music that adapts to real-time input. Watch and hear how the system responds to different scenarios and user interactions.",
    features: [
      "Real-time adaptation",
      "Emotion-based generation",
      "Interactive parameters",
      "Scene analysis",
      "Seamless transitions",
    ],
  },
  {
    title: "Visual Scoring",
    description: "Context-aware AI systems for dynamic soundtrack generation",
    image: "/images/adaptive-music.jpg", // Place in public/images/
    technologies: [
      "Machine Learning",
      "Unity3D",
      "C#",
      "Web Audio API",
      "Node.js",
    ],
    demoUrl: "https://adaptive-music.mit.edu",
    liveDemo: true,
    demoDescription:
      "Experience interactive music that adapts to real-time input. Watch and hear how the system responds to different scenarios and user interactions.",
    features: [
      "Real-time adaptation",
      "Emotion-based generation",
      "Interactive parameters",
      "Scene analysis",
      "Seamless transitions",
    ],
  },
];

export const projects = [
  {
    title: "GrooveBlocks",
    description:
      "Modular musical building blocks for composition-based music education",
    image: "/images/grooveblocks.png", // Place an image named grooveblocks.jpg in public/images/
    technologies: [
      "Java",
      "Embedded Systems",
      "Digital Signal Processing",
      "C++",
    ],
    demoUrl: "https://grooveblocks.mit.edu",
    liveDemo: true,
    demoDescription:
      "Experience interactive music generation powered by neural networks. Create unique musical patterns and explore AI-driven sound synthesis in real-time.",
    features: [
      "Real-time audio synthesis",
      "Neural network-based generation",
      "Interactive pattern creation",
      "Multi-track mixing capabilities",
      "MIDI export functionality",
    ],
  },
  {
    title: "MelGen",
    description:
      "Generative melodic model with attention to underlying chord structures",
    image: "/images/melgen.png", // 👈 Place your image in public/images/
    technologies: ["Python", "TensorFlow", "Machine Learning"],
    demoUrl: "https://vr-learning.example.com", // 👈 Your demo URL (optional)
    liveDemo: true, // 👈 Set to true if you have an interactive demo
    demoDescription:
      "Experience interactive 3D models and simulations for STEM education. Navigate through virtual experiments and hands-on learning scenarios.",
    features: [
      "Interactive 3D models",
      "Virtual lab experiments",
      "Progress tracking",
      "Collaborative learning spaces",
    ],
  },
  {
    title: "Artiphon Music Logic",
    description: "Melodic model based on Hidden Trigram Markov model",
    image: "images/midi.webp",
    technologies: ["C++"],
    liveDemo: true,
    demoDescription:
      "Watch the interface adapt to different user interactions and environmental contexts in real-time.",
    features: [
      "Context-aware adaptations",
      "Personalized UI elements",
      "Environmental responsiveness",
      "Usage analytics",
    ],
  },
  {
    title: "Q-tar",
    description: "Reinforcement learning agent with human feedback",
    image: "https://images.unsplash.com/photo-1509528358501-9738f9726ff3",
    technologies: ["PyTorch", "Web Audio API", "Flask", "TensorFlow.js"],
    demoUrl: "https://neural-music.example.com",
    liveDemo: true,
    demoDescription:
      "Create unique musical pieces using deep learning models trained on various musical styles.",
    features: [
      "Real-time music generation",
      "Style transfer",
      "MIDI export",
      "Collaborative composition",
    ],
  },
  {
    title: "Chord Compass",
    description:
      "Motion-responsive sound art installation using computer vision",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    technologies: ["OpenCV", "Max/MSP", "Arduino", "Pure Data"],
    demoUrl: "https://sound-installation.example.com",
    liveDemo: true,
    demoDescription:
      "Experience how movement and gestures transform into dynamic soundscapes.",
    features: [
      "Motion tracking",
      "Real-time audio synthesis",
      "Multi-channel audio",
      "Interactive visualization",
    ],
  },
  {
    title: "Lilypad",
    description:
      "AR application that creates visual representations of music in real space",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    technologies: ["Unity AR", "Vuforia", "C#", "MIDI"],
    demoUrl: "https://ar-music-viz.example.com",
    liveDemo: true,
    demoDescription:
      "See music come to life in augmented reality with interactive 3D visualizations.",
    features: [
      "Real-time visualization",
      "Audio analysis",
      "Gesture control",
      "Spatial audio",
    ],
  },
  {
    title: "Chess Scout Bot",
    description:
      "Interactive chess AI using alpha-beta pruning and advanced heuristics",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    technologies: ["JavaScript", "Chess.js", "Alpha-Beta Pruning", "AI"],
    demoUrl: "https://pmillerschmidt.github.io/Chess-Alpha-Beta/",
    liveDemo: true,
    embedDemo: true,
    isExternalDemo: false,
    demoDescription:
      "Play against an AI opponent that uses advanced game tree search algorithms and positional evaluation",
    features: [
      "Alpha-beta pruning algorithm",
      "Position evaluation",
      "Interactive chess board",
      "Real-time move calculation",
    ],
  },
];
