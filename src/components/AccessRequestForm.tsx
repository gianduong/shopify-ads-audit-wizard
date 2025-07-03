
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Mail, Phone, MessageCircle, Clock, Shield, Users } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Request Access to Customer Support Strategy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Để truy cập vào chiến lược tăng touchpoint với khách hàng, vui lòng liên hệ với CS team của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Hotline Support</h3>
            <p className="text-blue-700">1900-xxxx</p>
            <p className="text-sm text-gray-500 mt-2">24/7 Available</p>
          </Card>
          
          <Card className="text-center p-6">
            <Mail className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-green-900 mb-2">Email Support</h3>
            <p className="text-green-700">support@company.com</p>
            <p className="text-sm text-gray-500 mt-2">Response in 2-4 hours</p>
          </Card>
          
          <Card className="text-center p-6">
            <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Live Chat</h3>
            <p className="text-purple-700">Chat with Expert</p>
            <p className="text-sm text-gray-500 mt-2">Instant Response</p>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              Request Access Form
            </CardTitle>
            <CardDescription>
              Fill out this form and our CS team will contact you within 30 minutes to provide access
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

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-semibold text-yellow-800">What Happens Next?</h4>
                  </div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• CS Expert sẽ gọi điện trong 30 phút</li>
                    <li>• Tư vấn miễn phí về chiến lược touchpoint</li>
                    <li>• Cung cấp access link sau khi xác thực</li>
                    <li>• Hỗ trợ implementation nếu cần</li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting Request..." : "Request Access Now"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Why Contact CS First?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🎯 Personalized Strategy</h4>
                <p className="text-gray-600 text-sm">CS team sẽ customize checklist theo industry và business model của bạn</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📞 Implementation Support</h4>
                <p className="text-gray-600 text-sm">Được hỗ trợ trực tiếp trong quá trình áp dụng các touchpoint strategies</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📊 Performance Tracking</h4>
                <p className="text-gray-600 text-sm">Access vào dashboard để track effectiveness của từng touchpoint</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🔄 Ongoing Optimization</h4>
                <p className="text-gray-600 text-sm">Regular review calls để optimize và improve customer interaction rates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
