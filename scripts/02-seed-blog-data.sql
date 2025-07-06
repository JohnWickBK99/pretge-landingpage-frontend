-- Insert sample blog posts
INSERT INTO blog_posts (slug, title, excerpt, content, author, published_at, read_time, category, featured) VALUES
(
  'getting-started-with-nextjs',
  'Getting Started with Next.js 15',
  'Learn how to build modern web applications with the latest version of Next.js and its powerful features.',
  '<h2>Introduction to Next.js 15</h2>
  <p>Next.js 15 brings exciting new features and improvements that make building React applications even more powerful and efficient. In this comprehensive guide, we''ll explore the key features and show you how to get started.</p>
  
  <h3>Key Features</h3>
  <ul>
    <li>Improved App Router with better performance</li>
    <li>Enhanced Server Components</li>
    <li>Better TypeScript support</li>
    <li>Optimized bundling and compilation</li>
  </ul>
  
  <h3>Getting Started</h3>
  <p>To create a new Next.js 15 project, run the following command:</p>
  <pre><code>npx create-next-app@latest my-app</code></pre>
  
  <p>This will set up a new Next.js project with all the latest features and best practices configured out of the box.</p>
  
  <h3>Conclusion</h3>
  <p>Next.js 15 represents a significant step forward in React development, offering improved performance, better developer experience, and more powerful features for building modern web applications.</p>',
  'John Doe',
  '2024-01-15 10:00:00+00',
  '5 min read',
  'Development',
  true
),
(
  'modern-web-design-trends',
  'Modern Web Design Trends for 2024',
  'Explore the latest design trends that are shaping the web development landscape this year.',
  '<h2>The Evolution of Web Design</h2>
  <p>Web design continues to evolve rapidly, with new trends emerging that focus on user experience, accessibility, and visual appeal. Let''s explore the most significant trends shaping web design in 2024.</p>
  
  <h3>Minimalist Design</h3>
  <p>Clean, minimalist designs continue to dominate, focusing on essential elements and removing unnecessary clutter. This approach improves user focus and creates more elegant interfaces.</p>
  
  <h3>Dark Mode</h3>
  <p>Dark mode has become a standard feature, offering users a comfortable viewing experience in low-light conditions while also being easier on the eyes during extended use.</p>
  
  <h3>Micro-interactions</h3>
  <p>Subtle animations and micro-interactions enhance user engagement and provide feedback for user actions, making interfaces feel more responsive and alive.</p>
  
  <h3>Accessibility First</h3>
  <p>Modern web design prioritizes accessibility, ensuring that websites are usable by everyone, regardless of their abilities or the devices they use.</p>',
  'Jane Smith',
  '2024-01-10 14:30:00+00',
  '8 min read',
  'Design',
  false
),
(
  'building-scalable-applications',
  'Building Scalable Applications',
  'Best practices and architectural patterns for creating applications that can grow with your business.',
  '<h2>Scalability Fundamentals</h2>
  <p>Building scalable applications requires careful planning, proper architecture, and the right technology choices. This guide covers essential principles and practices for creating systems that can handle growth.</p>
  
  <h3>Architecture Patterns</h3>
  <p>Learn about microservices, serverless architecture, and other patterns that enable scalability:</p>
  <ul>
    <li>Microservices architecture for better modularity</li>
    <li>Serverless functions for automatic scaling</li>
    <li>Event-driven architecture for loose coupling</li>
    <li>CQRS pattern for read/write optimization</li>
  </ul>
  
  <h3>Database Design</h3>
  <p>Proper database design and optimization strategies are crucial for application scalability:</p>
  <ul>
    <li>Database sharding and partitioning</li>
    <li>Read replicas for improved performance</li>
    <li>Caching strategies with Redis or Memcached</li>
    <li>NoSQL databases for specific use cases</li>
  </ul>
  
  <h3>Performance Monitoring</h3>
  <p>Implement monitoring and alerting systems to track application performance and identify bottlenecks before they become critical issues.</p>
  
  <h3>Load Testing</h3>
  <p>Regular load testing helps ensure your application can handle expected traffic and identifies performance bottlenecks early in the development process.</p>',
  'Mike Johnson',
  '2024-01-05 09:15:00+00',
  '12 min read',
  'Architecture',
  false
),
(
  'tu-dong-hoa-quy-trinh-kinh-doanh',
  'Tự Động Hóa Quy Trình Kinh Doanh Hiệu Quả',
  'Khám phá cách tự động hóa các quy trình kinh doanh để tăng hiệu suất và giảm chi phí vận hành.',
  '<h2>Tại Sao Cần Tự Động Hóa?</h2>
  <p>Trong thời đại số hóa hiện tại, việc tự động hóa các quy trình kinh doanh không còn là lựa chọn mà đã trở thành điều cần thiết để doanh nghiệp có thể cạnh tranh và phát triển bền vững.</p>
  
  <h3>Lợi Ích Của Tự Động Hóa</h3>
  <ul>
    <li>Giảm thiểu sai sót do con người</li>
    <li>Tăng tốc độ xử lý công việc</li>
    <li>Tiết kiệm chi phí nhân sự</li>
    <li>Cải thiện trải nghiệm khách hàng</li>
    <li>Tăng khả năng mở rộng kinh doanh</li>
  </ul>
  
  <h3>Các Quy Trình Có Thể Tự Động Hóa</h3>
  <p>Hầu hết các quy trình lặp đi lặp lại trong doanh nghiệp đều có thể được tự động hóa:</p>
  <ul>
    <li>Quy trình bán hàng và chăm sóc khách hàng</li>
    <li>Quản lý tài chính và kế toán</li>
    <li>Quản lý nhân sự và tuyển dụng</li>
    <li>Marketing và truyền thông</li>
    <li>Quản lý kho và logistics</li>
  </ul>
  
  <h3>Bước Đầu Triển Khai</h3>
  <p>Để bắt đầu hành trình tự động hóa, doanh nghiệp cần:</p>
  <ol>
    <li>Phân tích và đánh giá các quy trình hiện tại</li>
    <li>Xác định ưu tiên tự động hóa</li>
    <li>Lựa chọn công nghệ phù hợp</li>
    <li>Đào tạo nhân viên</li>
    <li>Triển khai từng bước và theo dõi kết quả</li>
  </ol>',
  'Nguyễn Văn A',
  '2024-01-20 16:45:00+00',
  '10 min read',
  'Tự động hóa',
  true
),
(
  'chatbot-ai-cho-doanh-nghiep',
  'Chatbot AI - Giải Pháp Chăm Sóc Khách Hàng 24/7',
  'Tìm hiểu cách triển khai chatbot AI để cải thiện dịch vụ khách hàng và tăng hiệu quả kinh doanh.',
  '<h2>Chatbot AI Là Gì?</h2>
  <p>Chatbot AI là một ứng dụng trí tuệ nhân tạo có khả năng tương tác với khách hàng thông qua văn bản hoặc giọng nói, mô phỏng cuộc trò chuyện tự nhiên như với con người.</p>
  
  <h3>Ưu Điểm Của Chatbot AI</h3>
  <ul>
    <li>Hoạt động 24/7 không nghỉ ngơi</li>
    <li>Xử lý nhiều cuộc hội thoại cùng lúc</li>
    <li>Phản hồi nhanh chóng và nhất quán</li>
    <li>Giảm tải công việc cho nhân viên</li>
    <li>Tiết kiệm chi phí vận hành</li>
    <li>Thu thập và phân tích dữ liệu khách hàng</li>
  </ul>
  
  <h3>Ứng Dụng Trong Doanh Nghiệp</h3>
  <p>Chatbot AI có thể được áp dụng trong nhiều lĩnh vực:</p>
  <ul>
    <li><strong>Chăm sóc khách hàng:</strong> Trả lời câu hỏi thường gặp, hỗ trợ kỹ thuật</li>
    <li><strong>Bán hàng:</strong> Tư vấn sản phẩm, xử lý đơn hàng</li>
    <li><strong>Marketing:</strong> Thu thập thông tin khách hàng tiềm năng</li>
    <li><strong>Nhân sự:</strong> Hỗ trợ tuyển dụng, trả lời câu hỏi nội bộ</li>
  </ul>
  
  <h3>Triển Khai Chatbot AI</h3>
  <p>Quy trình triển khai chatbot AI bao gồm:</p>
  <ol>
    <li>Xác định mục tiêu và phạm vi hoạt động</li>
    <li>Thiết kế kịch bản hội thoại</li>
    <li>Chọn nền tảng và công nghệ phù hợp</li>
    <li>Huấn luyện và tối ưu hóa AI</li>
    <li>Tích hợp với hệ thống hiện có</li>
    <li>Kiểm thử và triển khai</li>
    <li>Theo dõi và cải thiện liên tục</li>
  </ol>',
  'Trần Thị B',
  '2024-01-18 11:20:00+00',
  '7 min read',
  'AI & Chatbot',
  false
);
