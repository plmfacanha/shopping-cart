import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex flex-col items-start gap-4 p-6">
      <h1 className="text-3xl font-bold">Hello World</h1>

      <div className="flex items-center gap-2">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="flex items-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
      </div>

      <Button variant="outline" size="lg" className="w-full">
        Full width (Tailwind override)
      </Button>
    </div>
  );
}

export default App;
