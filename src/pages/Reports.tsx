import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  PieChart,
  Calendar,
  Download,
  Share,
  Filter,
  Search,
  Users,
  MapPin,
  Shield,
  Clock,
  AlertTriangle,
  CheckCircle,
  Activity,
  Globe
} from 'lucide-react';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedReport, setSelectedReport] = useState('overview');

  const reportStats = [
    { label: "Total Reports Generated", value: "1,247", change: "+12.3%", trend: "up", icon: FileText },
    { label: "Tourist Incidents", value: "89", change: "-8.7%", trend: "down", icon: AlertTriangle },
    { label: "Safety Score Avg", value: "94.2%", change: "+2.1%", trend: "up", icon: Shield },
    { label: "Response Efficiency", value: "97.8%", change: "+3.4%", trend: "up", icon: CheckCircle }
  ];

  const monthlyData = [
    { month: "Jan 2024", tourists: 45820, incidents: 23, safetyScore: 92.1, responseTime: 4.2 },
    { month: "Feb 2024", tourists: 52340, incidents: 19, safetyScore: 93.8, responseTime: 3.9 },
    { month: "Mar 2024", tourists: 48920, incidents: 27, safetyScore: 91.5, responseTime: 4.1 },
    { month: "Apr 2024", tourists: 56780, incidents: 15, safetyScore: 95.2, responseTime: 3.5 },
    { month: "May 2024", tourists: 61230, incidents: 12, safetyScore: 96.1, responseTime: 3.2 },
    { month: "Jun 2024", tourists: 58940, incidents: 18, safetyScore: 94.7, responseTime: 3.7 }
  ];

  const regionalReports = [
    {
      region: "North India",
      tourists: 189540,
      incidents: 45,
      safetyScore: 95.2,
      topDestinations: ["Delhi", "Agra", "Jaipur"],
      riskAreas: 3,
      responseTime: 3.4
    },
    {
      region: "South India", 
      tourists: 167890,
      incidents: 38,
      safetyScore: 94.8,
      topDestinations: ["Bangalore", "Chennai", "Kochi"],
      riskAreas: 2,
      responseTime: 3.7
    },
    {
      region: "West India",
      tourists: 156720,
      incidents: 52,
      safetyScore: 92.1,
      topDestinations: ["Mumbai", "Goa", "Pune"],
      riskAreas: 5,
      responseTime: 4.1
    },
    {
      region: "East India",
      tourists: 98460,
      incidents: 29,
      safetyScore: 93.6,
      topDestinations: ["Kolkata", "Bhubaneswar", "Gangtok"],
      riskAreas: 2,
      responseTime: 3.9
    }
  ];

  const incidentTypes = [
    { type: "Medical Emergency", count: 45, percentage: 32.8, trend: "-5.2%" },
    { type: "Lost Tourist", count: 38, percentage: 27.7, trend: "+2.1%" },
    { type: "Security Issues", count: 24, percentage: 17.5, trend: "-8.9%" },
    { type: "Accident", count: 18, percentage: 13.1, trend: "+1.4%" },
    { type: "Natural Disaster", count: 12, percentage: 8.8, trend: "-12.3%" }
  ];

  const recentArticles = [
    {
      title: "AI-Powered Tourism Safety: India's Digital Revolution",
      date: "January 15, 2024",
      author: "Dr. Priya Sharma, IIT Madras",
      category: "Technology",
      summary: "How artificial intelligence is transforming tourist safety monitoring across Indian destinations, reducing response times by 60%.",
      readTime: "8 min read",
      tags: ["AI", "Safety", "Innovation"]
    },
    {
      title: "Blockchain in Tourism: Securing Digital Identity",
      date: "January 12, 2024", 
      author: "Prof. Rajesh Kumar, Technology Expert",
      category: "Security",
      summary: "Implementation of blockchain technology for tamper-proof tourist identification systems in major Indian cities.",
      readTime: "6 min read",
      tags: ["Blockchain", "Digital ID", "Security"]
    },
    {
      title: "Emergency Response Success: Taj Mahal Incident Case Study", 
      date: "January 10, 2024",
      author: "Emergency Response Team",
      category: "Case Study", 
      summary: "Detailed analysis of the successful 90-second emergency response that saved a tourist's life at Taj Mahal using our smart monitoring system.",
      readTime: "12 min read",
      tags: ["Emergency", "Case Study", "Success Story"]
    },
    {
      title: "IoT Integration in Tourism Safety: Real-world Implementation",
      date: "January 8, 2024",
      author: "Smart City Initiative Team",
      category: "IoT",
      summary: "Comprehensive overview of IoT device deployment across 15 major tourist destinations and their impact on safety metrics.",
      readTime: "10 min read", 
      tags: ["IoT", "Smart City", "Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Analytics & Reports</h1>
                <p className="text-muted-foreground">Comprehensive tourism safety insights and documentation</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="default">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {reportStats.map((stat, index) => {
              const IconComponent = stat.icon;
              const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
              return (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                    <div className="text-right">
                      <IconComponent className="h-6 w-6 text-primary mb-2" />
                      <div className={`text-sm flex items-center gap-1 ${
                        stat.trend === 'up' ? 'text-success' : 'text-muted-foreground'
                      }`}>
                        <TrendIcon className="h-3 w-3" />
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
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Time Period Selector */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Report Dashboard</h3>
                <div className="flex gap-2">
                  {['week', 'month', 'quarter', 'year'].map((period) => (
                    <Button
                      key={period}
                      variant={selectedPeriod === period ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPeriod(period)}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Monthly Trends */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Monthly Performance Trends</h3>
              <div className="space-y-4">
                {monthlyData.map((month, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-medium">{month.month}</div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{month.tourists.toLocaleString()} tourists</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-warning" />
                          <span>{month.incidents} incidents</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Safety Score</span>
                          <span className="text-sm font-medium">{month.safetyScore}%</span>
                        </div>
                        <Progress value={month.safetyScore} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Avg Response Time</span>
                          <span className="text-sm font-medium">{month.responseTime} min</span>
                        </div>
                        <Progress value={Math.max(0, 100 - (month.responseTime * 20))} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Regional Analysis */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Regional Performance Analysis</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {regionalReports.map((region, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">{region.region}</h4>
                      <Badge variant="outline">
                        <MapPin className="h-3 w-3 mr-1" />
                        {region.riskAreas} risk areas
                      </Badge>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Tourists</span>
                        <span className="font-medium">{region.tourists.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Incidents</span>
                        <span className="font-medium">{region.incidents}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Safety Score</span>
                        <span className="font-medium text-success">{region.safetyScore}%</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Response Time</span>
                        <span className="font-medium">{region.responseTime} min</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="text-xs text-muted-foreground mb-2">Top Destinations:</div>
                      <div className="flex flex-wrap gap-1">
                        {region.topDestinations.map((dest, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {dest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Incident Analysis */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Incident Type Analysis</h3>
              <div className="space-y-4">
                {incidentTypes.map((incident, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="font-medium">{incident.type}</div>
                      <Badge variant="outline">{incident.count} cases</Badge>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-medium">{incident.percentage}%</div>
                        <div className={`text-xs flex items-center gap-1 ${
                          incident.trend.startsWith('+') ? 'text-warning' : 'text-success'
                        }`}>
                          {incident.trend.startsWith('+') ? 
                            <TrendingUp className="h-3 w-3" /> : 
                            <TrendingDown className="h-3 w-3" />
                          }
                          {incident.trend}
                        </div>
                      </div>
                      <div className="w-20">
                        <Progress value={incident.percentage} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Articles & Research */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Recent Articles & Research</h3>
              <div className="space-y-6">
                {recentArticles.map((article, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{article.title}</h4>
                        <p className="text-muted-foreground mb-3">{article.summary}</p>
                      </div>
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-3">
                      {article.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Reports */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Reports</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Daily Summary
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Weekly Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <PieChart className="h-4 w-4 mr-2" />
                  Monthly Overview
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Quarterly Trends
                </Button>
              </div>
            </Card>

            {/* Export Options */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Export Options</h3>
              <div className="space-y-3">
                <Button variant="default" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  PDF Report
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Excel Data
                </Button>
                <Button variant="outline" className="w-full">
                  <Share className="h-4 w-4 mr-2" />
                  Share Report
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Report
                </Button>
              </div>
            </Card>

            {/* System Insights */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">System Insights</h3>
              <div className="space-y-4">
                <div className="p-3 bg-success/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="font-medium text-success">System Performance</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    99.7% uptime this month with average response time under 2 minutes
                  </div>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="h-4 w-4 text-primary" />
                    <span className="font-medium text-primary">AI Accuracy</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Machine learning models showing 94.2% accuracy in anomaly detection
                  </div>
                </div>
                
                <div className="p-3 bg-govt/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-4 w-4 text-govt" />
                    <span className="font-medium text-govt">Coverage</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Active monitoring across 156 tourist zones in 28 states
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Updates */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Updates</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-success rounded-full mt-2" />
                  <div>
                    <div className="font-medium">New AI Model Deployed</div>
                    <div className="text-muted-foreground">Enhanced pattern recognition for tourist behavior analysis</div>
                    <div className="text-xs text-muted-foreground mt-1">2 hours ago</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <div>
                    <div className="font-medium">Database Optimization</div>
                    <div className="text-muted-foreground">Query performance improved by 35%</div>
                    <div className="text-xs text-muted-foreground mt-1">1 day ago</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-warning rounded-full mt-2" />
                  <div>
                    <div className="font-medium">Security Patch</div>
                    <div className="text-muted-foreground">Enhanced encryption for tourist data protection</div>
                    <div className="text-xs text-muted-foreground mt-1">3 days ago</div>
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

export default Reports;