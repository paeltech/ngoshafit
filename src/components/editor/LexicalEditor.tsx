import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { ListNode, ListItemNode } from "@lexical/list";
import { CodeNode, CodeHighlightNode } from "@lexical/code";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { LinkNode } from "@lexical/link";
import { useCallback, useEffect, useState, useMemo, useRef } from "react";
import { useEditor } from "@/context/EditorContext";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import ToolbarPlugin from "./ToolbarPlugin";
import "./styles/editor.css";

// Custom plugin to set initial editor state
function InitialStatePlugin({
  savedEditorState,
}: {
  savedEditorState: string;
}) {
  const [editor] = useLexicalComposerContext();
  const initializedRef = useRef(false);

  useEffect(() => {
    // Only set the state once on initial load to avoid performance issues
    if (savedEditorState && editor && !initializedRef.current) {
      try {
        const parsedState = JSON.parse(savedEditorState);
        const editorState = editor.parseEditorState(parsedState);
        editor.setEditorState(editorState);
        initializedRef.current = true;
      } catch (error) {
        console.error("Error setting initial editor state:", error);
      }
    }
  }, [editor, savedEditorState]);

  return null;
}

// Define theme outside component to prevent recreation on each render
const theme = {
  // Custom theme configuration
  paragraph: "mb-2",
  heading: {
    h1: "text-4xl font-bold mb-4",
    h2: "text-3xl font-bold mb-3",
    h3: "text-2xl font-bold mb-2",
  },
  // ... other theme configurations
};

// Define nodes array outside component
const nodes = [
  HeadingNode,
  QuoteNode,
  ListNode,
  ListItemNode,
  CodeNode,
  CodeHighlightNode,
  LinkNode,
];

// Debounce function to limit how often a function is called
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default function LexicalEditor() {
  const { editorContent, setEditorContent } = useEditor();
  const [savedEditorState, setSavedEditorState] = useState<string | null>(null);
  const lastSavedContentRef = useRef<string>("");

  // Load editor state from localStorage only once on mount
  useEffect(() => {
    const savedState = localStorage.getItem("editorState");
    if (savedState) {
      setSavedEditorState(savedState);
      lastSavedContentRef.current = savedState;
    } else if (editorContent) {
      setSavedEditorState(editorContent);
      lastSavedContentRef.current = editorContent;
    }
  }, []); // Empty dependency array means this runs once on mount

  // Create a debounced save function
  const debouncedSave = useCallback(
    debounce(async (jsonString: string) => {
      // Only save if content has changed
      if (jsonString !== lastSavedContentRef.current) {
        try {
          // Save to context (which will save to file and localStorage)
          await setEditorContent(jsonString);
          lastSavedContentRef.current = jsonString;
        } catch (error) {
          console.error("Error in debouncedSave:", error);
          // Fallback: at least save to localStorage
          localStorage.setItem("editorState", jsonString);
        }
      }
    }, 500), // 500ms debounce time
    [setEditorContent]
  );

  // Save editor state to localStorage with debouncing
  const onChange = useCallback(
    (editorState: any) => {
      editorState.read(() => {
        try {
          const jsonString = JSON.stringify(editorState.toJSON());
          debouncedSave(jsonString);
        } catch (error) {
          console.error("Error saving editor state:", error);
        }
      });
    },
    [debouncedSave]
  );

  // Create initialConfig with useMemo to prevent recreation on each render
  const initialConfig = useMemo(
    () => ({
      namespace: "NgoshaFitEditor",
      theme,
      onError: (error: Error) => {
        console.error(error);
      },
      nodes,
    }),
    []
  );

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={
              <div className="editor-placeholder">Start writing...</div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <ListPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          {/* Add OnChangePlugin to capture editor changes */}
          <OnChangePlugin onChange={onChange} />
          {/* Initialize editor with saved state if available */}
          {savedEditorState && (
            <InitialStatePlugin savedEditorState={savedEditorState} />
          )}
        </div>
      </div>
    </LexicalComposer>
  );
}
