import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Phone, 
  AlertTriangle, 
  MapPin, 
  Clock, 
  Users,
  Ambulance,
  Shield,
  Radio,
  FileText,
  CheckCircle,
  Timer,
  Navigation,
  Mic,
  Camera,
  Send
} from 'lucide-react';
import emergencyDashboard from '@/assets/emergency-dashboard.jpg';

const Emergency = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);

  const emergencyStats = [
    { label: "Active Incidents", value: "7", icon: AlertTriangle, color: "destructive" },
    { label: "Response Teams", value: "23", icon: Users, color: "govt" },
    { label: "Avg Response Time", value: "4.2min", icon: Timer, color: "success" },
    { label: "Resolved Today", value: "18", icon: CheckCircle, color: "primary" }
  ];

  const activeIncidents = [
    {
      id: "EMG-2024-001",
      type: "Medical Emergency",
      priority: "Critical",
      tourist: {
        id: "T-2024-001847",
        name: "Sarah Johnson",
        age: 34,
        nationality: "USA"
      },
      location: "Taj Mahal, Agra",
      coordinates: "27.1751° N, 78.0421° E",
      description: "Tourist collapsed near entrance, breathing difficulties",
      reportedAt: "14:23:15",
      responseTime: "2 mins",
      status: "Team Dispatched",
      responders: ["AMB-101", "MED-205", "POL-334"],
      updates: [
        { time: "14:25", update: "Ambulance dispatched", responder: "Emergency Center" },
        { time: "14:23", update: "Incident reported via panic button", responder: "Tourist App" }
      ]
    },
    {
      id: "EMG-2024-002",
      type: "Lost Tourist",
      priority: "High",
      tourist: {
        id: "T-2024-001845",
        name: "Chen Wei",
        age: 28,
        nationality: "China"
      },
      location: "Rajasthan Desert Safari",
      coordinates: "26.9124° N, 70.9083° E",
      description: "Tourist separated from group during desert safari, no contact for 3 hours",
      reportedAt: "13:45:30",
      responseTime: "5 mins",
      status: "Search Active",
      responders: ["SAR-12", "POL-445", "LOC-789"],
      updates: [
        { time: "14:20", update: "Drone deployed for aerial search", responder: "SAR Team" },
        { time: "14:10", update: "Ground search team mobilized", responder: "Local Police" },
        { time: "13:50", update: "Last known GPS location identified", responder: "Control Room" }
      ]
    },
    {
      id: "EMG-2024-003",
      type: "Security Threat",
      priority: "Medium",
      tourist: {
        id: "T-2024-001843",
        name: "Ahmed Hassan",
        age: 45,
        nationality: "UAE"
      },
      location: "Red Fort, Delhi",
      coordinates: "28.6562° N, 77.2410° E",
      description: "Tourist reported suspicious activity, requested security assistance",
      reportedAt: "14:10:45",
      responseTime: "3 mins",
      status: "Under Investigation",
      responders: ["SEC-67", "POL-889"],
      updates: [
        { time: "14:15", update: "Security team arrived on scene", responder: "Security" },
        { time: "14:12", update: "Alert received and verified", responder: "Control Room" }
      ]
    }
  ];

  const emergencyContacts = [
    { service: "Police", number: "100", description: "General emergency and crime reporting" },
    { service: "Fire Brigade", number: "101", description: "Fire emergencies and rescue operations" },
    { service: "Ambulance", number: "108", description: "Medical emergencies and patient transport" },
    { service: "Emergency Helpline", number: "112", description: "Unified emergency services" },
    { service: "Tourist Helpline", number: "1363", description: "24/7 tourist assistance and support" },
    { service: "Women Helpline", number: "1091", description: "Women in distress emergency support" }
  ];

  const responseTeams = [
    {
      id: "TEAM-01",
      type: "Medical Response",
      status: "Available",
      location: "Delhi Central",
      members: 4,
      equipment: ["Ambulance", "Medical Kit", "Defibrillator"]
    },
    {
      id: "TEAM-02", 
      type: "Search & Rescue",
      status: "On Mission",
      location: "Rajasthan",
      members: 6,
      equipment: ["Drone", "GPS Tracker", "Communication Kit"]
    },
    {
      id: "TEAM-03",
      type: "Security Response",
      status: "Available",
      location: "Mumbai",
      members: 3,
      equipment: ["Vehicle", "Communication", "First Aid"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-destructive/5">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Emergency Response Center</h1>
                <p className="text-muted-foreground">24/7 Tourist Safety & Emergency Coordination</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="emergency" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Call 112
              </Button>
              <Button variant="destructive" size="lg">
                <Radio className="h-5 w-5 mr-2" />
                Broadcast Alert
              </Button>
            </div>
          </div>

          {/* Emergency Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-${stat.color}/10 rounded-lg`}>
                      <IconComponent className={`h-5 w-5 text-${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
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
          
          {/* Main Emergency Panel */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Command Center Dashboard */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Command Center Dashboard</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Live Monitoring</span>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img 
                  src={emergencyDashboard} 
                  alt="Emergency Command Dashboard" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-lg font-semibold">Real-time Incident Map</div>
                  <div className="text-sm opacity-90">Live tracking of all emergency situations</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="destructive" className="flex-1">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  New Incident
                </Button>
                <Button variant="warning" className="flex-1">
                  <Radio className="h-4 w-4 mr-2" />
                  Mass Alert
                </Button>
                <Button variant="outline" className="flex-1">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </Card>

            {/* Active Incidents */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Active Incidents</h3>
                <Badge variant="destructive" className="animate-pulse">
                  {activeIncidents.length} Active
                </Badge>
              </div>
              
              <div className="space-y-4">
                {activeIncidents.map((incident) => (
                  <div key={incident.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-smooth">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant={
                            incident.priority === 'Critical' ? 'destructive' :
                            incident.priority === 'High' ? 'destructive' :
                            'default'
                          }
                        >
                          {incident.priority}
                        </Badge>
                        <div>
                          <div className="font-semibold">{incident.type}</div>
                          <div className="text-sm text-muted-foreground">{incident.id}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{incident.status}</div>
                        <div className="text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {incident.responseTime}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="text-sm font-medium mb-1">Tourist Details</div>
                        <div className="text-sm text-muted-foreground">
                          {incident.tourist.name} ({incident.tourist.age})<br />
                          {incident.tourist.id} • {incident.tourist.nationality}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium mb-1">Location</div>
                        <div className="text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 inline mr-1" />
                          {incident.location}<br />
                          <span className="text-xs">{incident.coordinates}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="text-sm font-medium mb-1">Description</div>
                      <div className="text-sm text-muted-foreground">{incident.description}</div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Responders:</span>
                        {incident.responders.map((responder, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {responder}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Incident Report */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Quick Incident Report</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Tourist ID</label>
                    <Input placeholder="T-2024-XXXXXX" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Incident Type</label>
                    <select className="w-full px-3 py-2 border rounded-md bg-background">
                      <option>Medical Emergency</option>
                      <option>Lost Tourist</option>
                      <option>Security Threat</option>
                      <option>Accident</option>
                      <option>Natural Disaster</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input placeholder="Current location or landmark" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Description</label>
                  <textarea 
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    rows={3}
                    placeholder="Detailed description of the incident..."
                  />
                </div>

                <div className="flex gap-2">
                  <Button variant="destructive" className="flex-1">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Report Emergency
                  </Button>
                  <Button variant="outline">
                    <Camera className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Emergency Contacts */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <Phone className="h-4 w-4 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{contact.service}</div>
                      <div className="text-xs text-muted-foreground">{contact.description}</div>
                    </div>
                    <div className="text-lg font-bold text-destructive">{contact.number}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Response Teams */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Response Teams</h3>
              <div className="space-y-4">
                {responseTeams.map((team) => (
                  <div key={team.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{team.type}</div>
                      <Badge 
                        variant={team.status === 'Available' ? 'default' : 'secondary'}
                      >
                        {team.status}
                      </Badge>
                    </div>
                    
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        {team.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3" />
                        {team.members} members
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="text-xs text-muted-foreground mb-1">Equipment:</div>
                      <div className="flex flex-wrap gap-1">
                        {team.equipment.map((item, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="destructive" className="w-full">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Declare Emergency
                </Button>
                <Button variant="warning" className="w-full">
                  <Radio className="h-4 w-4 mr-2" />
                  Send Mass Alert
                </Button>
                <Button variant="outline" className="w-full">
                  <Navigation className="h-4 w-4 mr-2" />
                  Coordinate Response
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate E-FIR
                </Button>
              </div>
            </Card>

            {/* System Status */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Emergency Services</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-sm text-success">Active</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Communication Network</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-sm text-success">Online</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">GPS Tracking</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-sm text-success">Operational</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Response Coordination</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-success rounded-full" />
                    <span className="text-sm text-success">Ready</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;