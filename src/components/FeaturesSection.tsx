import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  MapPin, 
  Brain, 
  BarChart3, 
  Wifi,
  Globe,
  Lock,
  Zap,
  Users,
  AlertCircle,
  PhoneCall,
  Camera
} from 'lucide-react';
import digitalIdImage from '@/assets/digital-id-mockup.jpg';
import emergencyDashboard from '@/assets/emergency-dashboard.jpg';

const FeaturesSection = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Digital Tourist ID Generation",
      description: "Blockchain-secured identity verification with KYC integration",
      details: ["Aadhaar/Passport verification", "Trip itinerary linking", "Emergency contacts storage", "QR code generation"],
      color: "primary",
      status: "Active"
    },
    {
      icon: MapPin,
      title: "Smart Geo-fencing & Safety Scoring",
      description: "AI-powered location monitoring with dynamic risk assessment",
      details: ["Real-time location tracking", "Risk zone alerts", "Dynamic safety scoring", "Route optimization"],
      color: "success",
      status: "Live"
    },
    {
      icon: Brain,
      title: "AI Anomaly Detection",
      description: "Machine learning algorithms for behavioral pattern analysis",
      details: ["Sudden location changes", "Prolonged inactivity", "Route deviation alerts", "Predictive risk modeling"],
      color: "govt",
      status: "Beta"
    },
    {
      icon: BarChart3,
      title: "Tourism & Police Dashboard",
      description: "Comprehensive monitoring and management interface",
      details: ["Real-time tourist heatmaps", "Alert management", "Analytics & reporting", "Resource allocation"],
      color: "warning",
      status: "Active"
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description: "Smart wearables and emergency devices connectivity",
      details: ["Smart bands/tags", "Health monitoring", "Manual SOS triggers", "Environmental sensors"],
      color: "secondary",
      status: "Coming Soon"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "10+ Indian languages with voice and text accessibility",
      details: ["Hindi, English, Tamil", "Bengali, Marathi, Telugu", "Voice recognition", "Elderly-friendly interface"],
      color: "accent",
      status: "Active"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="mb-4">
            Comprehensive Safety Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Advanced Technology Stack for
            <span className="text-gradient"> Tourist Safety</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our integrated platform combines cutting-edge AI, blockchain security, and real-time monitoring 
            to create the most comprehensive tourism safety ecosystem in India.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-medium transition-smooth group cursor-pointer">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg bg-${feature.color}/10 group-hover:scale-110 transition-smooth`}>
                      <IconComponent className={`h-6 w-6 text-${feature.color}`} />
                    </div>
                    <Badge 
                      variant={feature.status === 'Active' ? 'default' : feature.status === 'Live' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {feature.status}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Showcase Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Digital ID Showcase */}
          <Card className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Digital Identity System</h3>
              </div>
              <p className="text-muted-foreground">
                Secure, blockchain-verified digital IDs issued at entry points with comprehensive 
                tourist information and emergency contacts.
              </p>
            </div>
            
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={digitalIdImage} 
                alt="Digital Tourist ID Sample" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="flex gap-3">
              <Button variant="default" size="sm">
                <Lock className="h-4 w-4" />
                Generate ID
              </Button>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          </Card>

          {/* Emergency Response Showcase */}
          <Card className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">Emergency Response Center</h3>
              </div>
              <p className="text-muted-foreground">
                Real-time monitoring dashboard with automated alert systems, emergency service 
                coordination, and instant E-FIR generation capabilities.
              </p>
            </div>
            
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={emergencyDashboard} 
                alt="Emergency Response Dashboard" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="flex gap-3">
              <Button variant="emergency" size="sm">
                <PhoneCall className="h-4 w-4" />
                Emergency: 112
              </Button>
              <Button variant="outline" size="sm">
                View Dashboard
              </Button>
            </div>
          </Card>
        </div>

        {/* Quick Access Actions */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg">
              <Users className="h-5 w-5" />
              Tourist Registration
            </Button>
            <Button variant="govt" size="lg">
              <Camera className="h-5 w-5" />
              Police Portal
            </Button>
            <Button variant="success" size="lg">
              <Zap className="h-5 w-5" />
              Tourism Department
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;