import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Filled</h2>
        <Button variant="filled" size="lg">
          Button Large
        </Button>
				<Button variant="filled" size="md">
					Button Medium
				</Button>
				<Button variant="filled" size="sm">
					Button Small
				</Button>
      </div>
    </main>
  );
}