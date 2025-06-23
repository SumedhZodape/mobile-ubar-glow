
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Home, Users, FileText, Settings, LogOut, Download, Eye } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.clear();
    toast({ title: 'Logged Out', description: 'You have been logged out successfully' });
    navigate('/login');
  };

  // Sample data for categories
  const categories = [
    { name: 'संपूर्ण सूची', count: 1483, color: 'bg-blue-500' },
    { name: 'क्षेत्र/प्रांत संचालक', count: 75, color: 'bg-green-500' },
    { name: 'क्षेत्र/प्रांत कार्यवाह', count: 136, color: 'bg-purple-500' },
    { name: 'क्षेत्र/प्रांत प्रचारक', count: 96, color: 'bg-orange-500' },
    { name: 'शारीरिक प्रमुख', count: 56, color: 'bg-red-500' },
    { name: 'बौद्धिक प्रमुख', count: 57, color: 'bg-indigo-500' },
    { name: 'सेवा प्रमुख', count: 57, color: 'bg-pink-500' },
    { name: 'व्यवस्था प्रमुख', count: 55, color: 'bg-teal-500' },
  ];

  const recentUsers = [
    { id: 1, name: 'मा. मोहन जी भागवत', level: 'अ. भा.', type: 'रा. स्व. संघ', location: 'नागपुर' },
    { id: 2, name: 'श्री दत्तात्रेय जी होसबाले', level: 'अ. भा.', type: 'मा. सरकार्यवाह', location: 'दिल्ली' },
    { id: 3, name: 'श्री जे. कृष्णागोपाल जी', level: 'अ. भा.', type: 'सह सरकार्यवाह', location: 'दिल्ली' },
    { id: 4, name: 'श्री मुकुल जी', level: 'अ. भा.', type: 'सह सरकार्यवाह', location: 'बेंगलुरु' },
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
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Admin</Badge>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            राष्ट्रीय स्वयंसेवक संघ - अखिल भारतीय प्रतिनिधि सभा - 2025
          </h2>
          <p className="text-gray-600">अपडेटेड सूची</p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Reports
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>संख्या: {category.count}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>Latest registered users in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{user.name}</h4>
                        <p className="text-sm text-gray-600">{user.level} - {user.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{user.location}</p>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage all users in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">User Management</h3>
                  <p className="text-gray-600 mb-4">Detailed user management features will be implemented here</p>
                  <Button className="bg-orange-600 hover:bg-orange-700">Add New User</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reports & Analytics</CardTitle>
                <CardDescription>Generate and view various reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Reports Dashboard</h3>
                  <p className="text-gray-600 mb-4">Comprehensive reporting features will be available here</p>
                  <Button className="bg-orange-600 hover:bg-orange-700">Generate Report</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure system preferences and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Configuration Panel</h3>
                  <p className="text-gray-600 mb-4">System configuration options will be available here</p>
                  <Button className="bg-orange-600 hover:bg-orange-700">Open Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
