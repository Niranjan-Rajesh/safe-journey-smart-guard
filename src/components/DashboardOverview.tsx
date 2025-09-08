import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Shield, 
  AlertTriangle, 
  MapPin, 
  TrendingUp, 
  Clock,
  CheckCircle,
  XCircle,
  Activity,
  Globe,
  Phone,
  Camera
} from 'lucide-react';

const DashboardOverview = () => {
  const stats = [
    {
      title: "Active Tourists",
      value: "12,847",
      change: "+8.2%",
      icon: Users,
      color: "primary",
      trend: "up"
    },
    {
      title: "Safety Score",
      value: "94.2%",
      change: "+2.1%",
      icon: Shield,
      color: "success",
      trend: "up"
    },
    {
      title: "Active Alerts",
      value: "23",
      change: "-15%",
      icon: AlertTriangle,
      color: "warning",
      trend: "down"
    },
    {
      title: "Monitored Zones",
      value: "156",
      change: "+3",
      icon: MapPin,
      color: "govt",
      trend: "up"
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "Zone Entry",
      tourist: "T-ID: 456789",
      location: "Restricted Area - Red Fort",
      time: "2 mins ago",
      status: "resolved",
      priority: "medium"
    },
    {
      id: 2,
      type: "Emergency SOS",
      tourist: "T-ID: 123456",
      location: "Agra - Near Taj Mahal",
      time: "5 mins ago",
      status: "active",
      priority: "high"
    },
    {
      id: 3,
      type: "Inactivity",
      tourist: "T-ID: 789012",
      location: "Kerala - Backwaters",
      time: "12 mins ago",
      status: "investigating",
      priority: "medium"
    },
    {
      id: 4,
      type: "Route Deviation",
      tourist: "T-ID: 345678",
      location: "Rajasthan - Desert Safari",
      time: "18 mins ago",
      status: "resolved",
      priority: "low"
    }
  ];

  const regionalData = [
    { region: "North India", tourists: 4200, safety: 96, alerts: 8 },
    { region: "South India", tourists: 3800, safety: 94, alerts: 12 },
    { region: "West India", tourists: 2900, safety: 92, alerts: 15 },
    { region: "East India", tourists: 1947, safety: 95, alerts: 6 },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="mb-4">
            <Activity className="h-4 w-4 mr-2" />
            Real-time Dashboard
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Live System
            <span className="text-gradient"> Overview</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time monitoring and analytics providing comprehensive insights into 
            tourist safety, system performance, and emergency response status.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-smooth">
                <div className="space-y-4">
                  <div className={`mx-auto w-12 h-12 rounded-lg bg-${stat.color}/10 flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 text-${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.title}</div>
                  </div>
                  <div className={`text-sm flex items-center justify-center gap-1 ${
                    stat.trend === 'up' ? 'text-success' : 'text-muted-foreground'
                  }`}>
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Recent Alerts */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Recent Alerts
              </h3>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center gap-4">
                    <div className={`h-3 w-3 rounded-full ${
                      alert.status === 'active' ? 'bg-destructive animate-pulse' :
                      alert.status === 'investigating' ? 'bg-warning' :
                      'bg-success'
                    }`} />
                    <div>
                      <div className="font-medium text-sm">{alert.type}</div>
                      <div className="text-xs text-muted-foreground">{alert.tourist} • {alert.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={
                        alert.priority === 'high' ? 'destructive' :
                        alert.priority === 'medium' ? 'default' :
                        'secondary'
                      }
                      className="text-xs"
                    >
                      {alert.priority}
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {alert.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* System Status */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Activity className="h-5 w-5 text-success" />
              System Status
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Server Health</span>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <Progress value={98} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">98% Uptime</div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">API Response</span>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <Progress value={95} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">Average 145ms</div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Database</span>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <Progress value={92} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">All queries normal</div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">AI Models</span>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
                <Progress value={97} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">Processing normally</div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-success">
                  <CheckCircle className="h-4 w-4" />
                  All Systems Operational
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Last updated: 30 seconds ago
                </div>
              </div>
            </div>
          </Card>

          {/* Regional Overview */}
          <Card className="lg:col-span-3 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Globe className="h-5 w-5 text-govt" />
                Regional Overview
              </h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4" />
                  Police Portal
                </Button>
                <Button variant="govt" size="sm">
                  <Phone className="h-4 w-4" />
                  Emergency Center
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regionalData.map((region, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card/50">
                  <div className="space-y-3">
                    <div className="font-medium">{region.region}</div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tourists</span>
                        <span className="font-medium">{region.tourists.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Safety Score</span>
                        <span className="font-medium text-success">{region.safety}%</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Active Alerts</span>
                        <Badge variant={region.alerts > 10 ? 'destructive' : 'secondary'} className="text-xs">
                          {region.alerts}
                        </Badge>
                      </div>
                    </div>
                    
                    <Progress value={region.safety} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardOverview;