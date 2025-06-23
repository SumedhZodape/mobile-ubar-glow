
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

// Validation schemas
const adminSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const userSchema = z.object({
  prant: z.string().min(1, 'Please select a Prant'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const vividhksetraSchema = z.object({
  sanghatan: z.string().min(1, 'Please select a Sanghatan'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Sample data
  const prants = [
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
  ];

  const sanghatans = [
    { value: 'sanghatan-1', label: 'Sanghatan 1' },
    { value: 'sanghatan-2', label: 'Sanghatan 2' },
    { value: 'sanghatan-3', label: 'Sanghatan 3' },
    { value: 'sanghatan-4', label: 'Sanghatan 4' },
  ];

  // Forms
  const adminForm = useForm({
    resolver: zodResolver(adminSchema),
    defaultValues: { userId: '', password: '' },
  });

  const userForm = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: { prant: '', password: '' },
  });

  const vividhksetraForm = useForm({
    resolver: zodResolver(vividhksetraSchema),
    defaultValues: { sanghatan: '', password: '' },
  });

  const handleAdminLogin = async (data: z.infer<typeof adminSchema>) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (data.userId === 'admin' && data.password === 'admin123') {
        localStorage.setItem('userType', 'admin');
        localStorage.setItem('userId', data.userId);
        toast({ title: 'Login Successful', description: 'Welcome Admin!' });
        navigate('/admin-dashboard');
      } else {
        toast({ 
          title: 'Login Failed', 
          description: 'Invalid credentials',
          variant: 'destructive' 
        });
      }
    } catch (error) {
      toast({ 
        title: 'Error', 
        description: 'Something went wrong',
        variant: 'destructive' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserLogin = async (data: z.infer<typeof userSchema>) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (data.password === 'user123') {
        localStorage.setItem('userType', 'user');
        localStorage.setItem('prant', data.prant);
        toast({ title: 'Login Successful', description: `Welcome ${data.prant} user!` });
        navigate('/user-dashboard');
      } else {
        toast({ 
          title: 'Login Failed', 
          description: 'Invalid password',
          variant: 'destructive' 
        });
      }
    } catch (error) {
      toast({ 
        title: 'Error', 
        description: 'Something went wrong',
        variant: 'destructive' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVividhksetraLogin = async (data: z.infer<typeof vividhksetraSchema>) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (data.password === 'vividh123') {
        localStorage.setItem('userType', 'vividhksetra');
        localStorage.setItem('sanghatan', data.sanghatan);
        toast({ title: 'Login Successful', description: `Welcome ${data.sanghatan} user!` });
        navigate('/vividhksetra-dashboard');
      } else {
        toast({ 
          title: 'Login Failed', 
          description: 'Invalid password',
          variant: 'destructive' 
        });
      }
    } catch (error) {
      toast({ 
        title: 'Error', 
        description: 'Something went wrong',
        variant: 'destructive' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">RSS</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">RSS Portal</h1>
          <p className="text-gray-600">राष्ट्रीय स्वयंसेवक संघ</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Select your user type and login
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="admin" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="admin">Admin</TabsTrigger>
                <TabsTrigger value="user">User</TabsTrigger>
                <TabsTrigger value="vividhksetra">Vividhksetra</TabsTrigger>
              </TabsList>

              <TabsContent value="admin" className="space-y-4">
                <Form {...adminForm}>
                  <form onSubmit={adminForm.handleSubmit(handleAdminLogin)} className="space-y-4">
                    <FormField
                      control={adminForm.control}
                      name="userId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>User ID</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your user ID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={adminForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Enter your password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isLoading}>
                      {isLoading ? 'Logging in...' : 'Login as Admin'}
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="user" className="space-y-4">
                <Form {...userForm}>
                  <form onSubmit={userForm.handleSubmit(handleUserLogin)} className="space-y-4">
                    <FormField
                      control={userForm.control}
                      name="prant"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prant</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your Prant" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {prants.map((prant) => (
                                <SelectItem key={prant.value} value={prant.value}>
                                  {prant.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={userForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Enter your password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isLoading}>
                      {isLoading ? 'Logging in...' : 'Login as User'}
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="vividhksetra" className="space-y-4">
                <Form {...vividhksetraForm}>
                  <form onSubmit={vividhksetraForm.handleSubmit(handleVividhksetraLogin)} className="space-y-4">
                    <FormField
                      control={vividhksetraForm.control}
                      name="sanghatan"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sanghatan</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your Sanghatan" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {sanghatans.map((sanghatan) => (
                                <SelectItem key={sanghatan.value} value={sanghatan.value}>
                                  {sanghatan.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={vividhksetraForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Enter your password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700" disabled={isLoading}>
                      {isLoading ? 'Logging in...' : 'Login as Vividhksetra User'}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-600">
          <p>Demo Credentials:</p>
          <p>Admin: admin / admin123</p>
          <p>User: Any Prant / user123</p>
          <p>Vividhksetra: Any Sanghatan / vividh123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
