import { Card, CardContent } from "../components/ui/card";

const CodePreview = () => {
  return (
    <Card className="w-full max-w-md mx-auto lg:max-w-none bg-card/50 backdrop-blur-sm border-2">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-muted-foreground ml-2">hello.js</span>
          </div>
          
          <div className="font-mono text-sm space-y-2">
            <div className="text-blue-600 dark:text-blue-400">
              <span className="text-purple-600 dark:text-purple-400">const</span> greeting = 
              <span className="text-green-600 dark:text-green-400">'Hello, World!'</span>;
            </div>
            <div className="text-blue-600 dark:text-blue-400">
              <span className="text-purple-600 dark:text-purple-400">function</span> 
              <span className="text-yellow-600 dark:text-yellow-400"> showMessage</span>() {'{'}
            </div>
            <div className="text-blue-600 dark:text-blue-400 ml-4">
              console.<span className="text-yellow-600 dark:text-yellow-400">log</span>(greeting);
            </div>
            <div className="text-blue-600 dark:text-blue-400">
              {'}'}
            </div>
            <div className="text-gray-600 dark:text-gray-400 mt-4">
              <span className="text-purple-600 dark:text-purple-400">//</span> Run the function
            </div>
            <div className="text-blue-600 dark:text-blue-400">
              <span className="text-yellow-600 dark:text-yellow-400">showMessage</span>();
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border">
            <div className="text-xs text-muted-foreground mb-2">Output:</div>
            <div className="bg-black/10 dark:bg-white/10 rounded p-2 font-mono text-sm">
              <span className="text-green-600 dark:text-green-400">Hello, World!</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodePreview;
