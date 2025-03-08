# Neo-MCPs

<div align="center">

![MCP](https://img.shields.io/badge/MCP-Servers-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci16YXAiPjxwb2x5Z29uIHBvaW50cz0iMTMgMiAzIDE0IDEyIDE0IDExIDIyIDIxIDEwIDEyIDEwIDEzIDIiPjwvcG9seWdvbj48L3N2Zz4=)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/)
![Personal Project](https://img.shields.io/badge/Personal-Project-purple.svg?style=for-the-badge)

A collection of on-demand Model Context Protocol (MCP) servers for enhancing AI interactions.

</div>

## 🚀 Overview

This repository contains custom MCP servers that can be used to extend the capabilities of AI assistants. Each server provides specific functionality that can be integrated with MCP-compatible AI systems.

## 🔌 Servers

<details open>
<summary><b>🔊 Sound Notification</b></summary>
<br>

A simple MCP server that plays a notification sound when an LLM finishes its reply. This helps provide audio feedback when interacting with AI assistants.

**Features:**
- 🎵 Plays configurable system sounds
- 🔄 Integrates seamlessly with MCP-compatible AI systems
- 🪶 Lightweight and easy to use

```bash
# Quick install
cd servers/sound-notification && npm install
```

</details>

## 🏁 Getting Started

### Prerequisites

- 📦 Node.js (v16 or higher)
- 📦 npm or yarn
- 🤖 An MCP-compatible AI system

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/neo-mcps.git
   cd neo-mcps
   ```

2. Install dependencies for a specific server:
   ```bash
   cd servers/sound-notification
   npm install
   ```

3. Build the server:
   ```bash
   npm run build
   ```

4. Use the server with your MCP-compatible AI system.

## 💻 Development

Each server is contained in its own directory under the `servers/` folder. To create a new server:

1. Create a new directory under `servers/`
2. Initialize a new Node.js project
3. Implement the MCP server functionality
4. Add appropriate documentation

## 🙏 Acknowledgments

- [Model Context Protocol](https://github.com/anthropics/model-context-protocol) for providing the framework that makes these servers possible

---

<div align="center">
  
![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F-red.svg?style=for-the-badge)
  
</div> 