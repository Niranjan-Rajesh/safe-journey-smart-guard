import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Menu, Bell, User, MapPin, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Shield className="h-8 w-8 text-primary" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-success rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-gradient">Smart Tourism Safety</h1>
            <p className="text-xs text-muted-foreground">Government of India</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 mx-8">
          <a href="#dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Dashboard
          </a>
          <a href="#digital-id" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Digital ID
          </a>
          <a href="#monitoring" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Monitoring
          </a>
          <a href="#emergency" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Emergency
          </a>
          <a href="#reports" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Reports
          </a>
        </nav>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <div className="absolute -top-1 -right-1 h-2 w-2 bg-destructive rounded-full" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <MapPin className="h-4 w-4" />
          </Button>

          <Button variant="emergency" size="sm" className="hidden md:flex">
            <Phone className="h-4 w-4" />
            Emergency: 112
          </Button>

          <Button variant="outline" size="sm">
            <User className="h-4 w-4" />
            Login
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;