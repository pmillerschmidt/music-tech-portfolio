// Project Image Guidelines:
// 1. Place your project images in /public/images/ directory
// 2. Use high-quality images (recommended: 1200x800 pixels)
// 3. Supported formats: JPG, PNG, WebP
// 4. Example path: "/images/your-project-name.jpg"

export const projects = [
  {
    title: "Neural Music Synthesis",
    description: "Real-time audio synthesis and music generation using deep learning models",
    image: "/images/grooveblocks.jpg", // Place an image named grooveblocks.jpg in public/images/
    technologies: ["TensorFlow", "Python", "Web Audio API", "React"],
    demoUrl: "https://grooveblocks.mit.edu",
    liveDemo: true,
    demoDescription: "Experience interactive music generation powered by neural networks. Create unique musical patterns and explore AI-driven sound synthesis in real-time.",
    features: [
      "Real-time audio synthesis",
      "Neural network-based generation",
      "Interactive pattern creation",
      "Multi-track mixing capabilities",
      "MIDI export functionality"
    ]
  },
  {
    title: "Immersive Learning Platform",
    description: "Virtual reality-based educational platform for interactive STEM learning",
    image: "/images/vr-learning.jpg", // 👈 Place your image in public/images/
    technologies: ["Unity", "C#", "WebXR", "Three.js"],
    demoUrl: "https://vr-learning.example.com", // 👈 Your demo URL (optional)
    liveDemo: true, // 👈 Set to true if you have an interactive demo
    demoDescription: "Experience interactive 3D models and simulations for STEM education. Navigate through virtual experiments and hands-on learning scenarios.",
    features: [
      "Interactive 3D models",
      "Virtual lab experiments",
      "Progress tracking",
      "Collaborative learning spaces"
    ]
  },
  {
    title: "Adaptive Interface System",
    description: "Context-aware UI that adapts to user behavior and environmental conditions",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    technologies: ["React", "TypeScript", "Machine Learning", "Node.js"],
    demoUrl: "https://adaptive-ui.example.com",
    liveDemo: true,
    demoDescription: "Watch the interface adapt to different user interactions and environmental contexts in real-time.",
    features: [
      "Context-aware adaptations",
      "Personalized UI elements",
      "Environmental responsiveness",
      "Usage analytics"
    ]
  },
  {
    title: "Neural Music Generator",
    description: "AI-powered system for generating original musical compositions",
    image: "https://images.unsplash.com/photo-1509528358501-9738f9726ff3",
    technologies: ["PyTorch", "Web Audio API", "Flask", "TensorFlow.js"],
    demoUrl: "https://neural-music.example.com",
    liveDemo: true,
    demoDescription: "Create unique musical pieces using deep learning models trained on various musical styles.",
    features: [
      "Real-time music generation",
      "Style transfer",
      "MIDI export",
      "Collaborative composition"
    ]
  },
  {
    title: "Interactive Sound Installation",
    description: "Motion-responsive sound art installation using computer vision",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    technologies: ["OpenCV", "Max/MSP", "Arduino", "Pure Data"],
    demoUrl: "https://sound-installation.example.com",
    liveDemo: true,
    demoDescription: "Experience how movement and gestures transform into dynamic soundscapes.",
    features: [
      "Motion tracking",
      "Real-time audio synthesis",
      "Multi-channel audio",
      "Interactive visualization"
    ]
  },
  {
    title: "Augmented Reality Music Visualization",
    description: "AR application that creates visual representations of music in real space",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
    technologies: ["Unity AR", "Vuforia", "C#", "MIDI"],
    demoUrl: "https://ar-music-viz.example.com",
    liveDemo: true,
    demoDescription: "See music come to life in augmented reality with interactive 3D visualizations.",
    features: [
      "Real-time visualization",
      "Audio analysis",
      "Gesture control",
      "Spatial audio"
    ]
  }
];

export const researchInterests = [
  {
    title: "Human-AI Interaction",
    description: "Exploring novel ways for humans and AI systems to collaborate creatively and effectively"
  },
  {
    title: "Adaptive Interfaces",
    description: "Developing interfaces that dynamically adjust to user needs and context"
  },
  {
    title: "Extended Reality",
    description: "Investigating the potential of AR/VR for learning and creative expression"
  },
  {
    title: "Computational Creativity",
    description: "Studying how AI can enhance human creative processes"
  }
];

export const publications = [
  {
    title: "Adaptive Interfaces for Creative AI Collaboration",
    authors: ["Your Name", "Collaborator One", "Collaborator Two"],
    venue: "ACM CHI Conference on Human Factors in Computing Systems",
    year: 2023
  },
  {
    title: "Virtual Reality in STEM Education: A Systematic Review",
    authors: ["Your Name", "Collaborator Three"],
    venue: "IEEE Transactions on Learning Technologies",
    year: 2022
  },
  {
    title: "Context-Aware Computing in Interactive Environments",
    authors: ["Your Name", "Collaborator Four", "Collaborator Five"],
    venue: "International Journal of Human-Computer Studies",
    year: 2022
  }
];
