import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";
import { FORMAT_TEXT_COMMAND } from "lexical";
import { useCallback } from "react";

// Import icons from lucide-react
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered
} from "lucide-react";

export default function ToolbarPlugin(): React.ReactElement {
  const [editor] = useLexicalComposerContext();

  const formatBold = useCallback(() => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
  }, [editor]);

  const formatItalic = useCallback(() => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
  }, [editor]);

  const formatUnderline = useCallback(() => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
  }, [editor]);

  const formatStrikethrough = useCallback(() => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
  }, [editor]);

  const formatBulletList = useCallback(() => {
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  }, [editor]);

  const formatNumberedList = useCallback(() => {
    editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
  }, [editor]);

  return (
    <div className="toolbar">
      <button
        onClick={formatBold}
        className="toolbar-item"
        aria-label="Format Bold"
      >
        <Bold size={18} />
      </button>
      <button
        onClick={formatItalic}
        className="toolbar-item"
        aria-label="Format Italics"
      >
        <Italic size={18} />
      </button>
      <button
        onClick={formatUnderline}
        className="toolbar-item"
        aria-label="Format Underline"
      >
        <Underline size={18} />
      </button>
      <button
        onClick={formatStrikethrough}
        className="toolbar-item"
        aria-label="Format Strikethrough"
      >
        <Strikethrough size={18} />
      </button>
      <button
        onClick={formatBulletList}
        className="toolbar-item"
        aria-label="Format Bullet List"
      >
        <List size={18} />
      </button>
      <button
        onClick={formatNumberedList}
        className="toolbar-item"
        aria-label="Format Numbered List"
      >
        <ListOrdered size={18} />
      </button>
    </div>
  );
}
