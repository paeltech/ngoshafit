import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { ListNode, ListItemNode } from "@lexical/list";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { useEffect, useState } from "react";
import ToolbarPlugin from "./ToolbarPlugin";
import "./styles/editor.css";

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

const initialConfig = {
  namespace: "NgoshaFitEditor",
  theme,
  onError: (error: Error) => {
    console.error(error);
  },
  nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode],
};

export default function LexicalEditor() {
  const [editorState, setEditorState] = useState<string>("");

  // Load editor state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("editorState");
    if (savedState) {
      setEditorState(savedState);
    }
  }, []);

  // Save editor state to localStorage whenever it changes
  const onChange = (editorState: any) => {
    editorState.read(() => {
      const jsonString = JSON.stringify(editorState.toJSON());
      localStorage.setItem("editorState", jsonString);
      setEditorState(jsonString);
    });
  };

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
            ErrorBoundary={() => <div>Something went wrong!</div>}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <ListPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}
