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
      "These are some simple projects based on my coursework in Computer Music. My classes focused on the history and technology of the field. We built basic musical machines in SuperCollider that used mealy machines and Markov models to extract stastical information from musical data that was then used to generate probabalistic music sequences.",
    image: "/images/computer-music.png",
    githubUrl: "https://github.com/pmillerschmidt/Musical-Machines",
    technologies: ["SuperCollider", "Markov Models", "Mealy Machines"],
    originalWorks: [
      {
        title: "Hidden Markov Model Generation",
        url: "/audio/markov-song.mp3",
        description:
          "Melody and drum patterns generated using Hidden Markov Models",
        year: "2023",
      },
      {
        title: "Mealy Machine Generation",
        url: "/audio/mealy-song.mp3",
        description: "Melody and drum patterns generated using Mealy Machines",
        year: "2023",
      },
    ],
  },
  {
    title: "Visual Scoring",
    summary: "Collaborative film score composition project",
    description: `This is a visual score I wrote with my friend and collaborator <a href="https://open.spotify.com/artist/1OcU1uVtqF9umURdShNIwP" target="_blank" rel="noopener noreferrer" class="text-primary-500 font-medium no-underline hover:underline hover:decoration-2 hover:text-primary-400 transition-all duration-200">Baltazar Lora</a> for our composition seminar at Yale.`,
    image: "/images/visual-scoring.jpg",
    videoUrl: "https://www.youtube.com/embed/W0jj0Gkzsc8",
    isYoutubeVideo: true,
    technologies: ["Ableton", "Film Scoring", "Composition"],
  },
];

export const projects = [
  {
    title: "Artiphon Music Logic",
    description: "Markov MIDI generator for embedded systems",
    image: "/images/midi.webp",
    technologies: ["C++", "JUCE Framework", "MIDI", "embedded systems"],
    githubUrl: "https://github.com/pmillerschmidt/Artiphon-Music-Logic",
    detailedDescription: `
      <p>For my capstone project at Artiphon, I built a context-sensitive, Markov-based melody generator in C++. The algorithm incorporated a Trigram Hidden Markov Model and user-specified hyper-parameters for precise melodic control. The program parses artist-specific MIDI to emulate their style. For my exploration, I fed it Avicii top-line melodies normalized around A minor. The model is designed to be lightweight and work on the low-memory, embedded systems that Artiphon specializes in.</p>

      <h3 class="text-xl font-semibold mt-6 mb-4">Hyper-parameters</h3>
      <ul class="list-none space-y-2">
        <li><strong>Chord coefficient:</strong> the likelihood of chord tones</li>
        <li><strong>Strong note coefficient:</strong> the likelihood that down beats emphasize chord tones</li>
        <li><strong>Movement hesitance:</strong> the amount of desired movement (jumpiness)</li>
        <li><strong>Movement spread:</strong> essentially the range of the generated melody</li>
        <li><strong>Repetition coefficient:</strong> likelihood of repetition (1 = none, 0 = total repetition)</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-4">Audio Examples</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2"><strong>Pattern Generation Demo:</strong> This example demonstrates the basic pattern generation capabilities using common chord progressions.</p>
          <audio controls src="/audio/artiphon/pattern-demo-1.mp3" class="w-full"></audio>
        </div>
        <div>
          <p class="mb-2"><strong>Adaptive Learning Demo:</strong> This example shows how the system learns from user input and generates complementary patterns.</p>
          <audio controls src="/audio/artiphon/adaptive-demo-1.mp3" class="w-full"></audio>
        </div>
      </div>
    `,
    features: [
      "Real-time pattern recognition",
      "MIDI integration",
      "Adaptive learning",
      "Performance mode",
      "Studio integration",
    ],
  },
  {
    title: "Grooveblocks",
    description: "Interactive music composition tool",
    image: "/images/grooveblocks.png",
    technologies: ["React", "Web Audio API", "TensorFlow.js"],
    demoUrl: "https://grooveblocks.mit.edu",
    projectUrl: "https://grooveblocks.mit.edu",
    githubUrl: "https://github.com/pmillerschmidt/grooveblocks",
    detailedDescription: `An innovative web-based music composition tool that combines machine learning with interactive music creation. Users can create and manipulate musical patterns through an intuitive interface while the system provides intelligent suggestions and complementary patterns.`,
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
    title: "Artiphon Music Logic",
    description: "Markov MIDI generator for embedded systems",
    image: "/images/midi.webp",
    technologies: ["C++", "JUCE Framework", "MIDI", "embedded systems"],
    githubUrl: "https://github.com/pmillerschmidt/Artiphon-Music-Logic",
    detailedDescription: `
      <p>For my capstone project at Artiphon, I built a context-sensitive, Markov-based melody generator in C++. The algorithm incorporated a Trigram Hidden Markov Model and user-specified hyper-parameters for precise melodic control. The program parses artist-specific MIDI to emulate their style. For my exploration, I fed it Avicii top-line melodies normalized around A minor. The model is designed to be lightweight and work on the low-memory, embedded systems that Artiphon specializes in.</p>

      <h3 class="text-xl font-semibold mt-6 mb-4">Hyper-parameters</h3>
      <ul class="list-none space-y-2">
        <li><strong>Chord coefficient:</strong> the likelihood of chord tones</li>
        <li><strong>Strong note coefficient:</strong> the likelihood that down beats emphasize chord tones</li>
        <li><strong>Movement hesitance:</strong> the amount of desired movement (jumpiness)</li>
        <li><strong>Movement spread:</strong> essentially the range of the generated melody</li>
        <li><strong>Repetition coefficient:</strong> likelihood of repetition (1 = none, 0 = total repetition)</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-4">Audio Examples</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2"><strong>Pattern Generation Demo:</strong> This example demonstrates the basic pattern generation capabilities using common chord progressions.</p>
          <audio controls src="/audio/artiphon/pattern-demo-1.mp3" class="w-full"></audio>
        </div>
        <div>
          <p class="mb-2"><strong>Adaptive Learning Demo:</strong> This example shows how the system learns from user input and generates complementary patterns.</p>
          <audio controls src="/audio/artiphon/adaptive-demo-1.mp3" class="w-full"></audio>
        </div>
      </div>
    `,
    features: [
      "Real-time pattern recognition",
      "MIDI integration",
      "Adaptive learning",
      "Performance mode",
      "Studio integration",
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
      
Music generation with machine learning poses unique challenges due to the high dimensionality of audio data and the complex temporal and hierarchical structures inherent in music. MelGen, an AI-powered MIDI generator, addresses these challenges by generating melodies based on harmonic structures. Trained on the Rock Corpus Dataset—comprising harmonic analyses and melodic transcriptions of 20th-century songs—the model uses an LSTM architecture with a single LSTM layer, dropout, and a softmax classifier. Training spanned 50 epochs with a learning rate of 0.001 and a sparse categorical cross-entropy loss function. Despite these efforts, the model initially produced melodies with inconsistencies, such as prolonged notes caused by overestimated continuation probabilities. To mitigate this, continuation reduction was implemented to balance note lengths, resulting in more coherent outputs. Users can interact with MelGen by providing a MIDI file of chords and a seed melody, which the model builds upon to generate new melodies. The project's codebase includes tools for data preprocessing, training, and melody generation, highlighting its end-to-end approach to addressing the complexities of music generation.
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
];
