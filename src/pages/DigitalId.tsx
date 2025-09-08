import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { 
  CreditCard, 
  Shield, 
  Upload, 
  CheckCircle, 
  Clock,
  MapPin,
  Phone,
  Mail,
  User,
  Calendar,
  FileText,
  QrCode,
  Download,
  Smartphone
} from 'lucide-react';
import digitalIdMockup from '@/assets/digital-id-mockup.jpg';

const DigitalId = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);

  const recentIds = [
    {
      id: "T-2024-001847",
      name: "Rajesh Kumar",
      nationality: "Indian",
      issueDate: "2024-01-15",
      validTill: "2024-02-15",
      status: "Active",
      location: "New Delhi",
      qrCode: true
    },
    {
      id: "T-2024-001846",
      name: "Sarah Johnson",
      nationality: "USA",
      issueDate: "2024-01-14",
      validTill: "2024-02-28",
      status: "Active",
      location: "Mumbai",
      qrCode: true
    },
    {
      id: "T-2024-001845",
      name: "Chen Wei",
      nationality: "China",
      issueDate: "2024-01-14",
      validTill: "2024-01-28",
      status: "Expired",
      location: "Goa",
      qrCode: true
    }
  ];

  const stats = [
    { label: "Total IDs Issued", value: "47,832", icon: CreditCard, color: "primary" },
    { label: "Active Today", value: "12,847", icon: CheckCircle, color: "success" },
    { label: "Verification Rate", value: "99.7%", icon: Shield, color: "govt" },
    { label: "Processing Time", value: "< 2min", icon: Clock, color: "warning" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Digital Tourist ID System</h1>
              <p className="text-muted-foreground">Blockchain-secured identity verification platform</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
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
          
          {/* ID Generation Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Generate New Digital ID</h2>
                <Badge variant="outline">Step {step} of 4</Badge>
              </div>

              <Progress value={progress} className="mb-6" />

              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="Enter full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality</Label>
                      <Input id="nationality" placeholder="Country of origin" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="email@domain.com" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Document Verification</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-4 border-dashed border-primary/50 hover:border-primary transition-smooth">
                      <div className="text-center space-y-3">
                        <Upload className="h-12 w-12 text-primary mx-auto" />
                        <div>
                          <div className="font-medium">Upload Passport/Aadhaar</div>
                          <div className="text-sm text-muted-foreground">PDF or Image format</div>
                        </div>
                        <Button variant="outline" size="sm">Choose File</Button>
                      </div>
                    </Card>
                    <Card className="p-4 border-dashed border-primary/50 hover:border-primary transition-smooth">
                      <div className="text-center space-y-3">
                        <User className="h-12 w-12 text-primary mx-auto" />
                        <div>
                          <div className="font-medium">Upload Photo</div>
                          <div className="text-sm text-muted-foreground">Recent passport size</div>
                        </div>
                        <Button variant="outline" size="sm">Choose File</Button>
                      </div>
                    </Card>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Travel Itinerary</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="arrivalDate">Arrival Date</Label>
                        <Input id="arrivalDate" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="departureDate">Departure Date</Label>
                        <Input id="departureDate" type="date" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destinations">Planned Destinations</Label>
                      <Input id="destinations" placeholder="Delhi, Agra, Jaipur..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accommodation">Accommodation Details</Label>
                      <Input id="accommodation" placeholder="Hotel name and address" />
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Emergency Contacts</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyName">Emergency Contact Name</Label>
                        <Input id="emergencyName" placeholder="Full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="relationship">Relationship</Label>
                        <Input id="relationship" placeholder="Spouse, Parent, etc." />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyPhone">Phone Number</Label>
                        <Input id="emergencyPhone" placeholder="+XX XXXXX XXXXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyEmail">Email Address</Label>
                        <Input id="emergencyEmail" type="email" placeholder="emergency@email.com" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-6">
                <Button 
                  variant="outline" 
                  disabled={step === 1}
                  onClick={() => {
                    setStep(step - 1);
                    setProgress(progress - 25);
                  }}
                >
                  Previous
                </Button>
                <Button 
                  variant={step === 4 ? "success" : "default"}
                  onClick={() => {
                    if (step < 4) {
                      setStep(step + 1);
                      setProgress(progress + 25);
                    }
                  }}
                >
                  {step === 4 ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Generate ID
                    </>
                  ) : (
                    "Next"
                  )}
                </Button>
              </div>
            </Card>

            {/* Recent Applications */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Applications</h3>
              <div className="space-y-4">
                {recentIds.map((tourist) => (
                  <div key={tourist.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{tourist.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {tourist.id} • {tourist.nationality}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={tourist.status === 'Active' ? 'default' : 'secondary'}
                        className="mb-1"
                      >
                        {tourist.status}
                      </Badge>
                      <div className="text-xs text-muted-foreground">
                        Valid till {tourist.validTill}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sample ID Preview */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Sample Digital ID</h3>
              <div className="space-y-4">
                <img 
                  src={digitalIdMockup} 
                  alt="Digital ID Sample" 
                  className="w-full rounded-lg border"
                />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Blockchain secured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <QrCode className="h-4 w-4 text-primary" />
                    <span>QR code verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-govt" />
                    <span>Mobile wallet compatible</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download Mobile App
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  View Documentation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Nearest Center
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </Card>

            {/* Security Features */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Security Features</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <div>
                    <div className="font-medium">Blockchain Verification</div>
                    <div className="text-muted-foreground">Tamper-proof digital records</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-success rounded-full mt-2" />
                  <div>
                    <div className="font-medium">End-to-End Encryption</div>
                    <div className="text-muted-foreground">AES-256 data protection</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-govt rounded-full mt-2" />
                  <div>
                    <div className="font-medium">Biometric Integration</div>
                    <div className="text-muted-foreground">Face recognition support</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-warning rounded-full mt-2" />
                  <div>
                    <div className="font-medium">Real-time Validation</div>
                    <div className="text-muted-foreground">Instant verification checks</div>
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

export default DigitalId;