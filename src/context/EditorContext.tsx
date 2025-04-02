"use client";

import { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { saveContentToFile, loadContentFromFile } from '@/lib/editorStorage';

interface EditorContextType {
  editorContent: string;
  isLoading: boolean;
  error: string | null;
  setEditorContent: (content: string) => Promise<void>;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export function EditorProvider({ children }: { children: ReactNode }) {
  const [editorContent, setEditorContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load editor content from file and fallback to localStorage on mount
  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      try {
        // Try to load from file first
        const fileContent = await loadContentFromFile();
        if (fileContent) {
          setEditorContent(fileContent);
          // Also update localStorage for backup
          localStorage.setItem('editorState', fileContent);
          setIsLoading(false);
          return;
        }

        // Fallback to localStorage if file content is not available
        const savedContent = localStorage.getItem('editorState');
        if (savedContent) {
          setEditorContent(savedContent);
          // Save to file for future use
          await saveContentToFile(savedContent);
        }
      } catch (error) {
        console.error('Error loading editor content:', error);
        setError('Failed to load content');

        // Last resort: try localStorage
        try {
          const savedContent = localStorage.getItem('editorState');
          if (savedContent) {
            setEditorContent(savedContent);
          }
        } catch (localStorageError) {
          console.error('Error loading from localStorage:', localStorageError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  // Create a memoized value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    editorContent,
    isLoading,
    error,
    setEditorContent: async (content: string) => {
      // Only update if content has changed
      if (content !== editorContent) {
        setEditorContent(content);
        // Save to file
        try {
          await saveContentToFile(content);
        } catch (error) {
          console.error('Error saving to file:', error);
          // Fallback to localStorage
          localStorage.setItem('editorState', content);
        }
      }
    }
  }), [editorContent, isLoading, error]);

  return (
    <EditorContext.Provider value={contextValue}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
}
