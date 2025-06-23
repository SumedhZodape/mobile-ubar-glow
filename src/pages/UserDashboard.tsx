
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Home, FileText, User, LogOut, Eye, Download } from 'lucide-react';

const UserDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const prant = localStorage.getItem('prant') || 'Unknown';

  const handleLogout = () => {
    localStorage.clear();
    toast({ title: 'Logged Out', description: 'You have been logged out successfully' });
    navigate('/login');
  };

  const userCategories = [
    { name: 'संपूर्ण प्रमुख', count: 60, description: 'सभी प्रमुखों की सूची' },
    { name: 'प्रचार प्रमुख', count: 63, description: 'प्रचार विभाग प्रमुख' },
    { name: 'विभाग प्रचारक', count: 312, description: 'विभागीय प्रचारक सूची' },
    { name: 'प्रतिनिधि', count: 197, description: 'प्रतिनिधि सदस्य' },
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
              <h1 className="text-xl font-semibold text-gray-900">User Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="capitalize">{prant} User</Badge>
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
            {prant} प्रांत - सूची
          </h2>
          <p className="text-gray-600">प्रांतीय सदस्यों की जानकारी</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-orange-600">{category.count}</span>
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

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Management
              </CardTitle>
              <CardDescription>Manage your profile and personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Personal Details</h4>
                  <p className="text-sm text-gray-600">Update your personal information and contact details</p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Update Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Documents & Forms
              </CardTitle>
              <CardDescription>Access important documents and forms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Form Submissions</h4>
                  <p className="text-sm text-gray-600">Submit and track your form applications</p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  View Forms
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Profile Updated</h4>
                  <p className="text-sm text-gray-600">Updated contact information</p>
                </div>
                <Badge variant="secondary">2 days ago</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Document Downloaded</h4>
                  <p className="text-sm text-gray-600">Downloaded member list</p>
                </div>
                <Badge variant="secondary">5 days ago</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default UserDashboard;
