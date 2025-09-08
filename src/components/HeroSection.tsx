import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, MapPin, Smartphone, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-tourism-safety.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Smart Tourism Safety Monitoring System" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Powered by AI & Blockchain</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Smart <span className="text-gradient">Tourism Safety</span> 
                <br />Monitoring System
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Advanced AI-powered safety monitoring, digital identity verification, and emergency response system 
                ensuring secure tourism experiences across India.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex-1 sm:flex-initial">
                <Smartphone className="h-5 w-5" />
                Generate Digital ID
              </Button>
              <Button variant="govt" size="xl" className="flex-1 sm:flex-initial">
                <Users className="h-5 w-5" />
                Tourism Dashboard
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">15sec</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-govt">10+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-6 glass-effect border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Digital Identity System</h3>
                  <p className="text-muted-foreground">
                    Blockchain-secured digital IDs with KYC verification for all tourists
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-effect border-success/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-success/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Real-time Geo-fencing</h3>
                  <p className="text-muted-foreground">
                    AI-powered location monitoring with automatic risk zone alerts
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-effect border-warning/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Emergency Response</h3>
                  <p className="text-muted-foreground">
                    Instant SOS with GPS tracking and automated E-FIR generation
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Status Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <Card className="p-4 glass-effect">
          <div className="flex items-center gap-3">
            <div className="relative">
              <CheckCircle className="h-5 w-5 text-success" />
              <div className="absolute -top-1 -right-1 h-2 w-2 bg-success rounded-full animate-ping" />
            </div>
            <div>
              <div className="text-sm font-medium">System Status</div>
              <div className="text-xs text-success">All Services Online</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;