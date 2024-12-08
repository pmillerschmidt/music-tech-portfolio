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
    image: "/images/grooveblocks.png",
    technologies: [
      "Java",
      "Embedded Systems",
      "Digital Signal Processing",
      "C++",
    ],
    demoUrl: "https://grooveblocks.mit.edu/demo",
    projectUrl: "https://grooveblocks.mit.edu",
    videoUrl: "https://example.com/videos/grooveblocks-demo.mp4",
    liveDemo: true,
    demoDescription:
      "Experience interactive music generation powered by neural networks. Create unique musical patterns and explore AI-driven sound synthesis in real-time.",
    detailedDescription: `
      GrooveBlocks is an innovative music education platform that combines hands-on learning with advanced 
      digital signal processing. The system uses modular hardware blocks that students can physically 
      arrange to create musical compositions.

      Each block represents different musical elements:
      - Rhythm blocks for creating beat patterns
      - Melody blocks for pitch sequences
      - Effect blocks for sound modification
      - Control blocks for overall composition structure

      The hardware seamlessly integrates with a companion software that provides real-time 
      visualization and additional composition tools. This hybrid approach makes music theory 
      and composition accessible to students of all skill levels.
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
    title: "MelGen",
    description:
      "Generative melodic model with attention to underlying chord structures",
    image: "/images/melgen.png",
    technologies: ["Python", "TensorFlow", "Machine Learning"],
    demoUrl: "https://melgen.mit.edu/demo",
    projectUrl: "https://melgen.mit.edu",
    videoUrl: "https://example.com/videos/melgen-demo.mp4",
    liveDemo: true,
    demoDescription:
      "Experience real-time melody generation that adapts to chord progressions. Create unique melodic lines that follow musical theory principles.",
    detailedDescription: `
      MelGen is a state-of-the-art melodic generation system that uses deep learning to create 
      musically coherent melodies while respecting underlying chord structures. The system employs 
      a novel attention mechanism that allows it to maintain long-term musical coherence while 
      ensuring local harmony.

      Key technical features:
      - Attention-based neural network architecture
      - Real-time MIDI integration
      - Chord-aware generation pipeline
      - Style transfer capabilities
      - User-controllable parameters for melody characteristics

      The system has been trained on a diverse dataset of musical pieces and can generate melodies 
      in various styles while maintaining musical coherence and theoretical correctness.
    `,
    features: [
      "Real-time melody generation",
      "Chord-aware composition",
      "Style transfer",
      "MIDI export",
      "Interactive parameters",
    ],
  },
  {
    title: "Artiphon Music Logic",
    description: "Advanced melodic generation system using Hidden Trigram Markov models",
    image: "/images/midi.webp",
    technologies: ["C++", "JUCE Framework", "DSP", "MIDI", "Real-time Audio"],
    demoUrl: "https://artiphon.mit.edu/demo",
    projectUrl: "https://artiphon.mit.edu",
    videoUrl: "https://example.com/videos/artiphon-demo.mp4",
    liveDemo: true,
    demoDescription:
      "Experience real-time melodic generation that adapts to your playing style. The system learns from your input and generates complementary musical phrases.",
    detailedDescription: `
      The Artiphon Music Logic project implements a sophisticated melodic generation system 
      using Hidden Trigram Markov models. This system analyzes patterns in musical sequences 
      and generates contextually appropriate melodies in real-time.

      The project focuses on several key innovations:
      - Real-time pattern recognition and generation
      - Adaptive learning from user input
      - Low-latency audio processing
      - Integration with MIDI controllers
      
      Built using C++ and the JUCE framework, the system provides professional-grade 
      audio performance while maintaining the flexibility needed for creative expression.
    `,
    features: [
      "Real-time melody generation",
      "Adaptive learning system",
      "Custom DSP algorithms",
      "MIDI device integration",
      "Low-latency performance",
      "Multi-channel audio support"
    ],
  },
  {
    title: "Q-tar",
    description: "Reinforcement learning agent with human feedback",
    image: "/images/qtar.jpg",
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
    image: "/images/chord-compass.jpg",
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
    image: "/images/lilypad.jpg",
    technologies: ["Unity AR", "Vuforia", "C#", "MIDI"],
    demoUrl: "https://ar-music-viz.example.com",
    projectUrl: "https://lilypad.mit.edu",
    videoUrl: "https://example.com/videos/lilypad-demo.mp4",
    liveDemo: true,
    demoDescription:
      "See music come to life in augmented reality with interactive 3D visualizations.",
    detailedDescription: `
      Lilypad is an innovative augmented reality application that transforms musical data into 
      immersive visual experiences. Using advanced computer vision and spatial audio techniques, 
      the system creates interactive 3D visualizations that respond to music in real-time.

      The project combines several cutting-edge technologies:
      - Real-time audio analysis for feature extraction
      - Spatial mapping for AR placement
      - Interactive gesture recognition
      - Multi-channel audio spatialization
    `,
    features: [
      "Real-time visualization",
      "Audio analysis",
      "Gesture control",
      "Spatial audio",
      "Multi-user interaction",
      "Custom AR markers",
    ],
  },
  {
    title: "Chess Scout Bot",
    description:
      "Interactive chess AI using alpha-beta pruning and advanced heuristics",
    image: "/images/chess-scout.jpg",
    technologies: ["JavaScript", "Chess.js", "Alpha-Beta Pruning", "AI"],
    demoUrl: "https://pmillerschmidt.github.io/Chess-Alpha-Beta/",
    projectUrl: "https://github.com/pmillerschmidt/Chess-Alpha-Beta",
    videoUrl: "https://example.com/videos/chess-demo.mp4",
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
