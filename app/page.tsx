import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  ArrowRight,
  Settings,
  Users,
  BarChart3,
  Clock,
  Zap,
  Target,
  Lightbulb,
  Cog,
  TrendingUp,
  DollarSign,
  Wrench,
} from "lucide-react"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "n8nviet - Giải Pháp Tự Động Hóa",
  description:
    "Giải pháp tự động hóa cho cá nhân và doanh nghiệp. Tối ưu hóa quy trình làm việc, tiết kiệm thời gian, nâng cao hiệu suất cho freelancer, chủ shop online, marketer.",
  keywords: [
    "tự động hóa",
    "business automation",
    "workflow",
    "freelancer",
    "shop online",
    "marketer",
    "n8nviet",
  ],
  openGraph: {
    title: "n8nviet - Giải Pháp Tự Động Hóa",
    description:
      "Giải pháp tự động hóa cho cá nhân và doanh nghiệp. Tối ưu hóa quy trình làm việc, tiết kiệm thời gian, nâng cao hiệu suất cho freelancer, chủ shop online, marketer.",
    type: "website",
    images: [
      {
        url: "/thumnails.png",
        width: 1200,
        height: 630,
        alt: "n8nViet Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "n8nviet - Giải Pháp Tự Động Hóa",
    description:
      "Giải pháp tự động hóa cho cá nhân và doanh nghiệp. Tối ưu hóa quy trình làm việc, tiết kiệm thời gian, nâng cao hiệu suất cho freelancer, chủ shop online, marketer.",
    images: [
      {
        url: "/thumnails.png",
        alt: "n8nViet Thumbnail",
      },
    ],
  },
};

export default async function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

  return (
    <>
      <Script id="business-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "n8nviet",
          url: baseUrl,
          logo: `${baseUrl}/placeholder-logo.png`,
          description:
            "Giải pháp tự động hóa cho cá nhân và doanh nghiệp. Tối ưu hóa quy trình làm việc, tiết kiệm thời gian, nâng cao hiệu suất.",
          sameAs: [
            "https://facebook.com/n8nviet",
            "https://twitter.com/n8nviet",
            "https://linkedin.com/company/n8nviet",
          ],
        })}
      </Script>

      <div className="flex flex-col min-h-screen">
        {/* Hero Section with Network Background */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 lg:py-32 overflow-hidden">
          {/* Network Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-200"></div>
            <div className="absolute bottom-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-700"></div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="1" fill="#3b82f6" opacity="0.3" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#network)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Giải Pháp Tự Động Hóa
                </span>
                <br />
                n8nviet
              </h1>
              <p className="text-4xl md:text-6xl mb-6 text-blue-200 font-bold">
                Uy tín hàng đầu Việt Nam, bảo hành trọn đời
              </p>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Giải pháp tự động hóa không chỉ phục vụ doanh nghiệp vừa và nhỏ, mà còn được thiết kế phù hợp cho cá
                nhân, freelancer, chủ shop online, marketer. Giảm thiểu công việc thủ công, tiết kiệm thời gian, nâng
                cao hiệu suất.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Đặt lịch tư vấn miễn phí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Target className="h-10 w-10 text-blue-600" />
                Đối Tượng Sử Dụng
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Giải pháp tự động hóa phù hợp cho mọi đối tượng từ cá nhân đến doanh nghiệp
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Doanh nghiệp vừa và nhỏ</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">Tối ưu hoạt động và tiết kiệm chi phí vận hành</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Settings className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Freelancer/Marketer</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Tự động hóa các tác vụ lặp lại, tập trung vào công việc sáng tạo
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Chủ shop online</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">Quản lý đơn hàng, chăm sóc khách hàng hiệu quả</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Người làm nội dung</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">Tự động hóa quy trình tạo và phân phối nội dung</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Cog className="h-10 w-10 text-blue-600" />
                Tính Năng Nổi Bật
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Các tính năng mạnh mẽ giúp tự động hóa mọi quy trình làm việc của bạn
              </p>
            </div>

            <div className="space-y-16 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                    Tự động hóa quy trình bán hàng và công việc hàng ngày
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Phù hợp cho cả cửa hàng nhỏ và cá nhân bán hàng online</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Tự động hóa xử lý đơn, gửi email xác nhận, xuất file báo cáo</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-32 w-32 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center lg:order-1">
                  <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <Users className="h-32 w-32 text-green-600" />
                  </div>
                </div>
                <div className="lg:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Hỗ trợ khách hàng tự động 24/7</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Chatbot AI giúp trả lời câu hỏi từ khách hàng ngay cả khi bạn không online
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Áp dụng được cho fanpage, website, các kênh thương mại điện tử</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                    Tự động hóa marketing cá nhân hoặc doanh nghiệp
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Lên lịch gửi email, tin nhắn, đăng bài mạng xã hội</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Tạo luồng nurturing tự động (lead → khách hàng)</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                    <Zap className="h-32 w-32 text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center lg:order-1">
                  <div className="w-80 h-80 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                    <Settings className="h-32 w-32 text-orange-600" />
                  </div>
                </div>
                <div className="lg:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                    Quản lý dữ liệu và đồng bộ giữa các nền tảng
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Tự động lưu trữ thông tin khách hàng, xuất hóa đơn, gửi dữ liệu qua Google Sheets, Notion,
                        CRM...
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">
                        Kết nối các công cụ như Facebook Ads, Zalo OA, Shopify, Google Forms...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <TrendingUp className="h-10 w-10 text-blue-600" />
                Lợi Ích Mang Lại
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Những lợi ích thiết thực mà giải pháp tự động hóa mang lại cho bạn
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Tiết Kiệm Thời Gian</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Giảm đến 80% thao tác thủ công, tập trung vào công việc quan trọng hơn
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Tăng Hiệu Suất</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Làm được nhiều việc hơn trong cùng khoảng thời gian
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Ra Quyết Định Thông Minh</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Dữ liệu đồng bộ, báo cáo trực quan giúp ra quyết định chính xác
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Tiết Kiệm Chi Phí</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Không cần thuê thêm người, hệ thống tự vận hành
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-teal-500">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl">Dễ Triển Khai</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Giao diện thân thiện, hỗ trợ setup tận nơi hoặc từ xa
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Customer Feedback Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Khách Hàng Nói Gì Về Chúng Tôi</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Những phản hồi tích cực từ các cá nhân và doanh nghiệp đã tin tưởng sử dụng dịch vụ của n8nviet.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Testimonial 1 */}
              <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "Là một freelancer, tôi tiết kiệm được 5-6 giờ mỗi ngày nhờ tự động hóa các tác vụ lặp lại. Giờ tôi
                    có thể tập trung vào công việc sáng tạo và nhận thêm nhiều dự án hơn."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      M
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Chị Mai Linh</div>
                      <div className="text-sm text-gray-600">Freelancer Marketing</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "Shop online của tôi từ 50 đơn/ngày giờ xử lý được 200 đơn/ngày mà không cần thuê thêm nhân viên.
                    Chatbot trả lời khách 24/7, tôi yên tâm nghỉ ngơi."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      T
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Anh Tuấn Anh</div>
                      <div className="text-sm text-gray-600">Chủ shop thời trang online</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "Công ty chúng tôi giảm được 70% thời gian xử lý báo cáo và quản lý khách hàng. Đội ngũ n8nviet hỗ
                    trợ setup rất tận tình và chuyên nghiệp."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      H
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Chị Hương Giang</div>
                      <div className="text-sm text-gray-600">Giám đốc - Công ty TNHH XYZ</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Khách hàng tin tưởng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">80%</div>
                <div className="text-gray-600 font-medium">Tiết kiệm thời gian</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Hỗ trợ kỹ thuật</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Bảo hành trọn đời</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Để Lại Thông Tin - Chúng Tôi Sẽ Liên Hệ Ngay
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Nhận tư vấn miễn phí về giải pháp tự động hóa phù hợp với nhu cầu của bạn trong vòng 24h
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Contact Form */}
                <Card className="bg-white shadow-xl border-0 overflow-hidden">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                            Họ và tên *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Nguyễn Văn A"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Số điện thoại *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="0123 456 789"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="example@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                          Loại hình kinh doanh *
                        </label>
                        <select
                          id="businessType"
                          name="businessType"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Chọn loại hình kinh doanh</option>
                          <option value="freelancer">Freelancer/Cá nhân</option>
                          <option value="shop-online">Shop online/E-commerce</option>
                          <option value="marketing">Marketing/Agency</option>
                          <option value="small-business">Doanh nghiệp nhỏ (1-10 người)</option>
                          <option value="medium-business">Doanh nghiệp vừa (11-50 người)</option>
                          <option value="other">Khác</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="needs" className="block text-sm font-medium text-gray-700 mb-2">
                          Nhu cầu tự động hóa
                        </label>
                        <textarea
                          id="needs"
                          name="needs"
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="Mô tả ngắn gọn về quy trình bạn muốn tự động hóa (VD: tự động xử lý đơn hàng, chatbot chăm sóc khách hàng, tự động gửi email marketing...)"
                        ></textarea>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="agreement"
                          name="agreement"
                          required
                          className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="agreement" className="text-sm text-gray-600">
                          Tôi đồng ý để n8nviet liên hệ tư vấn và nhận thông tin về các giải pháp tự động hóa phù hợp *
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        Gửi thông tin - Nhận tư vấn miễn phí
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Benefits of Contact */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Tại Sao Nên Để Lại Thông Tin?</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Tư Vấn Miễn Phí 100%</h4>
                          <p className="text-gray-600">
                            Chuyên gia sẽ phân tích nhu cầu và đưa ra giải pháp tối ưu nhất cho bạn
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Target className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Giải Pháp Cá Nhân Hóa</h4>
                          <p className="text-gray-600">
                            Không áp dụng giải pháp chung, mà thiết kế riêng cho từng trường hợp cụ thể
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Zap className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Phản Hồi Nhanh Chóng</h4>
                          <p className="text-gray-600">
                            Liên hệ lại trong vòng 24h, hỗ trợ setup và triển khai ngay khi bạn đồng ý
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Cam Kết Chất Lượng</h4>
                          <p className="text-gray-600">
                            Bảo hành trọn đời, hỗ trợ kỹ thuật 24/7, đảm bảo hệ thống hoạt động ổn định
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-3">Được tin tưởng bởi</div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">500+</div>
                          <div className="text-sm text-gray-600">Khách hàng</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">98%</div>
                          <div className="text-sm text-gray-600">Hài lòng</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn Sàng Tự Động Hóa Công Việc Của Bạn?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí về giải pháp tự động hóa phù hợp với nhu cầu
              của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Đặt lịch tư vấn miễn phí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Gọi ngay: 0123.456.789
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
