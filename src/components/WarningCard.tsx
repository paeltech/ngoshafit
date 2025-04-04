"use client";

import React from 'react';
import { Card } from "@/components/ui/card";

interface WarningCardProps {
  title: string;
  description: string;
  items: string[];
}

export default function WarningCard({ title, description, items }: WarningCardProps) {
  return (
    <Card className="py-16 mt-10 mb-10 bg-white shadow-lg rounded-xl">
      <p className="text-center"><strong><i>{title}</i></strong></p>

      <div className="space-y-4 mt-4">
        <p className="text-center">{description}</p>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 aspect-square">
                ✕
              </div>
              <p className="text-center">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
