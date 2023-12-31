'use client';

import { Button } from '@/components/ui/button';
import { Command } from '@phosphor-icons/react';

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24 space-y-5">
      <h1 className="text-2xl font-bold">Buttons</h1>
      <div>
        <h2>Filled</h2>
        <div className="space-x-4 mt-3">
          <Button variant="filled" size="lg">
            <Command className="h-4 w-4"></Command>
            Button
          </Button>
          <Button variant="filled" size="md">
            <Command className="h-4 w-4"></Command>
            Button
          </Button>
          <Button variant="filled" size="sm">
            <Command className="h-4 w-4"></Command>
            Button
          </Button>
        </div>
      </div>
      <div>
        <h2>Outlined</h2>
        <div className="space-x-4 mt-3">
          <Button variant="outlined" size="lg">
            Button
          </Button>
          <Button variant="outlined" size="md">
            Button
          </Button>
          <Button variant="outlined" size="sm">
            Button
          </Button>
        </div>
      </div>
      <div>
        <h2>Gray</h2>
        <div className="space-x-4 mt-3">
          <Button variant="gray" size="lg">
            Button
          </Button>
          <Button variant="gray" size="md">
            Button
          </Button>
          <Button variant="gray" size="sm">
            Button
          </Button>
        </div>
      </div>
      <div>
        <h2>Ghost</h2>
        <div className="space-x-4 mt-3">
          <Button variant="ghost" size="lg">
            Button
          </Button>
          <Button variant="ghost" size="md">
            Button
          </Button>
          <Button variant="ghost" size="sm">
            Button
          </Button>
        </div>
      </div>
      <div>
        <h2>Icon</h2>
        <div className="space-x-4 mt-3">
          <Button variant="filled" size="icon" asChild>
            <Command className="h-6 w-6 mr-2" />
          </Button>
          <Button variant="outlined" size="icon" asChild>
            <Command className="h-6 w-6" />
          </Button>
          <Button variant="gray" size="icon" asChild>
            <Command className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Command className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </main>
  );
}
