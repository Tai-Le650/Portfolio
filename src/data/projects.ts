import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ecobuilder",
    title: "EcoBuilder — 3D Ecosystem Simulation",
    description:
      "Interactive 3D ecosystem simulation in Godot modeling predator–prey dynamics, with a voice-responsive AI helper.",
    longDescription:
      "Engineered an interactive 3D ecosystem simulation in Godot, modeling predator–prey dynamics across 7 animals and 5 plant species by integrating Open-Meteo and GBIF data APIs for a realistic global environment. A secure Node.js backend manages API keys and rate limits, while a voice-responsive AI helper uses OpenRouter for responses and ElevenLabs for dynamic text-to-speech. A custom C++ GDExtension built on Miniaudio processes the user's audio input for interactive conversation with the AI.",
    tech: [
      "Godot",
      "GDScript",
      "C++",
      "JavaScript",
      "GDShader",
      "Node.js",
      "OpenRouter",
      "ElevenLabs",
      "Miniaudio",
      "Open-Meteo",
      "GBIF",
    ],
    image: {
      src: "/projects/ecosystem-simulator.webp",
      alt: "EcoBuilder key art: an isometric 3D terrain of rivers, shrubs, and rabbits with species info panels, a planet selector, and two AI helper bots.",
    },
    featured: true,
    date: "2026-05",
    highlights: [
      "3D ecosystem with 7 animals and 5 plants, driven by Open-Meteo and GBIF APIs",
      "Secure Node.js backend for API key management and rate limiting",
      "Voice-responsive AI helper via OpenRouter and ElevenLabs TTS",
      "Custom C++ GDExtension using Miniaudio for live audio input",
    ],
  },
  {
    slug: "llnl-capstone",
    title: "LLNL Senior Capstone — AI for STEM Education",
    description:
      "Senior CSE capstone with Dr. Rakestraw, a senior scientist at Lawrence Livermore National Laboratory, researching how AI can help teach STEM to high-school and undergraduate students.",
    longDescription:
      "Collaborating with Dr. Rakestraw at LLNL on a senior computer science capstone project researching the impact and use of AI in helping educate high-school and undergraduate students about STEM topics. The work centers on developing STEM-related games and tools that integrate AI, LLMs, and APIs to help students understand those topics more deeply.",
    tech: ["AI/LLMs", "APIs", "Game Development", "STEM Education"],
    image: {
      src: "/projects/knowledge-with-ai.webp",
      alt: "Scientific Inquiry With AI portal home screen, with entry points for the full site and the retrieval practice tool.",
    },
    featured: true,
    date: "2026-06",
    highlights: [
      "Research collaboration with Dr. Rakestraw at LLNL",
      "Integrates AI, LLMs, and APIs into educational games",
      "Targets high-school and undergraduate STEM learners",
    ],
  },
  {
    slug: "pre-workout-recipes",
    title: "Pre-Workout Recipes",
    description:
      "A recipe browser for pre-workout mixtures, grouped by caffeine load, with search, ingredient filtering, and per-dose caffeine safety warnings.",
    // TODO: fill in the tech stack for this project — the badge row is hidden while this is empty.
    tech: [],
    image: {
      src: "/projects/pre-workout.webp",
      alt: "Pre-Workout Recipes app showing search and ingredient filters above recipe cards grouped by caffeine load, each listing ingredients, caffeine totals, and mixing instructions.",
    },
    comingSoon: true,
  },
];
