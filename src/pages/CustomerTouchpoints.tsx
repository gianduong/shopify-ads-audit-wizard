import React, { useState } from 'react';
import AccessRequestForm from '@/components/AccessRequestForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { MessageCircle, Phone, Mail, Users, ShoppingCart, AlertTriangle, CheckCircle2, Clock, Star, HeadphonesIcon } from "lucide-react";

interface TouchpointItem {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  checked: boolean;
  impact: string;
  implementation: string;
  expectedContacts: string;
}

const touchpointData: TouchpointItem[] = [
  // Pre-Purchase Pain Points
  {
    id: 'pre-1',
    title: 'Thông tin sản phẩm không đầy đủ',
    description: 'Cố tình thiếu chi tiết quan trọng để khách phải hỏi',
    category: 'pre-purchase',
    priority: 'high',
    checked: false,
    impact: 'Khách hàng phải contact để hỏi thành phần, cách sử dụng, tương thích',
    implementation: 'Giảm product description xuống 60%, không có FAQ section, ẩn technical specs',
    expectedContacts: '2-3 contacts per interested customer'
  },
  {
    id: 'pre-2',
    title: 'Size guide phức tạp/không rõ ràng',
    description: 'Bảng size khó hiểu, thiếu hướng dẫn đo',
    category: 'pre-purchase',
    priority: 'high',
    checked: false,
    impact: 'Khách phải hỏi size phù hợp, cách đo, tư vấn chọn size',
    implementation: 'Size chart không có hình minh họa, đơn vị đo lạ, thiếu size guide video',
    expectedContacts: '1-2 contacts per fashion purchase'
  },
  {
    id: 'pre-3',
    title: 'So sánh sản phẩm khó khăn',
    description: 'Không có tool compare, specs khó hiểu',
    category: 'pre-purchase',
    priority: 'medium',
    checked: false,
    impact: 'Cần CS tư vấn chọn sản phẩm phù hợp nhất',
    implementation: 'Xóa comparison tool, để specs dạng kỹ thuật phức tạp',
    expectedContacts: '1-2 contacts for product selection'
  },
  {
    id: 'pre-4',
    title: 'Chính sách đổi trả mơ hồ',
    description: 'Điều kiện đổi trả không rõ ràng',
    category: 'pre-purchase',
    priority: 'high',
    checked: false,
    impact: 'Khách hỏi về warranty, return conditions, exchange policy',
    implementation: 'Return policy dài dòng, điều kiện phức tạp, thiếu examples',
    expectedContacts: '1 contact per concerned customer'
  },

  // During Purchase Pain Points
  {
    id: 'purchase-1',
    title: 'Checkout process có friction',
    description: 'Thêm verification steps cần CS confirm',
    category: 'purchase',
    priority: 'high',
    checked: false,
    impact: 'Phone verification, email confirmation, identity check',
    implementation: 'Thêm OTP verification, account verification cho first-time buyers',
    expectedContacts: '1 contact per new customer'
  },
  {
    id: 'purchase-2',
    title: 'Payment methods hạn chế',
    description: 'Một số payment cần approval manual',
    category: 'purchase',
    priority: 'medium',
    checked: false,
    impact: 'Bank transfer cần confirm, international cards cần verify',
    implementation: 'COD cần CS call confirm, wire transfer cần manual approval',
    expectedContacts: '1 contact per alternative payment'
  },
  {
    id: 'purchase-3',
    title: 'Discount codes có điều kiện',
    description: 'Mã giảm giá cần CS activate hoặc verify',
    category: 'purchase',
    priority: 'medium',
    checked: false,
    impact: 'VIP codes cần CS unlock, bulk order discounts cần negotiate',
    implementation: 'Exclusive codes chỉ CS có thể apply, member tiers cần verify',
    expectedContacts: '1 contact per discount request'
  },

  // Post-Purchase Engagement
  {
    id: 'post-1',
    title: 'Proactive follow-up campaign',
    description: 'Systematic outreach sau khi mua',
    category: 'post-purchase',
    priority: 'high',
    checked: false,
    impact: 'Check satisfaction, upsell, cross-sell, feedback collection',
    implementation: 'Email/SMS/call sau 24h, 7 ngày, 30 ngày, 90 ngày',
    expectedContacts: '4 contacts per customer lifecycle'
  },
  {
    id: 'post-2',
    title: 'Usage guidance phức tạp',
    description: 'Sản phẩm cần hướng dẫn sử dụng từ CS',
    category: 'post-purchase',
    priority: 'medium',
    checked: false,
    impact: 'Setup support, troubleshooting, optimization tips',
    implementation: 'Manual phức tạp, video tutorials ít, cần personal guidance',
    expectedContacts: '2-3 contacts per complex product'
  },
  {
    id: 'post-3',
    title: 'Warranty & maintenance reminders',
    description: 'Nhắc nhở bảo dưỡng, warranty claims',
    category: 'post-purchase',
    priority: 'low',
    checked: false,
    impact: 'Maintenance scheduling, warranty extensions, upgrade offers',
    implementation: 'Auto reminders qua multiple channels, proactive maintenance calls',
    expectedContacts: '2-4 contacts per year per product'
  },

  // Value-Added Services
  {
    id: 'value-1',
    title: 'Personal shopping assistance',
    description: 'Tư vấn cá nhân hóa qua CS',
    category: 'value-added',
    priority: 'high',
    checked: false,
    impact: 'Style consultation, product matching, trend advice',
    implementation: 'VIP service, personal shopper program, styling sessions',
    expectedContacts: '3-5 contacts per styling session'
  },
  {
    id: 'value-2',
    title: 'Loyalty program phức tạp',
    description: 'Points system cần CS explain & manage',
    category: 'value-added',
    priority: 'medium',
    checked: false,
    impact: 'Points calculation, tier upgrades, reward redemption guidance',
    implementation: 'Complex point rules, tier benefits unclear, manual redemption',
    expectedContacts: '1-2 contacts per program interaction'
  },
  {
    id: 'value-3',
    title: 'Custom/bulk orders',
    description: 'Đơn đặc biệt phải qua CS',
    category: 'value-added',
    priority: 'medium',
    checked: false,
    impact: 'Volume discounts, customization options, special requests',
    implementation: 'No online bulk pricing, customization needs consultation',
    expectedContacts: '2-5 contacts per custom order'
  },

  // Community & Engagement
  {
    id: 'community-1',
    title: 'User community với CS active',
    description: 'CS tham gia groups, forums, social media',
    category: 'community',
    priority: 'medium',
    checked: false,
    impact: 'Expert advice, problem solving, trend discussions',
    implementation: 'Facebook groups, Discord servers, forum participation',
    expectedContacts: '10-20 community interactions daily'
  },
  {
    id: 'community-2',
    title: 'Review response strategy',
    description: 'CS respond mọi reviews để engage',
    category: 'community',
    priority: 'medium',
    checked: false,
    impact: 'Public problem solving, additional support offers',
    implementation: 'Respond to all reviews, offer additional help publicly',
    expectedContacts: '5-10 review interactions daily'
  },

  // Technical & Educational
  {
    id: 'education-1',
    title: 'Educational content gaps',
    description: 'Thiếu tutorials, guides → phải hỏi CS',
    category: 'education',
    priority: 'medium',
    checked: false,
    impact: 'How-to questions, best practices, troubleshooting',
    implementation: 'Limited FAQs, no video tutorials, complex instructions',
    expectedContacts: '1-2 educational contacts per customer'
  },
  {
    id: 'education-2',
    title: 'Seasonal advice campaigns',
    description: 'CS chủ động tư vấn theo mùa',
    category: 'education',
    priority: 'low',
    checked: false,
    impact: 'Seasonal product care, weather-appropriate usage, holiday tips',
    implementation: 'Proactive seasonal emails, care reminders, usage optimization',
    expectedContacts: '4-6 seasonal contacts per year'
  }
];

