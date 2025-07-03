import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Mail, Phone, MessageCircle, Clock, Shield, Users, Lock, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";

interface AccessRequestData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  businessType: string;
  currentChallenges: string;
}

interface AccessRequestFormProps {
  onRequestSubmitted: () => void;
}

export default function AccessRequestForm({ onRequestSubmitted }: AccessRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<AccessRequestData>({
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      businessType: "",
      currentChallenges: ""
    }
  });

  const onSubmit = async (data: AccessRequestData) => {
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Access request submitted:", data);
    setIsSubmitting(false);
    onRequestSubmitted();
  };

  const checklistItems = [
    {
      category: "Store Setup",
      priority: "High",
      items: [
        {
          task: "Store is publicly accessible (no password protection)",
          description: "Ensure your store is public and not behind a password wall",
          requiresCS: true,
          csReason: "CS cần verify domain và check security settings",
          status: "locked"
        },
        {
          task: "Google Analytics 4 (GA4) installed and configured", 
          description: "Track user behavior and website performance with GA4",
          requiresCS: true,
          csReason: "CS sẽ cung cấp tracking code và hướng dẫn setup",
          status: "locked"
        },
        {
          task: "Google Ads conversion tracking installed",
          description: "Track which ads and keywords drive actual sales", 
          requiresCS: true,
          csReason: "Cần CS setup conversion pixel và verify integration",
          status: "locked"
        },
        {
          task: "SSL Certificate properly configured",
          description: "Secure customer data with proper HTTPS setup",
          requiresCS: true,
          csReason: "CS team cần verify SSL configuration và troubleshoot issues",
          status: "locked"
        }
      ]
    },
    {
      category: "Products", 
      priority: "High",
      items: [
        {
          task: "Product descriptions optimized for SEO",
          description: "Write compelling descriptions that rank well in search",
          requiresCS: true,
          csReason: "CS sẽ review và optimize content theo best practices",
          status: "locked"
        },
        {
          task: "High-quality product images uploaded",
          description: "Professional photos that showcase your products",
          requiresCS: false,
          csReason: "",
          status: "available"
        },
        {
          task: "Inventory levels properly set",
          description: "Accurate stock quantities to prevent overselling",
          requiresCS: true,
          csReason: "CS cần setup inventory alerts và sync with warehouse",
          status: "locked"
        },
        {
          task: "Product variants configured (size, color, etc.)",
          description: "Set up all product options customers can choose",
          requiresCS: true,
          csReason: "CS sẽ hướng dẫn setup variants và pricing structure",
          status: "locked"
        }
      ]
    },
    {
      category: "Payment & Shipping",
      priority: "Critical", 
      items: [
        {
          task: "Payment gateways integrated and tested",
          description: "Accept payments securely from customers",
          requiresCS: true,
          csReason: "CS cần activate payment accounts và test transactions",
          status: "locked"
        },
        {
          task: "Shipping zones and rates configured",
          description: "Set accurate shipping costs for different locations",
          requiresCS: true,
          csReason: "CS sẽ setup shipping calculator và carrier integrations",
          status: "locked"
        },
        {
          task: "Tax settings configured by region",
          description: "Comply with tax requirements in your selling regions",
          requiresCS: true,
          csReason: "CS team cần verify tax compliance và setup auto-calculation",
          status: "locked"
        }
      ]
    },
    {
      category: "Customer Experience",
      priority: "Medium",
      items: [
        {
          task: "Customer review system installed (Judge.me, Loox, etc.)",
          description: "Build social proof and trust with customer reviews",
          requiresCS: true,
          csReason: "CS sẽ setup review platform và import existing reviews",
          status: "locked"
        },
        {
          task: "Live chat widget installed and configured",
          description: "Provide instant customer support",
          requiresCS: true,
          csReason: "CS cần setup chat routing và train support team",
          status: "locked"
        },
        {
          task: "Email marketing automation setup",
          description: "Nurture customers with automated email sequences",
          requiresCS: true,
          csReason: "CS sẽ create email templates và setup automation workflows",
          status: "locked"
        },
        {
          task: "Return/refund policy clearly displayed",
          description: "Set clear expectations for returns and refunds",
          requiresCS: true,
          csReason: "CS cần review policy compliance và setup return process",
          status: "locked"
        }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'High': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            E-commerce Store Setup Checklist
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Complete setup guide với CS support để launch store thành công
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-red-800">Locked Content</span>
            </div>
            <p className="text-red-700 text-sm">
              Hầu hết các bước require CS support. Request access để unlock detailed instructions.
            </p>
          </div>
        </div>

        {/* Checklist Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {checklistItems.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    {category.category}
                  </CardTitle>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(category.priority)}`}>
                    {category.priority}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border rounded-lg p-3 bg-gray-50">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {item.requiresCS ? (
                            <Lock className="w-4 h-4 text-red-500" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{item.task}</h4>
                          <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                          {item.requiresCS && (
                            <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded p-2">
                              <div className="flex items-center gap-1">
                                <HelpCircle className="w-3 h-3 text-yellow-600" />
                                <span className="text-xs font-medium text-yellow-800">CS Required:</span>
                              </div>
                              <p className="text-xs text-yellow-700 mt-1">{item.csReason}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6 border-2 border-blue-200 bg-blue-50">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Priority Hotline</h3>
            <p className="text-blue-700 font-bold">1900-xxxx</p>
            <p className="text-sm text-gray-600 mt-2">Immediate CS assignment</p>
            <p className="text-xs text-blue-600 mt-1">Average response: 30 seconds</p>
          </Card>
          
          <Card className="text-center p-6 border-2 border-green-200 bg-green-50">
            <Mail className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-green-900 mb-2">Email Support</h3>
            <p className="text-green-700 font-bold">setup@company.com</p>
            <p className="text-sm text-gray-600 mt-2">Detailed setup guide</p>
            <p className="text-xs text-green-600 mt-1">Response within 1 hour</p>
          </Card>
          
          <Card className="text-center p-6 border-2 border-purple-200 bg-purple-50">
            <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Live Expert Chat</h3>
            <p className="text-purple-700 font-bold">Chat Now</p>
            <p className="text-sm text-gray-600 mt-2">Screen sharing available</p>
            <p className="text-xs text-purple-600 mt-1">Instant connection</p>
          </Card>
        </div>

        {/* Request Access Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              Request Full Checklist Access
            </CardTitle>
            <CardDescription>
              CS Expert sẽ unlock detailed instructions và provide hands-on support trong 15 phút
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="companyName"
                    rules={{ required: "Company name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactName"
                    rules={{ required: "Contact name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Person *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="businessType"
                  rules={{ required: "Business type is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Type *</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g., E-commerce, SaaS, Retail, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="currentChallenges"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current CS Challenges (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="What challenges are you facing with customer support?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-800">What You Get After Request:</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-blue-700">Unlock all 15+ checklist steps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-blue-700">Dedicated CS expert assignment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-blue-700">Step-by-step implementation guide</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-blue-700">Access to setup tools & resources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-blue-700">Free consultation call (30 mins)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-blue-700">Priority support for 7 days</span>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Connecting to CS Expert..." : "Get Instant CS Support & Full Access"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="text-center mt-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Why Most Steps Require CS Support?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">87%</div>
                <p className="text-sm text-gray-600">Setup errors when done alone</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2.5x</div>
                <p className="text-sm text-gray-600">Faster setup with CS support</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15min</div>
                <p className="text-sm text-gray-600">Average CS response time</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <h4 className="font-semibold text-yellow-800">Important Notice</h4>
              </div>
              <p className="text-sm text-yellow-700">
                Để tránh setup sai và mất thời gian troubleshoot, các technical steps require CS verification và support. 
                Điều này đảm bảo store của bạn launch thành công ngay từ lần đầu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
