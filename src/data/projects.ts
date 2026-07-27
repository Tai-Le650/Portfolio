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
      "Senior CSE capstone with Dr. Rakestraw a seinor scientist at Lawrence Livermore National Laboratory researching how AI can help teach STEM to high-school and undergraduate students.",
    longDescription:
      "Collaborating with Dr. Rakestraw from LLNL for a senior computer science capstone project to research the impact and use of AI in helping educate high school and undergraduate students about STEM topics. The work centers on developing STEM-related games that integrate AI, LLMs, and APIs to help students understand STEM topics more deeply.",
    tech: ["AI/LLMs", "APIs", "Game Development", "STEM Education"],
    featured: true,
    date: "2026-06",
    highlights: [
      "Research collaboration with Dr. Rakestraw at LLNL",
      "Integrates AI, LLMs, and APIs into educational games",
      "Targets high-school and undergraduate STEM learners",
    ],
  },
  {
    slug: "project-in-progress",
    title: "Project in Progress",
    description:
      "A new project is currently in development. More details will be shared soon.",
    tech: ["Technologies to be announced"],
    comingSoon: true,
  },
];
