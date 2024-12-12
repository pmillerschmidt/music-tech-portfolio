// Project Image Guidelines:
// 1. Place your project images in /public/images/ directory
// 2. Use high-quality images (recommended: 1200x800 pixels)
// 3. Supported formats: JPG, PNG, WebP
// 4. Example path: "/images/your-project-name.jpg"

export const musicProjects = [
  {
    title: "Discography",
    summary: "Collection of original works, collaborations, and remixes",
    image: "/images/dj.png",
    technologies: ["Ableton", "Logic Pro", "Pioneer"],
    detailedDescription:
      "I began producing as a sophomore at Yale and it has become one of the greatest joys of my life.         I typically make House or EDM, but I like exploring different sounds and genres. My favorite part of writing music is collaborating with friends. I am lucky to be friends with some many amazing musicians and have worked with acts like Balt Lora, Wacomo, and PJ Frantz. Below is a selection of some originals (all collaborations with my friend Abby Walker) and remixes. Eager to perform and share my love for dance music, I started to DJ in my senior year at Yale. I've played in dingy basements, but also at larger venues like Elm City Tap House and Toads Place in New Haven.",
    originalWorks: [
      {
        title: "Tell Me a Lie (feat. Abby Walker)",
        url: "/audio/Tell Me a Lie (feat. Abby Walker).mp3",
        year: "2023",
      },
      {
        title: "Something (feat. Abby Walker)",
        url: "/audio/electronic-suite.mp3",
        year: "2023",
      },
      {
        title: "Afterlife (feat. Abby Walker)",
        url: "/audio/afterlife (feat. Abby Walker) - lolla bounce.wav",
        year: "2023",
      },
    ],
    remixes: [
      {
        title: "Rasputin remix",
        originalArtist: "Steve Reich",
        url: "/audio/reimagined-patterns.mp3",
        year: "2024",
      },
      {
        title: "Smalltown Boy remix",
        originalArtist: "J.S. Bach",
        url: "/audio/electronic-variations.mp3",
        year: "2023",
      },
    ],
    videoUrl: "https://example.com/videos/neural-synthesis-demo.mp4",
    liveDemo: true,
  },
  {
    title: "Coursework",
    summary: "Collaborative film score composition project",
    description:
      "A collaborative film score composition project with Baltazar Lora",
    detailedDescription: `
    Music classes at Yale were a wonderful oasis of creativity and joy in my otherwise gruelling engineering coursework. After taking introductory theory courses my first year, I took nearly every course I was proficient enough to handle. Some of my favorites include Where Music Theories Collide, American Neighborhood Musics, and Gamelan Ensemble. 
    Below is a visual score I wrote with my friend and collaborator <a href="https://open.spotify.com/artist/1OcU1uVtqF9umURdShNIwP" target="_blank" rel="noopener noreferrer" class="text-primary-500 font-medium no-underline hover:underline hover:decoration-2 hover:text-primary-400 transition-all duration-200">Baltazar Lora</a> for our composition seminar.`,
    image: "/images/visual-scoring.jpg",
    videoUrl: "https://www.youtube.com/embed/W0jj0Gkzsc8",
    isYoutubeVideo: true,
    technologies: ["Ableton", "Film Scoring", "Composition"],
  },
  {
    title: "Computer Music",
    summary: "Exploring musical machines and probabilistic composition",
    detailedDescription:
      "After taking a class on electronic dance music, I was hungry to dive deeper into this intersection of interests. The next few years, I took several classes in computer music, including algorithmic music, sound synthesis, and electronic instrument design. In these classes I learned about the history of the field and how to build computer music systems in Max/MSP and SuperCollider. While a few cherished projects have been lost to time, I have a few recordings of some projects. Below are some samplings from a project I did for algorithmic music. I built mealy machines and Markov models to extract stastical information from musical data that was then used to generate probabalistic music sequences.",
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
];

export const projects = [
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
    title: "Artiphon Music Logic",
    description: "Markov Melody generator for embedded systems",
    image: "/images/midi.webp",
    technologies: ["C++", "MIDI", "embedded systems"],
    githubUrl: "https://github.com/pmillerschmidt/Artiphon-Music-Logic",
    detailedDescription: `
      <p>For my capstone project at Artiphon, I built a context-sensitive, Markov-based melody generator in C++. The algorithm incorporated a Trigram Hidden Markov Model and user-specified temperatures for precise melodic control. The program parses artist-specific MIDI to emulate their style. For my exploration, I fed it Avicii top-line melodies normalized around A minor. The model is designed to be lightweight and work on the low-memory, embedded systems that Artiphon specializes in. It was an interesting challenge in building statistical models that are simple, but still create novel and reasonable music.</p>

      <h3 class="text-xl font-semibold mt-6 mb-4">User controls</h3>
      <ul class="list-none space-y-2">
        <li><strong>Chord coefficient:</strong> the likelihood of chord tones</li>
        <li><strong>Strong note coefficient:</strong> the likelihood that down beats emphasize chord tones</li>
        <li><strong>Movement hesitance:</strong> the amount of desired movement (jumpiness)</li>
        <li><strong>Movement spread:</strong> essentially the range of the generated melody</li>
        <li><strong>Repetition coefficient:</strong> likelihood of repetition (1 = none, 0 = total repetition)</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-4">Audio Examples</h3>
      Here are a few examples of the generator creating top-line melodies. The temperatures are displayed in the title. The drum/bass/chords are just for reference, the lead melody is the generated section
      <div class="space-y-4">
        <div>
          <p class="mb-2"><strong>CSMG-Avicii-{4,7,3,12,0}</strong></p>
          <audio controls src="/audio/artiphon/CSMG-Avicii-{4,7,3,12,0}.mp3" class="w-full"></audio>
        </div>
        <div>
          <p class="mb-2"><strong>CSMG-Avicii-{5, 6, 8, 8, 0.1}</strong></p>
          <audio controls src="/audio/artiphon/CSMG-Avicii-{5, 6, 8, 8, 0.1}.mp3" class="w-full"></audio>
        </div>
        <div>
          <p class="mb-2"><strong>CSMG-Avicii-{10,4,15,15,0.6}</strong></p>
          <audio controls src="/audio/artiphon/CSMG-Avicii-{10,4,15,15,0.6}.mp3" class="w-full"></audio>
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
    title: "Q-tar",
    description: "Reinforcement learning for melody generation",
    image: "/images/Qtar.png",
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
    description: "chord progression neural network",
    image: "/images/next-chord.png",
    technologies: ["TensorFlow", "Machine Learning", "React", "Web Audio API"],
    demoUrl: "https://pmillerschmidt.github.io/ChordCompass/",
    projectUrl: "https://pmillerschmidt.github.io/ChordCompass/",
    githubUrl: "https://github.com/pmillerschmidt/ChordCompass",
    videoUrl: "/videos/nextchord-demo.mp4",
    liveDemo: true,
    detailedDescription: `
      nextChord is a chord progression neural network trained on the <a href="https://paperswithcode.com/dataset/niko-chord-progression-dataset#:~:text=The%20Niko%20Chord%20Progression%20Dataset%20is%20used%20in%20AccoMontage2.,have%20an%20'Unknown'%20style.)" target="_blank" rel="noopener noreferrer" class="text-primary-500 font-medium no-underline hover:underline hover:decoration-2 hover:text-primary-400 transition-all duration-200">Niko Chord Progression Dataset</a> which contains 5k+ chord progressions. It pre-processes progressions into sequences of roman numerals, and then uses a LSTM to predict the next chord in the sequence. There is a temperature parameter that controls the amount of randomness in the prediction. I also built a web interface and API to inference the model. The next steps of this project are to integrate a more diverse dataset with more complicated progressions and a larger vocabulary of chords to predict. 
    `,
    features: ["PyTorch", "AI chord generation", "React", "API Design"],
  },
  {
    title: "Chess Engine Design",
    description:
      "Minimax chess engine using alpha-beta pruning and advanced heuristics",
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
