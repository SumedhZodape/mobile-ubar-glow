
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Home, Users, FileText, Settings, LogOut, Eye, Download, Plus } from 'lucide-react';

const VividhksetraDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const sanghatan = localStorage.getItem('sanghatan') || 'Unknown';

  const handleLogout = () => {
    localStorage.clear();
    toast({ title: 'Logged Out', description: 'You have been logged out successfully' });
    navigate('/login');
  };

  const vividhksetraData = [
    { name: 'पूर्व प्रांत प्रचारक', count: 71, description: 'पूर्व प्रांतीय प्रचारक सूची' },
    { name: 'विशेष निमंत्रित', count: 3, description: 'विशेष आमंत्रित सदस्य' },
    { name: 'स्तर प्र. सूची', count: 1483, description: 'स्तरीय प्रतिनिधि सूची' },
    { name: 'विविध क्षेत्र सूची', count: 166, description: 'विविध क्षेत्रीय सदस्य' },
  ];

  const additionalCategories = [
    { name: 'प्रांत प्र. सूची', description: 'प्रांतीय प्रतिनिधि' },
    { name: 'महिला', description: 'महिला सदस्य' },
    { name: 'बैठक प्र. सूची', description: 'बैठक प्रतिनिधि' },
    { name: 'कार्यकारी मंडल बैठक', description: 'कार्यकारी सदस्य' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-lg font-bold">RSS</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Vividhksetra Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="capitalize">{sanghatan} User</Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 capitalize">
            {sanghatan} - विविधक्षेत्र सूची
          </h2>
          <p className="text-gray-600">विविधक्षेत्रीय सदस्यों की विस्तृत जानकारी</p>
        </div>

        {/* Main Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {vividhksetraData.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-orange-600">{item.count}</span>
                  <Badge variant="outline">सदस्य</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-2 flex-1">
                    <Eye className="h-4 w-4" />
                    View
                  </Button>
                  <Button size="sm" className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2 flex-1">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {additionalCategories.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-dashed">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" variant="outline" className="w-full flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  View
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Member Management
              </CardTitle>
              <CardDescription>Add and manage Vividhksetra members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Add New Member</h4>
                  <p className="text-sm text-gray-600">Register new members in the system</p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Member
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Reports & Statistics
              </CardTitle>
              <CardDescription>Generate detailed reports and analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Member Statistics</h4>
                  <p className="text-sm text-gray-600">View comprehensive member statistics</p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Administrative Tools
              </CardTitle>
              <CardDescription>Access administrative functions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">System Configuration</h4>
                  <p className="text-sm text-gray-600">Configure system settings and preferences</p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Open Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and changes in your Sanghatan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">New Member Added</h4>
                  <p className="text-sm text-gray-600">श्री अरुणकुमार जी added to विशेष निमंत्रित</p>
                </div>
                <Badge variant="secondary">1 day ago</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Report Generated</h4>
                  <p className="text-sm text-gray-600">Monthly member report downloaded</p>
                </div>
                <Badge variant="secondary">3 days ago</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Data Updated</h4>
                  <p className="text-sm text-gray-600">Member information updated for 5 members</p>
                </div>
                <Badge variant="secondary">1 week ago</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default VividhksetraDashboard;
