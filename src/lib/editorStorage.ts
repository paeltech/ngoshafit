/**
 * Utility functions for saving and loading editor content from the server
 */

/**
 * Save editor content to the server file
 * @param content The editor content to save
 * @returns Promise that resolves when the content is saved
 */
export async function saveContentToFile(content: string): Promise<void> {
  try {
    const response = await fetch('/api/editor-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to save content');
    }
  } catch (error) {
    console.error('Error saving content to file:', error);
    throw error;
  }
}

/**
 * Load editor content from the server file
 * @returns Promise that resolves with the content or null if not found
 */
export async function loadContentFromFile(): Promise<string | null> {
  try {
    const response = await fetch('/api/editor-content');
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to load content');
    }
    
    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error('Error loading content from file:', error);
    return null;
  }
}
