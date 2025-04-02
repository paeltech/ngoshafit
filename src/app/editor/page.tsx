"use client";

import { Button } from "@/components/ui/button";
import LexicalEditor from "@/components/editor/LexicalEditor";
import { useEditor } from "@/context/EditorContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function EditorPage() {
  const { editorContent, isLoading, error } = useEditor();
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Update last saved timestamp when content changes
  useEffect(() => {
    if (editorContent) {
      setLastSaved(new Date());
    }
  }, [editorContent]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Content Editor</h1>
        <Link href="/">
          <Button variant="outline">Back to Landing Page</Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">
            Edit your content below. Changes will automatically be saved to a file on the server.
          </p>
          <div className="text-sm text-gray-500">
            {isLoading ? (
              <span className="text-blue-500">Loading...</span>
            ) : error ? (
              <span className="text-red-500">Error: {error}</span>
            ) : lastSaved ? (
              <span>Last saved: {lastSaved.toLocaleTimeString()}</span>
            ) : (
              <span>Not saved yet</span>
            )}
          </div>
        </div>
        <LexicalEditor />
      </div>
    </div>
  );
}
