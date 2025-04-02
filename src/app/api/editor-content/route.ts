import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { promises as fsPromises } from 'fs';

// Define the path to the content file
const contentFilePath = path.join(process.cwd(), 'editor-content.json');

// Ensure the file exists
const ensureFileExists = async () => {
  try {
    await fsPromises.access(contentFilePath);
  } catch (error) {
    // File doesn't exist, create it with empty content
    await fsPromises.writeFile(contentFilePath, JSON.stringify({ content: '' }), 'utf8');
  }
};

// GET handler to retrieve the content
export async function GET() {
  try {
    await ensureFileExists();
    
    const fileContent = await fsPromises.readFile(contentFilePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    return NextResponse.json({ content: data.content }, { status: 200 });
  } catch (error) {
    console.error('Error reading content file:', error);
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
}

// POST handler to save the content
export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json();
    
    if (typeof content !== 'string') {
      return NextResponse.json({ error: 'Invalid content format' }, { status: 400 });
    }
    
    await ensureFileExists();
    
    // Save the content to the file
    await fsPromises.writeFile(contentFilePath, JSON.stringify({ content }), 'utf8');
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error saving content to file:', error);
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
}
