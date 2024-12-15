// Project Image Guidelines:
// 1. Place your project images in /public/images/ directory
// 2. Use high-quality images (recommended: 1200x800 pixels)
// 3. Supported formats: JPG, PNG, WebP
// 4. Example path: "/images/your-project-name.jpg"

export const publications = [];
export const researchInterests = [];

export const musicProjects = [
  {
    title: "Discography",
    summary: "Original works, collaborations, and remixes",
    image: "/images/dj.png",
    technologies: ["Ableton", "Logic Pro", "Pioneer"],
    detailedDescription:
      "I began producing as a sophomore at Yale and it has become one of the greatest joys of my life. I typically make House or EDM, but I like exploring different sounds and genres. My favorite part of writing music is collaborating with friends. I am lucky to be friends with some many amazing musicians and have worked with acts like Balt Lora, Wacomo, and PJ Frantz. Below is a selection of some originals (all collaborations with my friend Abby Walker) and remixes. Eager to perform and share my love for dance music, I started to DJ in my senior year at Yale. I've played in dingy basements, but also at larger venues like Elm City Tap House and Toads Place in New Haven.",
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
    performanceImage: {
      url: "/images/dj-performance.png",
      caption:
        "DJ Set (left), Toad's Place with PJ Frantz (upper right), student musical festival  with Abby Walker (lower right)",
    },
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
    summary: "Musical machines and probabilistic composition",
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
    description: "Combinatory blocks for composition-based learning",
    image: "/images/grooveblocks.png",
    technologies: [
      "React",
      "Web Audio API",
      "TensorFlow.js",
      "Node.js",
      "Express",
      "WebMIDI API",
    ],
    demoUrl: "https://grooveblocks.mit.edu",
    projectUrl: "https://grooveblocks.mit.edu",
    githubUrl: "https://github.com/pmillerschmidt/grooveblocks",

    detailedDescription: `
      <p>GrooveBlocks reimagines music education through tangible, interactive building blocks that make composition accessible from day one. Traditional music education often prioritizes technical proficiency over creative expression, leading to high dropout rates and missed opportunities for musical discovery. Instead of following the conventional path of years of practice before creation, GrooveBlocks lets students start creating immediately through an intuitive system of modular blocks that control different musical elements.</p> 
      <div>
        <img src="/images/grooveblocks/grooveblocks-design.png" alt="Design" class="w-full rounded-lg shadow-lg mb-2" />
        <p class="text-sm text-white/60 text-center">Grooveblocks initial design conceptions</p>
      </div>
      
      <p>The hardware consists of connectable blocks for rhythm, melody, harmony, and effects, each equipped with sensors that translate physical manipulation into musical elements. These blocks interface with our companion app, which features three seamlessly integrated modes: Learn, Jam, and Create. The Learn mode uses AI to adapt to each student's interests and progress, introducing new concepts when they're ready. Jam mode facilitates improvisation and collaboration, while Create mode offers varying levels of compositional guidance based on the student's experience.</p>

    <div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
      <div style="flex: 1;">
        <img src="/images/grooveblocks/grooveblocks-ui.png" alt="Grooveblocks Interface" style="width: 100%; height: auto; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-bottom: 0.5rem;" />
        <p style="font-size: 0.875rem; color: rgba(255, 255, 255, 0.6); text-align: center;">Jam Mode UI & Prospective UI Design</p>
      </div>
    </div>
    
    <p>What sets GrooveBlocks apart is its adaptive approach to complexity. Rather than overwhelming beginners with full musical complexity (like a piano's 88 keys or a DAW's countless controls), the system introduces elements gradually as students develop. This balanced approach keeps students engaged and challenged at the right level, allowing them to discover their musical identity while building technical skills. Through middle school testing and collaboration with music educators, we refined this approach to ensure it keeps students engaged while fostering genuine musical growth. While we reached testing agreements with the Music for Young Children foundation, we paused the project indefinitely as we returned to our respective universities. While we weren't able to film demos in schools, below are some videos of the blocks in action.</p>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/x5WkWsCPJ6E?si=dzzrCyO7XtQcbLTQ" title="YouTube video player" frameborder="0" style="display: block; margin: 0 auto;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    `,
    features: [
      "Interactive block-based composition",
      "Real-time audio processing",
      "Collaborative music creation",
      "Multiple synthesis engines",
      "Rich visual and haptic",
    ],
  },
  {
    title: "MelGen",
    description: "Generative melodic/harmonic LSTM model",
    image: "/images/melgen.png",
    technologies: ["Python", "TensorFlow", "Machine Learning"],
    demoUrl: "https://melgen.mit.edu/demo",
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
    detailedDescription: `
      <p>Q-tar is a reinforcement learning-based melody generation system that learns to create melodies by interacting with a musical environment. Unlike traditional supervised learning approaches, Q-tar learns through exploration and feedback, similar to how a musician might learn through practice and experimentation.</p>

      <p>The system uses a deep Q-learning network that receives rewards based on music theory rules and aesthetic preferences. The agent learns to navigate a state space of musical possibilities, where states represent musical context (current chord, previous notes, rhythm) and actions represent possible next notes. The reward function incorporates both local coherence (how well a note fits with its immediate context) and global structure (adherence to musical form and development).</p>

      <p>Key technical features include:</p>
      <ul class="list-disc pl-6 space-y-2 text-white/80">
        <li>Custom musical environment built with PyTorch</li>
        <li>Deep Q-Network with both convolutional and recurrent layers</li>
        <li>Prioritized experience replay for efficient learning</li>
        <li>Web interface for real-time interaction and generation</li>
      </ul>

      <p>The project demonstrates how reinforcement learning can capture both the rules and creativity of music composition, leading to melodies that are both theoretically sound and musically interesting.</p>
    `,
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
    projectUrl: "https://pmillerschmidt.github.io/ChordCompass/",
    githubUrl: "https://github.com/pmillerschmidt/ChordCompass",
    liveDemo: true,
    detailedDescription: `
      nextChord is a chord progression neural network trained on the <a href="https://paperswithcode.com/dataset/niko-chord-progression-dataset#:~:text=The%20Niko%20Chord%20Progression%20Dataset%20is%20used%20in%20AccoMontage2.,have%20an%20'Unknown'%20style.)" target="_blank" rel="noopener noreferrer" class="text-primary-500 font-medium no-underline hover:underline hover:decoration-2 hover:text-primary-400 transition-all duration-200">Niko Chord Progression Dataset</a> which contains 5k+ chord progressions. It pre-processes progressions into sequences of roman numerals, and then uses a LSTM to predict the next chord in the sequence. There is a temperature parameter that controls the amount of randomness in the prediction. I also built a web interface and API to inference the model. The next steps of this project are to integrate a more diverse dataset with varied progressions and a larger vocab of chords to predict.

    <iframe width="560" height="315" src="https://www.youtube.com/embed/F9KaOG3SCbU?si=DCH0-pj5UwgRz2yw" style="display: block; margin: 0 auto;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `,
    features: ["PyTorch", "AI chord generation", "React", "API Design"],
  },
  {
    title: "Chess Engine Design",
    description: "Minimax chess engine with advanced heuristics",
    image: "/images/minimax.png",
    technologies: [
      "JavaScript",
      "Alpha-Beta Pruning",
      "Tree Search"
    ],
    projectUrl: "https://pmillerschmidt.github.io/Chess-Alpha-Beta/",
    githubUrl: "https://github.com/pmillerschmidt/Chess-Alpha-Beta",
    videoUrl: "https://youtube.com/watch?v=fieytpoR_04",
    liveDemo: true,
    isYoutubeVideo: true,
    demoDescription:
      "Play against an AI opponent that uses advanced game tree search algorithms and positional evaluation",
    detailedDescription: `
      <p>This chess engine implements the minimax algorithm with Alpha-Beta pruning and advanced heuristics. The project was my final project for Computational Intelligence for Games. I was interested in the application of tree search algorithms in the context of perfect information games like chess. </p>

      <h3 class="text-2xl font-semibold mb-4 text-white pl-8">Engine Evaluation Strategy</h3>
      <ul class="list-disc pl-12 space-y-3 text-white/80 mb-4">
        <li>Material gain (does the move gain/lose a piece)</li>
        <li>Material balance (piece values and their relative worth)</li>
        <li>Piece position evaluation (using piece-square tables)</li>
        <li>Pawn structure analysis</li>
        <li>King safety assessment</li>
        <li>Control of central squares</li>
      </ul>

      <h3 class="text-2xl font-semibold mb-4 text-white pl-8">Performance Optimizations</h3>
      <ul class="list-disc pl-12 space-y-3 text-white/80 mb-4">
        <li>Alpha-Beta pruning to reduce the search space</li>
        <li>Move ordering to improve pruning efficiency</li>
        <li>Scout implementation to reduce search time</li>
        <li>Iterative deepening for better time management</li>
      </ul>

      <p>The web interface provides a clean, responsive chessboard with multiple engine levels. Players can choose to play a random, greedy, minimax, or scout agent.</p>
    `,
    features: [
      "Minimax algorithm",
      "Alpha-beta pruning",
      "Position evaluation",
      "Scout optimization"
    ],
  },
];