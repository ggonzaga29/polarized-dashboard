import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <h2>Filled</h2>
      <div className="flex gap-5 ">
        <Button variant="filled" size="lg">
          Button
        </Button>
        <Button variant="filled" size="md">
          Button
        </Button>
        <Button variant="filled" size="sm">
          Button
        </Button>
      </div>
    </main>
  );
}
