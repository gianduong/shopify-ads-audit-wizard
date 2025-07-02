import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Store, 
  ShoppingBag, 
  Shield, 
  Target, 
  BarChart3, 
  Scale, 
  Tag, 
  Rss, 
  PenTool, 
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Info,
  Lightbulb,
  DollarSign,
  Zap,
  Eye,
  HelpCircle
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  checked: boolean;
  explanation?: string;
  riskIfMissing?: string[];
  benefitWhenComplete?: string[];
}

const Index = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const checklistData: ChecklistItem[] = [
    // Store Configuration
    { 
      id: 'store-1', 
      title: 'Store không bị khóa bằng mật khẩu', 
      description: 'Đảm bảo store ở chế độ công khai, không bị khóa password', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'Google cần truy cập website để kiểm tra nội dung và chính sách. Store bị khóa password sẽ khiến Google không thể crawl được.',
      riskIfMissing: [
        'Quảng cáo bị từ chối ngay lập tức',
        'Google không thể xác minh tuân thủ chính sách',
        'Conversion tracking hoàn toàn không hoạt động',
        'Không thể chạy bất kỳ campaign nào'
      ],
      benefitWhenComplete: [
        'Quảng cáo được phê duyệt nhanh chóng',
        'Google có thể xác minh tuân thủ chính sách',
        'Conversion tracking hoạt động chính xác',
        'Tối ưu hóa campaign hiệu quả'
      ]
    },
    { 
      id: 'store-2', 
      title: 'Cài đặt Google Analytics 4 (GA4)', 
      description: 'Theo dõi hành vi người dùng trên website', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'GA4 cung cấp dữ liệu về hành trình khách hàng, giúp Google Ads tối ưu hóa targeting và bidding.',
      riskIfMissing: [
        'Không có dữ liệu về khách hàng',
        'Không thể tối ưu hóa campaigns',
        'Bỏ lỡ cơ hội remarketing',
        'ROAS thấp do thiếu insights'
      ],
      benefitWhenComplete: [
        'Hiểu rõ hành vi khách hàng',
        'Tối ưu hóa campaigns dựa trên data',
        'Remarketing hiệu quả',
        'Cải thiện ROAS thông qua insights'
      ]
    },
    { 
      id: 'store-3', 
      title: 'Kết nối Google Ads account', 
      description: 'Tích hợp tài khoản Google Ads để kích hoạt conversion tracking', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'Kết nối này cho phép theo dõi conversions và sử dụng Smart Bidding để tối ưu hóa tự động.',
      riskIfMissing: [
        'Không theo dõi được conversions',
        'Lãng phí ngân sách quảng cáo',
        'Không sử dụng được Smart Bidding',
        'Không tối ưu hóa được campaigns'
      ],
      benefitWhenComplete: [
        'Theo dõi conversions chính xác',
        'Sử dụng Smart Bidding hiệu quả',
        'Tối ưu hóa tự động',
        'Đo lường ROI chính xác'
      ]
    },
    { 
      id: 'store-4', 
      title: 'Cài đặt app đánh giá (Review)', 
      description: 'Cài đặt ứng dụng như Judge.me, Loox để tăng độ tin cậy sản phẩm', 
      category: 'store', 
      priority: 'medium', 
      checked: false,
      explanation: 'Reviews tạo social proof, tăng tỷ lệ chuyển đổi 15-30%. Khách hàng tin tưởng hơn khi thấy đánh giá tích cực.',
      riskIfMissing: [
        'Khách hàng thiếu tin tưởng',
        'Tỷ lệ chuyển đổi thấp',
        'Tỷ lệ bounce cao',
        'Khách chọn đối thủ có reviews'
      ],
      benefitWhenComplete: [
        'Tăng conversion rate 15-30%',
        'Khách hàng tin tưởng hơn',
        'Quality Score tốt hơn',
        'Lợi thế cạnh tranh'
      ]
    },
    { 
      id: 'store-5', 
      title: 'Có chương trình khuyến mãi/giảm giá', 
      description: 'Mã giảm giá hoặc miễn phí vận chuyển để tăng tỷ lệ chuyển đổi', 
      category: 'store', 
      priority: 'medium', 
      checked: false,
      explanation: 'Khuyến mãi giúp giảm cart abandonment và thu hút khách hàng lần đầu mua hàng.',
      riskIfMissing: [
        'Cart abandonment cao',
        'Khó cạnh tranh về giá',
        'Chi phí thu hút khách hàng cao',
        'Khách망설 khi mua lần đầu'
      ],
      benefitWhenComplete: [
        'Giảm cart abandonment',
        'Lợi thế cạnh tranh về giá',
        'Thu hút khách hàng mới',
        'Test được nhiều offers khác nhau'
      ]
    },

    // Product Compliance
    { 
      id: 'product-1', 
      title: 'Không bán sản phẩm bị cấm', 
      description: 'Kiểm tra với Google Policy để đảm bảo sản phẩm được phép quảng cáo', 
      category: 'product', 
      priority: 'high', 
      checked: false,
      explanation: 'Google cấm quảng cáo nhiều loại sản phẩm như vũ khí, thuốc, sản phẩm người lớn. Vi phạm dẫn đến khóa account.',
      riskIfMissing: [
        'Account bị khóa ngay lập tức',
        'Mất toàn bộ quyền quảng cáo',
        'Khó tạo account mới',
        'Mất đầu tư quảng cáo'
      ],
      benefitWhenComplete: [
        'Account hoạt động bình thường',
        'Quảng cáo tất cả sản phẩm hợp lệ',
        'Bảo vệ đầu tư quảng cáo',
        'Kinh doanh bền vững'
      ]
    },
    { 
      id: 'product-2', 
      title: 'Tránh từ ngữ nhạy cảm', 
      description: 'Ví dụ: "hiệu quả 100%", "an toàn tuyệt đối", "chữa khỏi hoàn toàn"', 
      category: 'product', 
      priority: 'high', 
      checked: false,
      explanation: 'Những từ ngữ hứa hẹn quá mức, đặc biệt cho sản phẩm sức khỏe, sẽ kích hoạt bộ lọc policy của Google.',
      riskIfMissing: [
        'Quảng cáo bị từ chối liên tục',
        'Account nhận cảnh báo policy',
        'Hạn chế khả năng quảng cáo',
        'Mất thời gian chỉnh sửa'
      ],
      benefitWhenComplete: [
        'Quảng cáo được phê duyệt nhanh',
        'Delivery ổn định',
        'Không có cảnh báo policy',
        'Khả năng quảng cáo đầy đủ'
      ]
    },
    { 
      id: 'product-3', 
      title: 'Không có reviews giả', 
      description: 'Tránh đánh giá được tạo bởi app hoặc nội dung giả mạo', 
      category: 'product', 
      priority: 'high', 
      checked: false,
      explanation: 'Google có công nghệ phát hiện reviews giả. Reviews thật sẽ mất thời gian nhưng tạo lòng tin bền vững.',
      riskIfMissing: [
        'Account bị đình chỉ do vi phạm policy',
        'Mất lòng tin khách hàng nếu bị phát hiện',
        'Bị phạt từ các platform đánh giá',
        'Danh tiếng thương hiệu bị ảnh hưởng'
      ],
      benefitWhenComplete: [
        'Social proof thật sự',
        'Bảo vệ khỏi vi phạm policy',
        'Lòng tin khách hàng lâu dài',
        'Uy tín thương hiệu tốt'
      ]
    },

    // Legal & UX Requirements  
    { 
      id: 'legal-1', 
      title: 'Chính sách bảo mật (Privacy Policy)', 
      description: 'Chính sách bảo mật bắt buộc phải có', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'Bắt buộc theo pháp luật nhiều quốc gia và điều kiện tiên quyết để Google Ads chấp thuận.',
      riskIfMissing: [
        'Quảng cáo bị từ chối ngay lập tức',
        'Vi phạm pháp luật, có thể bị phạt',
        'Không thu thập được dữ liệu khách hàng',
        'Mất lòng tin khách hàng'
      ],
      benefitWhenComplete: [
        'Quảng cáo được phê duyệt',
        'Tuân thủ pháp luật',
        'Khách hàng tin tưởng',
        'Thu thập dữ liệu hợp pháp'
      ]
    },
    { 
      id: 'legal-2', 
      title: 'Điều khoản dịch vụ (Terms of Service)', 
      description: 'Điều khoản và điều kiện sử dụng dịch vụ', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'Bảo vệ pháp lý cho doanh nghiệp và thể hiện tính chuyên nghiệp với khách hàng.',
      riskIfMissing: [
        'Tranh chấp pháp lý với khách hàng',
        'Không có bảo vệ trong xung đột',
        'Quảng cáo có thể bị từ chối',
        'Thiếu tính chuyên nghiệp'
      ],
      benefitWhenComplete: [
        'Bảo vệ pháp lý',
        'Giảm tranh chấp',
        'Thể hiện tính chuyên nghiệp',
        'Tuân thủ Google Ads'
      ]
    },
    { 
      id: 'legal-3', 
      title: 'Chính sách đổi trả & hoàn tiền', 
      description: 'Chính sách đổi trả và hoàn tiền rõ ràng', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'Giảm lo lắng của khách hàng khi mua hàng, đặc biệt quan trọng cho thương hiệu mới.',
      riskIfMissing: [
        'Không chạy được Google Shopping ads',
        'Cart abandonment cao (lên đến 70%)',
        'Tranh chấp với khách hàng',
        'Vấn đề với payment processor'
      ],
      benefitWhenComplete: [
        'Truy cập Google Shopping',
        'Giảm cart abandonment',
        'Ít tranh chấp hơn',
        'Khách hàng tin tưởng mua hàng'
      ]
    },
    { 
      id: 'legal-4', 
      title: 'Thông tin vận chuyển & thanh toán rõ ràng', 
      description: 'Phí vận chuyển và phương thức thanh toán minh bạch', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'Chi phí ẩn là nguyên nhân chính khiến khách hàng bỏ giỏ hàng và vi phạm policy Google.',
      riskIfMissing: [
        'Cart abandonment cao (lên đến 70%)',
        'Vi phạm policy Google',
        'Khách hàng phàn nàn',
        'Danh tiếng bị ảnh hưởng'
      ],
      benefitWhenComplete: [
        'Cart abandonment thấp',
        'Tuân thủ policy',
        'Khách hàng tin tưởng',
        'Trải nghiệm mua hàng mượt mà'
      ]
    },
    { 
      id: 'legal-5', 
      title: 'Thông tin liên hệ đầy đủ', 
      description: 'Email/số điện thoại thật, có thể liên lạc được', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'Thông tin liên hệ thật là yêu cầu của Google Ads và tạo lòng tin với khách hàng.',
      riskIfMissing: [
        'Quảng cáo bị từ chối',
        'Khách hàng thiếu tin tưởng',
        'Thiếu tính chuyên nghiệp',
        'Không giải quyết được vấn đề khách hàng'
      ],
      benefitWhenComplete: [
        'Quảng cáo được phê duyệt',
        'Khách hàng tin tưởng cao',
        'Thể hiện tính chuyên nghiệp',
        'Dịch vụ khách hàng hiệu quả'
      ]
    },

    // Google Ads Settings
    { 
      id: 'ads-1', 
      title: 'Chấp nhận Customer Data Terms (bắt buộc)', 
      description: 'Yêu cầu bắt buộc cho tất cả advertisers', 
      category: 'ads', 
      priority: 'high', 
      checked: false,
      explanation: 'Điều khoản bắt buộc của Google về cách xử lý dữ liệu khách hàng trong quảng cáo.',
      riskIfMissing: [
        'Không thể chạy bất kỳ Google Ads nào',
        'Account bị đình chỉ cho đến khi chấp nhận',
        'Mất khả năng quảng cáo hoàn toàn'
      ],
      benefitWhenComplete: [
        'Truy cập đầy đủ tính năng Google Ads',
        'Xử lý dữ liệu tuân thủ',
        'Account hoạt động bình thường'
      ]
    },
    { 
      id: 'ads-2', 
      title: 'Bật View-through conversions', 
      description: 'Ghi nhận conversions khi user không click nhưng quay lại sau', 
      category: 'ads', 
      priority: 'medium', 
      checked: false,
      explanation: 'Nhiều khách hàng xem quảng cáo nhưng không click ngay, mà quay lại mua sau. Tính năng này theo dõi hành vi đó.',
      riskIfMissing: [
        'Báo cáo hiệu quả quảng cáo thấp hơn thực tế',
        'Thiếu 20-30% attribution conversions',
        'Tối ưu hóa không chính xác'
      ],
      benefitWhenComplete: [
        'Attribution conversion hoàn chỉnh',
        'Hiểu rõ impact của quảng cáo',
        'Tối ưu hóa campaigns tốt hơn'
      ]
    },

    // Events & Goals
    { 
      id: 'events-1', 
      title: 'Thiết lập mục tiêu conversion cho campaign', 
      description: 'Mục tiêu chính như mua hàng, leads...', 
      category: 'events', 
      priority: 'high', 
      checked: false,
      explanation: 'Mục tiêu rõ ràng giúp Google biết thành công là gì và tối ưu hóa campaigns theo đó.',
      riskIfMissing: [
        'Campaigns tối ưu hóa sai hướng',
        'Lãng phí ngân sách',
        'ROI kém',
        'Không sử dụng được Smart Bidding'
      ],
      benefitWhenComplete: [
        'Campaigns tối ưu cho mục tiêu kinh doanh',
        'Smart Bidding hoạt động',
        'ROI tốt hơn',
        'Targeting khách hàng chính xác'
      ]
    },

    // Tracking Tools & Tag Manager
    { 
      id: 'tracking-1', 
      title: 'Cài đặt Google Tag Manager (GTM)', 
      description: 'Dễ dàng quản lý tracking từ nhiều platform', 
      category: 'tracking', 
      priority: 'high', 
      checked: false,
      explanation: 'GTM giúp quản lý tất cả tracking codes một cách dễ dàng mà không cần developer.',
      riskIfMissing: [
        'Khó triển khai tracking',
        'Bỏ lỡ cơ hội theo dõi',
        'Phụ thuộc vào developer cho mọi thay đổi'
      ],
      benefitWhenComplete: [
        'Quản lý tracking dễ dàng',
        'Thu thập dữ liệu toàn diện',
        'Triển khai tracking mới nhanh chóng'
      ]
    },
    { 
      id: 'tracking-2', 
      title: 'Google Ads Remarketing Tag', 
      description: 'Để retarget khách hàng', 
      category: 'tracking', 
      priority: 'high', 
      checked: false,
      explanation: 'Remarketing cho phép tiếp cận lại những visitor chưa mua hàng với chi phí thấp và conversion rate cao.',
      riskIfMissing: [
        'Không thể retarget visitors',
        'Bỏ lỡ cơ hội ROI cao',
        'Chỉ quảng cáo cold traffic',
        'Chi phí thu hút khách hàng cao'
      ],
      benefitWhenComplete: [
        'Campaigns remarketing conversion cao',
        'Chi phí thu hút khách hàng thấp hơn',
        'ROI tốt hơn',
        'Phục hồi abandoned visitors'
      ]
    },

    // Feed & Merchant Center
    { 
      id: 'feed-1', 
      title: 'Tạo Google Merchant Feed', 
      description: 'Qua app hoặc API', 
      category: 'feed', 
      priority: 'medium', 
      checked: false,
      explanation: 'Merchant Center feed cho phép chạy Shopping ads và Performance Max, thường có ROI tốt cho e-commerce.',
      riskIfMissing: [
        'Không chạy được Shopping ads',
        'Bỏ lỡ traffic có intent cao',
        'Chỉ giới hạn ở search ads',
        'Giảm khả năng hiển thị'
      ],
      benefitWhenComplete: [
        'Truy cập Shopping ads',
        'Thu hút traffic có intent cao',
        'Tăng khả năng hiển thị sản phẩm',
        'ROI tốt từ Shopping campaigns'
      ]
    },

    // Creative & Ad Content
    { 
      id: 'creative-1', 
      title: 'Không cam kết gian lận', 
      description: 'Ví dụ: "đảm bảo giảm 10kg sau 1 tuần"', 
      category: 'creative', 
      priority: 'high', 
      checked: false,
      explanation: 'Cam kết không thực tế vi phạm policy Google và có thể dẫn đến vấn đề pháp lý.',
      riskIfMissing: [
        'Account bị đình chỉ ngay lập tức',
        'Vấn đề pháp lý',
        'Mất uy tín thương hiệu',
        'Mất lòng tin khách hàng'
      ],
      benefitWhenComplete: [
        'Account hoạt động bình thường',
        'Bảo vệ pháp lý',
        'Uy tín thương hiệu thật sự',
        'Lòng tin khách hàng lâu dài'
      ]
    },
    { 
      id: 'creative-2', 
      title: 'Không dùng hình ảnh before-after', 
      description: 'Vi phạm policy về minh họa gây hiểu lầm', 
      category: 'creative', 
      priority: 'high', 
      checked: false,
      explanation: 'Hình ảnh trước-sau được Google coi là gây hiểu lầm, đặc biệt cho sản phẩm sức khỏe và làm đẹp.',
      riskIfMissing: [
        'Vi phạm policy ngay lập tức',
        'Account bị đình chỉ',
        'Mất quyền quảng cáo',
        'Khách hàng thất vọng về kết quả'
      ],
      benefitWhenComplete: [
        'Tuân thủ policy',
        'Bảo vệ quyền quảng cáo',
        'Kỳ vọng khách hàng thực tế',
        'Lòng tin thật sự'
      ]
    },

    // Analytics & Attribution
    { 
      id: 'analytics-1', 
      title: 'Bật Google Signals trong GA4', 
      description: 'Thu thập dữ liệu cross-device', 
      category: 'analytics', 
      priority: 'medium', 
      checked: false,
      explanation: 'Google Signals cung cấp insights về hành vi người dùng trên nhiều thiết bị, giúp hiểu customer journey hoàn chỉnh.',
      riskIfMissing: [
        'Hiểu không đầy đủ customer journey',
        'Attribution cross-device kém',
        'Bỏ lỡ cơ hội targeting'
      ],
      benefitWhenComplete: [
        'Insights cross-device hoàn chỉnh',
        'Attribution chính xác',
        'Targeting khán giả tốt hơn',
        'Tối ưu hóa campaigns hiệu quả'
      ]
    },
  ];

  const categories = [
    { id: 'store', name: 'Store Setup', icon: Store, color: 'text-blue-600' },
    { id: 'product', name: 'Products', icon: ShoppingBag, color: 'text-green-600' },
    { id: 'consent', name: 'Privacy', icon: Shield, color: 'text-purple-600' },
    { id: 'ads', name: 'Ads Setup', icon: Target, color: 'text-red-600' },
    { id: 'events', name: 'Tracking', icon: BarChart3, color: 'text-orange-600' },
    { id: 'legal', name: 'Legal & UX', icon: Scale, color: 'text-indigo-600' },
    { id: 'tracking', name: 'Tools', icon: Tag, color: 'text-pink-600' },
    { id: 'feed', name: 'Feed', icon: Rss, color: 'text-teal-600' },
    { id: 'creative', name: 'Content', icon: PenTool, color: 'text-yellow-600' },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp, color: 'text-cyan-600' },
  ];

  const handleCheckChange = (itemId: string, checked: boolean) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: checked
    }));
  };

  const getCompletionStats = (categoryId?: string) => {
    const items = categoryId 
      ? checklistData.filter(item => item.category === categoryId)
      : checklistData;
    
    const checkedCount = items.filter(item => checkedItems[item.id]).length;
    const totalCount = items.length;
    const percentage = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;
    
    return { checkedCount, totalCount, percentage };
  };

  const getPriorityStats = () => {
    const high = checklistData.filter(item => item.priority === 'high');
    const medium = checklistData.filter(item => item.priority === 'medium');
    const low = checklistData.filter(item => item.priority === 'low');
    
    return {
      high: {
        checked: high.filter(item => checkedItems[item.id]).length,
        total: high.length
      },
      medium: {
        checked: medium.filter(item => checkedItems[item.id]).length,
        total: medium.length
      },
      low: {
        checked: low.filter(item => checkedItems[item.id]).length,
        total: low.length
      }
    };
  };

  const overallStats = getCompletionStats();
  const priorityStats = getPriorityStats();

  const resetAll = () => {
    setCheckedItems({});
  };

  const checkAll = () => {
    const allChecked = checklistData.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setCheckedItems(allChecked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Simplified Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Google Ads Compliance Checker
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Đảm bảo Shopify store của bạn tuân thủ đầy đủ để chạy Google Ads hiệu quả và tránh bị từ chối quảng cáo
          </p>
          
          {/* Compact Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-6 max-w-4xl mx-auto">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <AlertTriangle className="h-5 w-5 text-red-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-red-800">Tránh bị từ chối ads</div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <DollarSign className="h-5 w-5 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-green-800">Tối ưu ROI & hiệu suất</div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Zap className="h-5 w-5 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-blue-800">Mở khóa tính năng nâng cao</div>
            </div>
          </div>
          
          {/* Compact Progress */}
          <Card className="max-w-lg mx-auto">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold">{overallStats.percentage}%</span>
                <span className="text-sm text-gray-600">{overallStats.checkedCount}/{overallStats.totalCount} hoàn thành</span>
              </div>
              <Progress value={overallStats.percentage} className="h-2 mb-3" />
              
              <div className="flex gap-2 justify-center">
                <Button onClick={checkAll} size="sm">Chọn tất cả</Button>
                <Button onClick={resetAll} variant="outline" size="sm">Reset</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Simplified Category Tabs */}
        <Tabs defaultValue="store" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 mb-6 h-auto">
            {categories.map((category) => {
              const stats = getCompletionStats(category.id);
              const Icon = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center gap-1 p-2 h-auto text-xs"
                >
                  <Icon className={`h-3 w-3 ${category.color}`} />
                  <span>{category.name}</span>
                  <Badge variant="outline" className="text-xs px-1">
                    {stats.checkedCount}/{stats.totalCount}
                  </Badge>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => {
            const categoryItems = checklistData.filter(item => item.category === category.id);
            const stats = getCompletionStats(category.id);
            const Icon = category.icon;

            return (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Icon className={`h-5 w-5 ${category.color}`} />
                        {category.name}
                      </CardTitle>
                      <Badge variant="outline">{stats.checkedCount}/{stats.totalCount}</Badge>
                    </div>
                    <Progress value={stats.percentage} className="h-1" />
                  </CardHeader>
                  
                  <CardContent>
                    {/* Compact List Layout */}
                    <div className="space-y-3">
                      {categoryItems.map((item) => {
                        const isChecked = checkedItems[item.id] || false;
                        
                        return (
                          <div 
                            key={item.id} 
                            className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                              isChecked 
                                ? 'bg-green-50 border-green-200' 
                                : item.priority === 'high' 
                                  ? 'bg-red-50 border-red-200' 
                                  : 'bg-white border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <Checkbox
                              id={item.id}
                              checked={isChecked}
                              onCheckedChange={(checked) => handleCheckChange(item.id, checked as boolean)}
                            />
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <label 
                                  htmlFor={item.id}
                                  className={`font-medium cursor-pointer text-sm ${isChecked ? 'line-through text-gray-500' : ''}`}
                                >
                                  {item.title}
                                </label>
                                <Badge 
                                  variant={item.priority === 'high' ? 'destructive' : item.priority === 'medium' ? 'secondary' : 'outline'}
                                  className="text-xs px-1 py-0"
                                >
                                  {item.priority === 'high' ? 'Cao' : item.priority === 'medium' ? 'TB' : 'Thấp'}
                                </Badge>
                              </div>
                              <p className="text-xs text-gray-600 line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {isChecked && (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              )}
                              
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                    <HelpCircle className="h-3 w-3" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2 text-lg">
                                      <HelpCircle className="h-5 w-5 text-blue-600" />
                                      {item.title}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div className="p-4 bg-blue-50 rounded-lg">
                                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                        <Info className="h-4 w-4" />
                                        Tại sao quan trọng:
                                      </h4>
                                      <p className="text-blue-800">
                                        {item.explanation || 'Yêu cầu này giúp đảm bảo campaigns Google Ads chạy mượt mà và tuân thủ chính sách.'}
                                      </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 gap-4">
                                      <div className="p-4 bg-red-50 rounded-lg">
                                        <h5 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                                          <AlertTriangle className="h-4 w-4" />
                                          Rủi ro nếu thiếu:
                                        </h5>
                                        <ul className="space-y-1">
                                          {(item.riskIfMissing || ['Có thể dẫn đến vi phạm policy hoặc giảm hiệu suất campaign']).map((risk, index) => (
                                            <li key={index} className="text-sm text-red-700 flex items-start gap-2">
                                              <span className="text-red-500 mt-1">•</span>
                                              <span>{risk}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      
                                      <div className="p-4 bg-green-50 rounded-lg">
                                        <h5 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                                          <CheckCircle className="h-4 w-4" />
                                          Lợi ích khi hoàn thành:
                                        </h5>
                                        <ul className="space-y-1">
                                          {(item.benefitWhenComplete || ['Cải thiện hiệu suất campaign và đảm bảo tuân thủ']).map((benefit, index) => (
                                            <li key={index} className="text-sm text-green-700 flex items-start gap-2">
                                              <span className="text-green-500 mt-1">•</span>
                                              <span>{benefit}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
