"use client";

import { useEditor } from "@/context/EditorContext";
import { useEffect, useState, useMemo, useRef } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { CodeNode, CodeHighlightNode } from "@lexical/code";
import { LinkNode } from "@lexical/link";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import "./styles/editor.css";

// Custom plugin to set initial editor state
function InitialStatePlugin({ editorState }: { editorState: any }) {
  const [editor] = useLexicalComposerContext();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (editorState && editor && !initializedRef.current) {
      // Set editor state from the saved state only once
      try {
        editor.setEditorState(editor.parseEditorState(editorState));
        initializedRef.current = true;
      } catch (error) {
        console.error('Error setting viewer editor state:', error);
      }
    }
  }, [editor, editorState]);

  return null;
}

// Define theme outside component to prevent recreation on each render
const theme = {
  paragraph: "mb-2",
  heading: {
    h1: "text-4xl font-bold mb-4",
    h2: "text-3xl font-bold mb-3",
    h3: "text-2xl font-bold mb-2",
  },
};

// Define nodes array outside component
const nodes = [
  HeadingNode,
  QuoteNode,
  ListNode,
  ListItemNode,
  CodeNode,
  CodeHighlightNode,
  LinkNode
];

export default function EditorContent() {
  const { editorContent, isLoading, error } = useEditor();
  const [editorState, setEditorState] = useState<any>(null);
  const contentRef = useRef<string>("");

  // Create initialConfig with useMemo to prevent recreation on each render
  const initialConfig = useMemo(() => ({
    namespace: "NgoshaFitContentViewer",
    theme,
    nodes,
    editable: false,
    onError: (error: Error) => {
      console.error(error);
    },
  }), []);

  // Only parse the editor content when it changes
  useEffect(() => {
    if (editorContent && editorContent !== contentRef.current) {
      try {
        const parsed = JSON.parse(editorContent);
        setEditorState(parsed);
        contentRef.current = editorContent;
      } catch (error) {
        console.error("Error parsing editor content:", error);
      }
    }
  }, [editorContent]);

  // Show loading state
  if (isLoading) {
    return <div className="text-gray-500 flex items-center justify-center p-4">
      <div className="animate-pulse">Loading content...</div>
    </div>;
  }

  // Show error state
  if (error) {
    return <div className="text-red-500 italic">
      Error loading content: {error}. Please try refreshing the page.
    </div>;
  }

  // Render based on content availability
  if (!editorContent) {
    return <div className="text-gray-500 italic">No content available. Go to the editor to add content.</div>;
  }

  return (
    <div className="editor-content-viewer">
      {editorState && (
        <LexicalComposer initialConfig={initialConfig}>
          <div className="editor-container border-none shadow-none">
            <div className="editor-inner">
              <RichTextPlugin
                contentEditable={<ContentEditable className="editor-input outline-none" />}
                placeholder={<div className="editor-placeholder">No content</div>}
                ErrorBoundary={LexicalErrorBoundary}
              />
              {/* Use InitialEditorStatePlugin to set the editor state */}
              <InitialStatePlugin editorState={editorState} />
            </div>
          </div>
        </LexicalComposer>
      )}
    </div>
  );
}
