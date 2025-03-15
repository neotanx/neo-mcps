# 🔊 Sound Notification MCP Server

<div align="center">

![MCP](https://img.shields.io/badge/MCP-Server-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue.svg?style=for-the-badge&logo=typescript)
![macOS](https://img.shields.io/badge/macOS-Compatible-success.svg?style=for-the-badge&logo=apple)

An MCP server that plays a notification sound when an LLM finishes its reply.

</div>

## 📋 Overview

This MCP server provides audio feedback for AI interactions by playing a system sound when an LLM completes its response. It's particularly useful for long-running AI tasks where you might not be actively watching the screen.

## ✨ Features

- 🔔 Plays configurable macOS system sounds
- 🔄 Integrates with any MCP-compatible AI system
- 🪶 Lightweight with minimal dependencies
- ⚡ Fast response time

## 🎵 Available Sounds

The server supports the following macOS system sounds:

| Sound | Description |
|-------|-------------|
| Basso | A deep, serious tone |
| Blow | A blow sound |
| Bottle | A bottle sound |
| Frog | A frog croak |
| Funk | A funky notification sound |
| Glass | A glass breaking sound |
| Hero | A heroic sound |
| Morse | A morse code sound |
| Ping | A ping sound |
| Pop | A pop sound |
| Purr | A purr sound |
| Sosumi | The classic Mac sound |
| Submarine | A submarine ping |
| Tink | A light tink sound |

## 🎬 Video Notifications

The server also supports playing MP4 video notifications. Here's an example of the default notification:

![End Notification Demo](assets/end-notification.gif)

## 📝 Complete Guide: Build and Use

### Step 1: Build the Server

1. Clone the repository (if you haven't already):
   ```bash
   git clone https://github.com/yourusername/neo-mcps.git
   cd neo-mcps/servers/sound-notification
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the server:
   ```bash
   npm run build
   ```

4. Make the built file executable:
   ```bash
   chmod +x build/index.js
   ```

### Step 2: Configure Cursor MCP Server

1. Open Cursor
2. Go to Settings (⚙️) > Extensions > MCP
3. Add a new MCP server with the following configuration:
   - **Name**: Sound Notification
   - **Command**: `/path/to/neo-mcps/servers/sound-notification/build/index.js`
   - **Enabled**: ✅

### Step 3: Add Cursor Rules

Add a rule in Cursor to enable the sound notification at the end of every AI reply:

1. Go to Settings (⚙️) > Extensions > Rules
2. Add a new rule or edit your `cursor_rules.json` file directly
3. Use the following configuration:

```json
{
  "rules": [
    {
      "name": "Play notification sound after AI response",
      "description": "Automatically plays a notification sound when the AI completes its response",
      "trigger": "after_ai_response",
      "action": {
        "type": "function_call",
        "function": "notify_completion",
        "args": {
          "sound": "Funk"
        }
      }
    }
  ]
}
```

You can customize the sound by changing the `"sound"` value to any of the available sounds listed above.

### Step 4: Test the Setup

1. Start a new conversation with the AI assistant in Cursor
2. When the AI completes its response, you should hear the notification sound

## 🔧 Customizing Rules

You can customize when and how the notification sounds play by modifying the rule configuration:

- Change the trigger to respond to different events
- Modify the sound to use different system sounds
- Add conditions to only play sounds in specific situations

Example of a modified rule that plays a different sound:

```json
{
  "name": "Play heroic sound after AI response",
  "description": "Plays a heroic sound when the AI completes its response",
  "trigger": "after_ai_response",
  "action": {
    "type": "function_call",
    "function": "notify_completion",
    "args": {
      "sound": "Hero"
    }
  }
}
```

## ❓ Troubleshooting

If the notification sound is not playing:

1. **Verify Server Status**: Ensure the MCP server is running and enabled in Cursor settings
2. **Check Rule Configuration**: Make sure the rule is properly configured in your Cursor rules
3. **Talk to Your Agent**: Sometimes you need to explicitly tell your AI agent about the rule. Try mentioning:
   ```
   "Please follow my custom instructions to play a notification sound when you complete your response."
   ```
4. **Restart Cursor**: Sometimes a simple restart of Cursor can resolve connection issues
5. **Check System Sound**: Ensure your system volume is turned up and not muted
6. **Permissions**: Make sure Cursor has permission to play sounds on your system

If problems persist, try running the server manually to check for any error messages:

```bash
/path/to/neo-mcps/servers/sound-notification/build/index.js
```

## 🚀 Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the server:
   ```bash
   npm run build
   ```

## 🛠️ Usage

### As a Command Line Tool

After building, you can run the server directly:

```bash
./build/index.js
```

### With an MCP-Compatible AI System

Configure your AI system to use this MCP server for notification sounds. The server exposes the following tools:

- `play_system_sound`: Plays a specified macOS system sound
- `notify_completion`: Plays a notification sound when the LLM completes its response

## 🔧 Configuration

The server uses the following default configuration:

```json
{
  "sound": "Funk"
}
```

You can customize the default sound by modifying the configuration in your MCP client.

## 📦 Dependencies

- `@modelcontextprotocol/sdk`: For MCP integration
- `zod`: For schema validation

## 💻 Development

### Code Structure

- `src/index.ts`: Main entry point
- `src/tools.ts`: MCP tool definitions
- `src/sound-utils.ts`: Utilities for playing system sounds

### Linting and Formatting

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format
```

---

<div align="center">
  
![Made for macOS](https://img.shields.io/badge/Made%20for-macOS-999999.svg?style=for-the-badge&logo=apple)
  
</div> 