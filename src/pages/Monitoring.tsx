import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { 
  MapPin, 
  Users, 
  Shield, 
  AlertTriangle, 
  Activity,
  Search,
  Filter,
  Eye,
  Clock,
  TrendingUp,
  TrendingDown,
  Navigation,
  Wifi,
  Battery,
  Signal
} from 'lucide-react';

const Monitoring = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [timeRange, setTimeRange] = useState('24h');

  const touristData = [
    {
      id: "T-2024-001847",
      name: "Rajesh Kumar",
      location: "Red Fort, Delhi",
      coordinates: "28.6562° N, 77.2410° E",
      safetyScore: 95,
      status: "safe",
      lastUpdate: "2 mins ago",
      battery: 78,
      signal: "Strong",
      route: "Planned"
    },
    {
      id: "T-2024-001846",
      name: "Sarah Johnson",
      location: "Gateway of India, Mumbai",
      coordinates: "18.9220° N, 72.8347° E",
      safetyScore: 87,
      status: "caution",
      lastUpdate: "5 mins ago",
      battery: 45,
      signal: "Moderate",
      route: "Deviation"
    },
    {
      id: "T-2024-001845",
      name: "Chen Wei",
      location: "Calangute Beach, Goa",
      coordinates: "15.5467° N, 73.7550° E",
      safetyScore: 92,
      status: "safe",
      lastUpdate: "1 min ago",
      battery: 89,
      signal: "Strong",
      route: "Planned"
    },
    {
      id: "T-2024-001844",
      name: "Ahmed Hassan",
      location: "Hawa Mahal, Jaipur",
      coordinates: "26.9239° N, 75.8267° E",
      safetyScore: 68,
      status: "alert",
      lastUpdate: "12 mins ago",
      battery: 15,
      signal: "Weak",
      route: "Lost"
    }
  ];

  const heatmapData = [
    { zone: "Delhi Tourism Circuit", tourists: 3420, risk: "Low", alerts: 2 },
    { zone: "Mumbai Coastal Area", tourists: 2850, risk: "Medium", alerts: 8 },
    { zone: "Goa Beach Regions", tourists: 1960, risk: "Low", alerts: 1 },
    { zone: "Rajasthan Desert Safari", tourists: 1240, risk: "High", alerts: 15 },
    { zone: "Kerala Backwaters", tourists: 980, risk: "Medium", alerts: 4 },
    { zone: "Himachal Hill Stations", tourists: 750, risk: "High", alerts: 12 }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "Route Deviation",
      tourist: "T-2024-001846",
      location: "Mumbai - Dharavi Area",
      time: "5 mins ago",
      severity: "Medium",
      description: "Tourist entered unplanned high-risk zone"
    },
    {
      id: 2,
      type: "Low Battery",
      tourist: "T-2024-001844",
      location: "Jaipur - Hawa Mahal",
      time: "12 mins ago",
      severity: "High",
      description: "Device battery below critical threshold (15%)"
    },
    {
      id: 3,
      type: "Panic Button",
      tourist: "T-2024-001842",
      location: "Agra - Taj Mahal vicinity",
      time: "18 mins ago",
      severity: "Critical",
      description: "Emergency SOS activated - Response team dispatched"
    },
    {
      id: 4,
      type: "Geo-fence Alert",
      tourist: "T-2024-001841",
      location: "Delhi - Restricted Military Zone",
      time: "25 mins ago",
      severity: "High",
      description: "Unauthorized entry into restricted area"
    }
  ];

  const stats = [
    { label: "Active Monitoring", value: "12,847", change: "+8.2%", trend: "up", icon: Users },
    { label: "Safety Score Avg", value: "94.2%", change: "+2.1%", trend: "up", icon: Shield },
    { label: "Active Alerts", value: "23", change: "-15%", trend: "down", icon: AlertTriangle },
    { label: "Response Time", value: "1.2min", change: "-8%", trend: "down", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-govt/10 rounded-lg">
                <MapPin className="h-8 w-8 text-govt" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Real-time Monitoring</h1>
                <p className="text-muted-foreground">AI-powered tourist safety tracking and analytics</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="govt">
                <Activity className="h-4 w-4 mr-2" />
                Live Dashboard
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                    <div className="text-right">
                      <IconComponent className="h-6 w-6 text-govt mb-2" />
                      <div className={`text-sm flex items-center gap-1 ${
                        stat.trend === 'up' ? 'text-success' : 'text-muted-foreground'
                      }`}>
                        {stat.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {stat.change}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Monitoring Panel */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Search and Controls */}
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search by Tourist ID, Name, or Location..." 
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select className="px-4 py-2 border rounded-md bg-background">
                    <option value="all">All Regions</option>
                    <option value="north">North India</option>
                    <option value="south">South India</option>
                    <option value="west">West India</option>
                    <option value="east">East India</option>
                  </select>
                  <select className="px-4 py-2 border rounded-md bg-background">
                    <option value="24h">Last 24 Hours</option>
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Tourist Tracking List */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Active Tourist Tracking</h3>
                <Badge variant="outline">
                  <Activity className="h-3 w-3 mr-1 animate-pulse" />
                  Live
                </Badge>
              </div>
              
              <div className="space-y-4">
                {touristData.map((tourist) => (
                  <div key={tourist.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`h-3 w-3 rounded-full ${
                          tourist.status === 'safe' ? 'bg-success animate-pulse' :
                          tourist.status === 'caution' ? 'bg-warning animate-pulse' :
                          'bg-destructive animate-pulse'
                        }`} />
                        <div>
                          <div className="font-medium">{tourist.name}</div>
                          <div className="text-sm text-muted-foreground">{tourist.id}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={
                            tourist.status === 'safe' ? 'default' :
                            tourist.status === 'caution' ? 'default' :
                            'destructive'
                          }
                        >
                          {tourist.status.toUpperCase()}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">
                          Score: {tourist.safetyScore}%
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="font-medium">Location</span>
                        </div>
                        <div className="text-muted-foreground ml-6">
                          {tourist.location}
                        </div>
                        <div className="text-xs text-muted-foreground ml-6">
                          {tourist.coordinates}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Battery className="h-4 w-4 text-muted-foreground" />
                            <span>Battery</span>
                          </div>
                          <span className={`font-medium ${
                            tourist.battery > 50 ? 'text-success' :
                            tourist.battery > 20 ? 'text-warning' :
                            'text-destructive'
                          }`}>
                            {tourist.battery}%
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Signal className="h-4 w-4 text-muted-foreground" />
                            <span>Signal</span>
                          </div>
                          <span className="font-medium">{tourist.signal}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Navigation className="h-4 w-4 text-muted-foreground" />
                            <span>Route</span>
                          </div>
                          <span className={`font-medium ${
                            tourist.route === 'Planned' ? 'text-success' :
                            tourist.route === 'Deviation' ? 'text-warning' :
                            'text-destructive'
                          }`}>
                            {tourist.route}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 pt-3 border-t">
                      <div className="text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 inline mr-1" />
                        Last update: {tourist.lastUpdate}
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Heat Map Data */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Tourist Heat Map - Live Data</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {heatmapData.map((zone, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-medium">{zone.zone}</div>
                      <Badge 
                        variant={
                          zone.risk === 'Low' ? 'default' :
                          zone.risk === 'Medium' ? 'default' :
                          'destructive'
                        }
                      >
                        {zone.risk} Risk
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Active Tourists</span>
                        <span className="font-medium">{zone.tourists.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Active Alerts</span>
                        <span className={`font-medium ${
                          zone.alerts > 10 ? 'text-destructive' :
                          zone.alerts > 5 ? 'text-warning' :
                          'text-success'
                        }`}>
                          {zone.alerts}
                        </span>
                      </div>
                    </div>
                    
                    <Progress 
                      value={Math.min((zone.tourists / 4000) * 100, 100)} 
                      className="mt-3"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar - Alerts and Controls */}
          <div className="space-y-6">
            
            {/* Live Alerts */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Live Alerts</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-destructive rounded-full animate-ping" />
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        variant={
                          alert.severity === 'Critical' ? 'destructive' :
                          alert.severity === 'High' ? 'destructive' :
                          'default'
                        }
                        className="text-xs"
                      >
                        {alert.severity}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="font-medium text-sm">{alert.type}</div>
                      <div className="text-xs text-muted-foreground">
                        {alert.tourist} • {alert.location}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {alert.description}
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Take Action
                    </Button>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                View All Alerts
              </Button>
            </Card>

            {/* System Status */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">System Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">AI Processing</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-sm text-success">Online</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">GPS Tracking</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-sm text-success">Active</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Emergency Services</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-sm text-success">Ready</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database Sync</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-warning rounded-full animate-pulse" />
                    <span className="text-sm text-warning">Syncing</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="destructive" className="w-full">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Emergency Broadcast
                </Button>
                <Button variant="warning" className="w-full">
                  <Shield className="h-4 w-4 mr-2" />
                  Update Risk Zones
                </Button>
                <Button variant="outline" className="w-full">
                  <Activity className="h-4 w-4 mr-2" />
                  System Diagnostics
                </Button>
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Tourist Reports
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;