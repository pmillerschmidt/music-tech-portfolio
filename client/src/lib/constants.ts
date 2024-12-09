// Project Image Guidelines:
// 1. Place your project images in /public/images/ directory
// 2. Use high-quality images (recommended: 1200x800 pixels)
// 3. Supported formats: JPG, PNG, WebP
// 4. Example path: "/images/your-project-name.jpg"

export const musicProjects = [
  {
    title: "Discography",
    summary: "Collection of original works, collaborations, and remixes",
    image: "/images/performance.png",
    technologies: ["Ableton", "Logic Pro", "Pioneer"],
    description:
      "A comprehensive collection of my musical works spanning various genres and styles. From original compositions to collaborative projects and innovative remixes, this portfolio showcases my journey in music production and sound design.",
    originalWorks: [
      {
        title: "Tell Me a Lie (feat. Abby Walker)",
        url: "/audio/synthesis-1.mp3",
        year: "2023",
      },
      {
        title: "Something (feat. Abby Walker)",
        url: "/audio/electronic-suite.mp3",
        year: "2023",
      },
      {
        title: "Afterlife (feat. Abby Walker)",
        url: "/audio/electronic-suite.mp3",
        year: "2023",
      },
      {
        title: "Mi Vida",
        url: "/audio/electronic-suite.mp3",
        year: "2023",
      },
    ],
    remixes: [
      {
        title: "Reimagined Patterns",
        description:
          "A reinterpretation of classical minimalist works through electronic means",
        originalArtist: "Steve Reich",
        url: "/audio/reimagined-patterns.mp3",
        year: "2024",
      },
      {
        title: "Electronic Variations",
        description:
          "Modern take on baroque counterpoint using synthesis techniques",
        originalArtist: "J.S. Bach",
        url: "/audio/electronic-variations.mp3",
        year: "2023",
      },
    ],
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
    summary: "Exploring musical machines and probabilistic composition",
    description:
      "These are some simple projects based on my coursework in Computer Music. My classes focused on the history and technology of the field. We built basic musical machines in SuperCollider that used mealy machines and Markov models to extract stastical information from musical data that was then used to generate probabalistic music sequences. While the models involved are quite simple, they are well-suited to capture basic short-term coherence.",
    image: "/images/computer-music.png",
    githubUrl: "https://github.com/pmillerschmidt/Musical-Machines",
    technologies: ["SuperCollider", "Markov Models", "Mealy Machines"],
    audioFiles: [
      {
        title: "Hidden Markov Model Melody/Drum generation",
        description: "Generated using HMM",
        url: "/audio/markov-song.mp3",
      },
      {
        title: "Mealy Machine Melody/Drum generation",
        description: "Generated using Mealy machine",
        url: "/audio/mealy-song.mp3",
      },
    ],
  },
  {
    title: "Visual Scoring",
    summary: "Collaborative film score composition project",
    description:
      "An innovative approach to film scoring that combines visual elements with musical composition. This project explores the intersection of visual art and musical expression through a unique collaborative process.",
    image: "/images/visual-scoring.jpg",
    videoUrl: "https://www.youtube.com/embed/W0jj0Gkzsc8",
    isYoutubeVideo: true,
    technologies: [
      "Ableton",
      "Film Scoring",
      "Composition",
      "Max/MSP",
      "Visual Programming",
    ],
    detailedDescription: `This is a visual score I wrote with my friend and collaborator <a href="https://open.spotify.com/artist/1OcU1uVtqF9umURdShNIwP" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Baltazar Lora</a> for our composition seminar at Yale. The project explores innovative ways of representing musical ideas through visual elements, creating a unique intersection between visual art and musical composition.

The score incorporates:
- Real-time visual feedback
- Interactive elements that respond to musical input
- Custom-built Max/MSP patches for visual processing
- Collaborative performance capabilities

This experimental approach to scoring allows for a more intuitive and expressive way of composing and performing music, while creating an engaging visual experience for the audience.`,
    features: [
      "Real-time visual feedback",
      "Interactive score elements",
      "Custom Max/MSP patches",
      "Collaborative performance mode",
      "Visual programming interface",
    ],
  },
  {
    title: "Music Theory Research",
    summary: "AI-powered music production and mastering system",
    description:
      "AI-powered system for automated mixing, mastering, and sound design",
    image: "/images/smart-production.jpg",
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
    summary: "Context-aware adaptive music generation system",
    description: "Context-aware AI systems for dynamic soundtrack generation",
    image: "/images/adaptive-music.jpg",
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
    githubUrl: "https://github.com/pmillerschmidt/GrooveBlocks",
    videoUrl: "/videos/grooveblocks-demo.mp4",
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
    description: "Generative melodic/harmonic LSTM model",
    image: "/images/melgen.png",
    technologies: ["Python", "TensorFlow", "Machine Learning"],
    demoUrl: "https://melgen.mit.edu/demo",
    projectUrl: "https://melgen.mit.edu",
    githubUrl: "https://github.com/pmillerschmidt/MelGen",
    videoUrl: "https://www.youtube.com/embed/VGp2k8LJc3M",
    isYoutubeVideo: true,
    liveDemo: true,
    demoDescription:
      "Experience real-time melody generation that adapts to chord progressions. Create unique melodic lines that follow musical theory principles.",
    detailedDescription: `
      
Music generation with machine learning poses unique challenges due to the high dimensionality of audio data and the complex temporal and hierarchical structures inherent in music. MelGen, an AI-powered MIDI generator, addresses these challenges by generating melodies based on harmonic structures. Trained on the Rock Corpus Dataset—comprising harmonic analyses and melodic transcriptions of 20th-century songs—the model uses an LSTM architecture with a single LSTM layer, dropout, and a softmax classifier. Training spanned 50 epochs with a learning rate of 0.001 and a sparse categorical cross-entropy loss function. Despite these efforts, the model initially produced melodies with inconsistencies, such as prolonged notes caused by overestimated continuation probabilities. To mitigate this, continuation reduction was implemented to balance note lengths, resulting in more coherent outputs. Users can interact with MelGen by providing a MIDI file of chords and a seed melody, which the model builds upon to generate new melodies. The project’s codebase includes tools for data preprocessing, training, and melody generation, highlighting its end-to-end approach to addressing the complexities of music generation.
    `,
    features: [
      "Real-time melody generation",
      "Chord-aware composition",
      "Machine Learning",
      "MIDI export",
      "Interactive parameters",
    ],
  },
  {
    title: "Artiphon Music Logic",
    summary: "MIDI-based pattern generation system for interactive music creation",
    description: "A musical pattern generation system built for use with the Artiphon MIDI controller. The project uses Hidden Trigram Markov models to analyze and create melodic patterns, providing an interactive and adaptive music generation experience.",
    image: "/images/midi.webp",
    technologies: ["C++", "JUCE Framework", "MIDI"],
    githubUrl: "https://github.com/pmillerschmidt/Artiphon-Music-Logic",
    detailedDescription: `
      The Artiphon Music Logic project is an innovative system that combines pattern recognition with real-time music generation. The system learns from the user's playing style and generates complementary musical phrases in real-time, making it suitable for both live performance and studio environments.

      The project features several key components:
      - Pattern Analysis: Uses Hidden Trigram Markov models to understand musical patterns
      - Adaptive Learning: Continuously learns from user input to improve pattern generation
      - Real-time Processing: Generates complementary phrases during live performance
      - MIDI Integration: Seamless integration with the Artiphon MIDI controller

      The system demonstrates various capabilities through the included audio demonstrations, from basic pattern generation to complex adaptive performances. Each audio example showcases different aspects of the system's capabilities, from simple pattern recognition to complex adaptive learning.`,
    originalWorks: [
      {
        title: "Basic Pattern Generation",
        url: "/audio/artiphon/pattern-demo-1.mp3",
        description:
          "Demonstration of the basic pattern generation capabilities using common chord progressions",
        year: "2023",
      },
      {
        title: "Adaptive Pattern Learning",
        url: "/audio/artiphon/adaptive-demo-1.mp3",
        description:
          "Example of the system learning from user input and generating complementary patterns",
        year: "2023",
      },
      {
        title: "Complex Pattern Generation",
        url: "/audio/artiphon/pattern-demo-2.mp3",
        description:
          "Advanced pattern generation with multiple simultaneous voices and rhythmic variation",
        year: "2023",
      },
      {
        title: "Live Performance Demo",
        url: "/audio/artiphon/live-demo-1.mp3",
        description:
          "Recording of a live performance using the system with the Artiphon MIDI controller",
        year: "2023",
      },
    ],
  },
  {
    title: "Q-tar",
    description: "Reinforcement learning agent with human feedback",
    image: "/images/qtar.jpg",
    technologies: ["PyTorch", "Web Audio API", "Flask", "TensorFlow.js"],
    demoUrl: "https://neural-music.example.com",
    projectUrl: "https://qtar.mit.edu",
    githubUrl: "https://github.com/pmillerschmidt/qtar",
    videoUrl: "/videos/qtar-demo.mp4",
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
    title: "nextChord",
    description:
      "AI-powered chord progression generator with real-time synthesis",
    image: "/images/next-chord.png",
    technologies: ["TensorFlow", "Machine Learning", "React", "Web Audio API"],
    demoUrl: "https://pmillerschmidt.github.io/ChordCompass/",
    projectUrl: "https://pmillerschmidt.github.io/ChordCompass/",
    githubUrl: "https://github.com/pmillerschmidt/ChordCompass",
    videoUrl: "/videos/nextchord-demo.mp4",
    liveDemo: true,
    demoDescription:
      "Experience real-time chord progression generation powered by machine learning, with instant audio playback and visualization",
    detailedDescription: `
      nextChord is an innovative web application that combines artificial intelligence with music theory 
      to generate meaningful and creative chord progressions. The system learns from a vast dataset of 
      musical pieces to understand harmonic relationships and musical structure.

      Key features include:
      - AI-powered chord progression generation
      - Real-time audio synthesis and visualization
      - Style-based generation (Jazz, Classical, Pop)
      - MIDI export functionality
      - Interactive progression editing
      
      The application uses TensorFlow.js for client-side AI processing and Web Audio API for 
      high-quality sound synthesis, providing a responsive and professional experience.
    `,
    features: [
      "AI chord generation",
      "Real-time audio synthesis",
      "Multiple musical styles",
      "MIDI export capability",
      "Interactive editing",
    ],
  },
  {
    title: "Chess Engine Design",
    description:
      "Interactive minimax chess engine using alpha-beta pruning and advanced heuristics",
    image: "/images/minimax.png",
    technologies: [
      "JavaScript",
      "Python",
      "Chess.js",
      "Alpha-Beta Pruning",
      "Tree Search",
    ],
    demoUrl: "https://pmillerschmidt.github.io/Chess-Alpha-Beta/",
    projectUrl: "https://pmillerschmidt.github.io/Chess-Alpha-Beta/",
    githubUrl: "https://github.com/pmillerschmidt/Chess-Alpha-Beta",
    videoUrl: "https://youtube.com/watch?v=fieytpoR_04",
    liveDemo: true,
    isYoutubeVideo: true,
    demoDescription:
      "Play against an AI opponent that uses advanced game tree search algorithms and positional evaluation",
    features: [
      "Alpha-beta pruning algorithm",
      "Position evaluation",
      "Interactive chess board",
      "Real-time move calculation",
    ],
  },
  {
    title: "Brookline Teen Center Makerspace",
    description: "Makerspace and program",
    image: "/images/makerspace.jpg",
    technologies: [
      "JavaScript",
      "Python",
      "Chess.js",
      "Alpha-Beta Pruning",
      "Tree Search",
    ],
    demoUrl: "https://pmillerschmidt.github.io/Chess-Alpha-Beta/",
    projectUrl: "https://pmillerschmidt.github.io/Chess-Alpha-Beta/",
    githubUrl: "https://github.com/pmillerschmidt/Chess-Alpha-Beta",
    videoUrl: "/videos/chess-demo.mp4",
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
