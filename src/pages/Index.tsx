import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DashboardOverview from '@/components/DashboardOverview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DashboardOverview />
      </main>
      
      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold">Smart Tourism Safety</h3>
              <p className="text-sm text-muted-foreground">
                Government of India initiative for comprehensive tourist safety monitoring and emergency response.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#digital-id" className="hover:text-primary transition-smooth">Digital ID</a></li>
                <li><a href="#monitoring" className="hover:text-primary transition-smooth">Safety Monitoring</a></li>
                <li><a href="#emergency" className="hover:text-primary transition-smooth">Emergency Response</a></li>
                <li><a href="#reports" className="hover:text-primary transition-smooth">Reports</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Emergency</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Police: 100</li>
                <li>Fire: 101</li>
                <li>Ambulance: 108</li>
                <li>Emergency: 112</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Tourist Helpline: 1363</li>
                <li>Incredible India: 1800-11-1363</li>
                <li>24x7 Support Available</li>
                <li>Multiple Languages</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Government of India. All rights reserved. | Developed for IIT Madras Project</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
