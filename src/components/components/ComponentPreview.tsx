import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ArrowLeft, Code, Eye } from "lucide-react";
import { Textarea } from "../ui/textarea";

interface ComponentPreviewProps {
  component: {
    id: string;
    title: string;
    description: string;
    features: string[];
    code: string;
  };
  onBack: () => void;
}

const ComponentPreview = ({ component, onBack }: ComponentPreviewProps) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Components
        </Button>
        <div>
          <h2 className="text-2xl font-bold">{component.title}</h2>
          <p className="text-muted-foreground">{component.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 p-1 bg-muted rounded-lg w-fit">
        <Button
          variant={activeTab === 'preview' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('preview')}
        >
          <Eye className="mr-2 h-4 w-4" />
          Preview
        </Button>
        <Button
          variant={activeTab === 'code' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('code')}
        >
          <Code className="mr-2 h-4 w-4" />
          Code
        </Button>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg">
            {activeTab === 'preview' ? 'Live Preview' : 'Source Code'}
          </CardTitle>
          <CardDescription>
            {activeTab === 'preview' 
              ? 'Interactive preview of the component' 
              : 'Complete HTML, CSS, and JavaScript code'
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {activeTab === 'preview' ? (
            <iframe
              ref={iframeRef}
              className="w-full h-[600px] border-0 rounded-b-lg"
              title={`${component.title} Preview`}
              sandbox="allow-scripts allow-same-origin"
              srcDoc={component.code}
            />
          ) : (
            <div className="p-6">
              <Textarea
                value={component.code}
                readOnly
                className="h-[600px] resize-none font-mono text-sm leading-relaxed"
                placeholder="Code will appear here..."
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {component.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComponentPreview;
