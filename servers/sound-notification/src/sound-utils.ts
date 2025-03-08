import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * List of available macOS system sounds
 */
export const SYSTEM_SOUNDS = [
  'Basso',
  'Blow',
  'Bottle',
  'Frog',
  'Funk',
  'Glass',
  'Hero',
  'Morse',
  'Ping',
  'Pop',
  'Purr',
  'Sosumi',
  'Submarine',
  'Tink',
] as const;

/**
 * Type for macOS system sounds
 */
export type SystemSound = (typeof SYSTEM_SOUNDS)[number];

/**
 * Plays a system sound on macOS
 * @param soundName The name of the system sound to play
 * @returns A promise that resolves to true if the sound was played successfully, false otherwise
 */
export async function playSound(soundName: string): Promise<boolean> {
  try {
    await execAsync(`afplay /System/Library/Sounds/${soundName}.aiff`);
    return true;
  } catch (error) {
    console.error('Error playing sound:', error);
    return false;
  }
}