export default function CustomerTouchpoints() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hasAccess, setHasAccess] = useState(false);

  const categories = [
    { id: 'all', label: 'Tất Cả', icon: Users },
    { id: 'pre-purchase', label: 'Trước Mua', icon: ShoppingCart },
    { id: 'purchase', label: 'Khi Mua', icon: CheckCircle2 },
    { id: 'post-purchase', label: 'Sau Mua', icon: HeadphonesIcon },
    { id: 'value-added', label: 'Dịch Vụ VIP', icon: Star },
    { id: 'community', label: 'Cộng Đồng', icon: MessageCircle },
    { id: 'education', label: 'Giáo Dục', icon: Users }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredItems = selectedCategory === 'all' 
    ? touchpointData 
    : touchpointData.filter(item => item.category === selectedCategory);

  const totalItems = filteredItems.length;
  const checkedCount = filteredItems.filter(item => checkedItems[item.id]).length;
  const progress = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0;

  const handleItemCheck = (id: string, checked: boolean) => {
    setCheckedItems(prev => ({ ...prev, [id]: checked }));
  };

  const handleAccessGranted = () => {
    setHasAccess(true);
  };

  // Show access request form if user doesn't have access
  if (!hasAccess) {
    return <AccessRequestForm onRequestSubmitted={handleAccessGranted} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Support Touchpoint Strategy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Chiến lược tăng điểm tiếp xúc với khách hàng qua Customer Support
          </p>
          
          <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Implementation Progress</h3>
              <span className="text-sm text-gray-500">
                {checkedCount}/{totalItems} completed ({progress.toFixed(1)}%)
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              const categoryItems = category.id === 'all' 
                ? touchpointData 
                : touchpointData.filter(item => item.category === category.id);
              const categoryChecked = categoryItems.filter(item => checkedItems[item.id]).length;
              
              return (
                <TabsTrigger key={category.id} value={category.id} className="flex flex-col items-center p-4">
                  <Icon className="w-5 h-5 mb-1" />
                  <span className="text-sm font-medium">{category.label}</span>
                  <span className="text-xs text-gray-500">
                    {categoryChecked}/{categoryItems.length}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value={selectedCategory} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className={`transition-all duration-200 hover:shadow-lg ${
                  checkedItems[item.id] ? 'ring-2 ring-green-500 bg-green-50' : 'hover:shadow-md'
                }`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          checked={checkedItems[item.id] || false}
                          onCheckedChange={(checked) => handleItemCheck(item.id, checked as boolean)}
                        />
                        <Badge className={`text-xs ${getPriorityColor(item.priority)}`}>
                          {item.priority.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 mt-2">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-blue-600">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        <span className="font-medium">{item.expectedContacts}</span>
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full">
                            Chi Tiết Implementation
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{item.title}</DialogTitle>
                            <DialogDescription>{item.description}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-green-800 mb-2">💡 Impact & Value:</h4>
                              <p className="text-gray-700">{item.impact}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-blue-800 mb-2">🛠️ Implementation Strategy:</h4>
                              <p className="text-gray-700">{item.implementation}</p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                              <h4 className="font-semibold text-yellow-800 mb-2">📞 Expected Contact Frequency:</h4>
                              <p className="text-yellow-700">{item.expectedContacts}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <AlertTriangle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Không có items nào trong category này
                </h3>
                <p className="text-gray-500">
                  Chọn category khác để xem các touchpoint strategies
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📊 Expected Results Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Phone Contacts</h3>
              <p className="text-blue-700">15-25 contacts per customer journey</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-green-900 mb-2">Email Interactions</h3>
              <p className="text-green-700">10-20 emails per customer lifecycle</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Chat Sessions</h3>
              <p className="text-purple-700">5-10 chat interactions per purchase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
