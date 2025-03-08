import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { playSound, SYSTEM_SOUNDS } from './sound-utils.js';

/**
 * Register all tools with the MCP server
 * @param server The MCP server instance
 */
export function registerTools(server: McpServer): void {
  // Register sound notification tool
  server.tool(
    'play_system_sound',
    'Play a macOS system sound',
    {
      sound: z
        .enum([...SYSTEM_SOUNDS])
        .default('Funk')
        .describe('The macOS system sound to play'),
    },
    async ({ sound }) => {
      const success = await playSound(sound);

      return {
        content: [
          {
            type: 'text',
            text: success
              ? `Successfully played the "${sound}" notification sound.`
              : `Failed to play the "${sound}" notification sound.`,
          },
        ],
      };
    }
  );

  // Register notification sound tool for LLM completion
  server.tool(
    'notify_completion',
    'Play a notification sound when the LLM finishes its reply',
    {
      sound: z
        .enum([...SYSTEM_SOUNDS])
        .default('Funk')
        .describe('The macOS system sound to play'),
    },
    async ({ sound }) => {
      const success = await playSound(sound);

      return {
        content: [
          {
            type: 'text',
            text: success
              ? `🔊 Played completion notification sound: "${sound}"`
              : `Failed to play the "${sound}" notification sound.`,
          },
        ],
      };
    }
  );
}
