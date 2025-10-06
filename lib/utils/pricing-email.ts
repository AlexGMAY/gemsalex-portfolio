import { PricingFormData } from "@/types/pricing";

export function createPricingUserEmailTemplate(
  formData: PricingFormData
): string {
  const projectValue =
    formData.totalAmount > 5000
      ? "premium"
      : formData.totalAmount > 2000
      ? "standard"
      : "starter";

  const valueColor = {
    premium: "#8B5CF6",
    standard: "#3B82F6",
    starter: "#10B981",
  }[projectValue];

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Quote - ${formData.serviceTitle}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1F2937;
            background: linear-gradient(135deg, #84cc16 0%, #eab308 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .email-container {
            max-width: 650px;
            margin: 0 auto;
            background: #FFFFFF;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .header {
            background: linear-gradient(135deg, #84cc16 0%, #eab308 100%);
            padding: 60px 40px;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 25px 25px;
            animation: float 20s linear infinite;
        }
        
        @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(-25px, -25px) rotate(360deg); }
        }
        
        .header-content {
            position: relative;
            z-index: 2;
        }
        
        .icon-wrapper {
            width: 90px;
            height: 90px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .icon-wrapper svg {
            width: 45px;
            height: 45px;
            fill: white;
        }
        
        .value-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.2);
            padding: 12px 24px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.9rem;
            margin-bottom: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .header h1 {
            font-size: 2.75rem;
            font-weight: 700;
            margin-bottom: 15px;
            background: linear-gradient(135deg, #FFFFFF 0%, #F3F4F6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
            font-weight: 300;
        }
        
        .content {
            padding: 50px 40px;
        }
        
        .greeting {
            font-size: 1.6rem;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 30px;
        }
        
        .greeting span {
            background: linear-gradient(135deg, #84cc16 0%, #eab308 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
        }
        
        .message {
            font-size: 1.1rem;
            color: #6B7280;
            margin-bottom: 40px;
            line-height: 1.8;
        }
        
        .quote-card {
            background: #F8FAFC;
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 40px;
            border: 1px solid #E5E7EB;
            position: relative;
            overflow: hidden;
        }
        
        .quote-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(135deg, #84cc16 0%, #eab308 100%);
            border-radius: 20px 20px 0 0;
        }
        
        .quote-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 30px;
            flex-wrap: wrap;
            gap: 15px;
        }
        
        .service-info h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1F2937;
            margin-bottom: 8px;
        }
        
        .service-info p {
            color: #6B7280;
            font-size: 1rem;
        }
        
        .total-amount {
            text-align: right;
        }
        
        .total-label {
            font-size: 0.9rem;
            color: #6B7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        
        .total-value {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #84cc16 0%, #eab308 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1;
        }
        
        .pricing-breakdown {
            border-top: 2px solid #E5E7EB;
            padding-top: 25px;
        }
        
        .breakdown-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px solid #F3F4F6;
        }
        
        .breakdown-item:last-child {
            border-bottom: none;
        }
        
        .item-label {
            color: #6B7280;
            font-weight: 500;
        }
        
        .item-value {
            color: #1F2937;
            font-weight: 600;
        }
        
        .features-section {
            margin-top: 25px;
        }
        
        .features-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .features-list {
            list-style: none;
            background: white;
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #E5E7EB;
        }
        
        .features-list li {
            padding: 10px 0;
            border-bottom: 1px solid #F3F4F6;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .features-list li:last-child {
            border-bottom: none;
        }
        
        .feature-name {
            color: #1F2937;
            font-weight: 500;
        }
        
        .feature-price {
            color: #84cc16;
            font-weight: 600;
        }
        
        .next-steps {
            background: linear-gradient(135deg, #84cc1615 0%, #eab30815 100%);
            border: 2px solid #84cc1630;
            border-radius: 20px;
            padding: 35px;
            margin-bottom: 40px;
            position: relative;
            overflow: hidden;
        }
        
        .next-steps::before {
            content: '🚀';
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 3rem;
            opacity: 0.1;
        }
        
        .next-steps h3 {
            color: #1F2937;
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .timeline {
            list-style: none;
            position: relative;
        }
        
        .timeline::before {
            content: '';
            position: absolute;
            left: 15px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(135deg, #84cc16 0%, #eab308 100%);
            border-radius: 2px;
        }
        
        .timeline li {
            position: relative;
            padding: 20px 0 20px 50px;
            margin-bottom: 10px;
        }
        
        .timeline li::before {
            content: '';
            position: absolute;
            left: 8px;
            top: 25px;
            width: 16px;
            height: 16px;
            background: linear-gradient(135deg, #84cc16 0%, #eab308 100%);
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 2px #84cc16;
        }
        
        .timeline-content h4 {
            color: #1F2937;
            font-weight: 600;
            margin-bottom: 5px;
            font-size: 1.1rem;
        }
        
        .timeline-content p {
            color: #6B7280;
            font-size: 0.95rem;
            line-height: 1.6;
        }
        
        .response-time {
            background: linear-gradient(135deg, #84cc16 0%, #eab308 100%);
            color: white;
            padding: 25px;
            border-radius: 16px;
            text-align: center;
            margin-bottom: 40px;
        }
        
        .response-time h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 8px;
            opacity: 0.9;
        }
        
        .response-time p {
            font-size: 1.8rem;
            font-weight: 800;
        }
        
        .signature {
            text-align: center;
            padding-top: 40px;
            border-top: 1px solid #E5E7EB;
        }
        
        .signature p {
            font-size: 1.1rem;
            color: #6B7280;
            margin-bottom: 8px;
        }
        
        .signature .name {
            font-size: 1.4rem;
            font-weight: 800;
            color: #1F2937;
            background: linear-gradient(135deg, #84cc16 0%, #eab308 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 5px;
        }
        
        .footer {
            background: #1F2937;
            color: #9CA3AF;
            text-align: center;
            padding: 40px;
            font-size: 0.9rem;
        }
        
        .footer a {
            color: #84cc16;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer a:hover {
            color: #eab308;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 25px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        
        @media (max-width: 600px) {
            .header {
                padding: 40px 25px;
            }
            
            .content {
                padding: 40px 25px;
            }
            
            .quote-header {
                flex-direction: column;
                text-align: center;
            }
            
            .total-amount {
                text-align: center;
            }
            
            .header h1 {
                font-size: 2.25rem;
            }
            
            .total-value {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="header-content">
                <div class="icon-wrapper">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7H9V5.5L3 7V9L9 10.5V12L3 13.5V15.5L9 14V16L3 17.5V19.5L9 18V22H15V18L21 19.5V17.5L15 16V14L21 15.5V13.5L15 12V10.5L21 9Z"/>
                    </svg>
                </div>
                <div class="value-badge">
                    ${
                      projectValue === "premium"
                        ? "💎"
                        : projectValue === "standard"
                        ? "⭐"
                        : "🚀"
                    } ${
    projectValue.charAt(0).toUpperCase() + projectValue.slice(1)
  } Project
                </div>
                <h1>Project Quote Confirmed!</h1>
                <p>Your ${formData.serviceTitle} project is being prepared</p>
            </div>
        </div>
        
        <div class="content">
            <div class="greeting">
                Hello <span>${formData.name}</span>,
            </div>
            
            <div class="message">
                Thank you for your detailed project inquiry! I'm thrilled about your ${
                  formData.serviceTitle
                } project and have carefully reviewed your customization selections. Here's your official project quote:
            </div>
            
            <div class="quote-card">
                <div class="quote-header">
                    <div class="service-info">
                        <h3>${formData.serviceTitle}</h3>
                        <p>Customized project solution</p>
                    </div>
                    <div class="total-amount">
                        <div class="total-label">Total Investment</div>
                        <div class="total-value">
                            ${
                              formData.currency === "USD" ? "$" : ""
                            }${formData.totalAmount.toLocaleString()}${
    formData.currency === "TND" ? " TND" : ""
  }
                        </div>
                    </div>
                </div>
                
                <div class="pricing-breakdown">
                    <div class="breakdown-item">
                        <span class="item-label">Base Service</span>
                        <span class="item-value">
                            ${
                              formData.currency === "USD" ? "$" : ""
                            }${formData.basePrice.toLocaleString()}${
    formData.currency === "TND" ? " TND" : ""
  }
                        </span>
                    </div>
                    
                    ${
                      formData.selectedFeatures.length > 0
                        ? `
                    <div class="features-section">
                        <div class="features-title">
                            <span>✨</span> Premium Add-ons (${
                              formData.selectedFeatures.length
                            })
                        </div>
                        <ul class="features-list">
                            ${formData.selectedFeatures
                              .map(
                                (feature) => `
                            <li>
                                <span class="feature-name">${
                                  feature.name
                                }</span>
                                <span class="feature-price">
                                    +${
                                      formData.currency === "USD" ? "$" : ""
                                    }${feature.price.toLocaleString()}${
                                  formData.currency === "TND" ? " TND" : ""
                                }
                                </span>
                            </li>
                            `
                              )
                              .join("")}
                        </ul>
                    </div>
                    `
                        : ""
                    }
                </div>
            </div>
            
            <div class="next-steps">
                <h3>🎯 Your Project Journey</h3>
                <ul class="timeline">
                    <li>
                        <div class="timeline-content">
                            <h4>Project Review</h4>
                            <p>I'll personally analyze your requirements and create a detailed project strategy</p>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-content">
                            <h4>Detailed Proposal</h4>
                            <p>You'll receive a comprehensive proposal with timelines, milestones, and deliverables</p>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-content">
                            <h4>Kickoff Call</h4>
                            <p>We'll schedule a video call to discuss the project in depth and answer all your questions</p>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-content">
                            <h4>Development Phase</h4>
                            <p>Once approved, development begins with regular updates and progress reports</p>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="response-time">
                <h3>Expected Response Time</h3>
                <p>Within 24 Hours</p>
            </div>
            
            <div class="signature">
                <p>Ready to bring your vision to life,</p>
                <p class="name">[Your Name]</p>
                <p>Senior Full-Stack Developer</p>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-links">
                <a href="https://gemsalex.com" target="blank">Check out My Website</a>
                <a href="https://www.linkedin.com/in/alexandre-merveille-may/" target="blank">LinkedIn Profile</a>
                <a href="https://github.com/AlexGMAY/" target="blank">GitHub Profile</a>
                <a href="[Your Calendly URL]">Schedule Call</a>
            </div>
            <p>This is an automated response. Please do not reply to this email.</p>
            <p>© ${new Date().getFullYear()} Gems Alexander. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `;
}


export function createPricingAdminEmailTemplate(
  formData: PricingFormData,
  ip: string
): string {
  const projectValue =
    formData.totalAmount > 5000
      ? "premium"
      : formData.totalAmount > 2000
      ? "standard"
      : "starter";

  const valueColor = {
    premium: "#8B5CF6",
    standard: "#3B82F6",
    starter: "#10B981",
  }[projectValue];

  const priorityLevel =
    formData.totalAmount > 5000
      ? "HIGH PRIORITY"
      : formData.totalAmount > 2000
      ? "MEDIUM PRIORITY"
      : "STANDARD";

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>💰 New Project - ${formData.serviceTitle}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1F2937;
            background: #F3F4F6;
            min-height: 100vh;
            padding: 20px;
        }
        
        .email-container {
            max-width: 750px;
            margin: 0 auto;
            background: #FFFFFF;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .header {
            background: linear-gradient(135deg, #DC2626 0%, #EA580C 100%);
            padding: 50px 40px;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M 12 0 L 0 0 0 12" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
        }
        
        .header-content {
            position: relative;
            z-index: 2;
            text-align: center;
        }
        
        .priority-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: rgba(255, 255, 255, 0.2);
            padding: 15px 25px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 1rem;
            margin-bottom: 20px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .header h1 {
            font-size: 2.75rem;
            font-weight: 800;
            margin-bottom: 15px;
        }
        
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
            font-weight: 300;
        }
        
        .content {
            padding: 50px 40px;
        }
        
        .value-banner {
            background: linear-gradient(135deg, ${valueColor}15 0%, ${valueColor}05 100%);
            border: 3px solid ${valueColor}30;
            border-radius: 20px;
            padding: 35px;
            margin-bottom: 40px;
            position: relative;
            overflow: hidden;
        }
        
        .value-banner::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 8px;
            background: ${valueColor};
        }
        
        .banner-content {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 30px;
            align-items: center;
        }
        
        .banner-text h3 {
            color: ${valueColor};
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 8px;
        }
        
        .banner-text p {
            color: #6B7280;
            font-size: 1.05rem;
            line-height: 1.6;
        }
        
        .amount-display {
            text-align: center;
            background: white;
            padding: 25px;
            border-radius: 16px;
            border: 2px solid ${valueColor}30;
            min-width: 200px;
        }
        
        .amount-label {
            color: #6B7280;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }
        
        .amount-value {
            color: ${valueColor};
            font-size: 2.25rem;
            font-weight: 800;
            line-height: 1;
        }
        
        .client-dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }
        
        .dashboard-card {
            background: #F8FAFC;
            border-radius: 16px;
            padding: 35px;
            border: 1px solid #E5E7EB;
            position: relative;
        }
        
        .dashboard-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, #DC2626 0%, #EA580C 100%);
            border-radius: 16px 16px 0 0;
        }
        
        .card-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 25px;
        }
        
        .card-header h3 {
            font-size: 1.3rem;
            font-weight: 700;
            color: #1F2937;
        }
        
        .info-grid {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .info-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #E5E7EB;
        }
        
        .info-row:last-child {
            border-bottom: none;
        }
        
        .info-label {
            color: #6B7280;
            font-weight: 500;
            font-size: 0.95rem;
        }
        
        .info-value {
            color: #1F2937;
            font-weight: 600;
            text-align: right;
        }
        
        .highlight {
            color: ${valueColor} !important;
            font-weight: 700 !important;
        }
        
        .features-section {
            background: #FEF3C7;
            border: 2px solid #F59E0B;
            border-radius: 16px;
            padding: 35px;
            margin-bottom: 35px;
        }
        
        .features-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
        }
        
        .features-header h3 {
            color: #92400E;
            font-size: 1.4rem;
            font-weight: 700;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
        }
        
        .feature-item {
            background: white;
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #F59E0B30;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .feature-name {
            color: #92400E;
            font-weight: 600;
        }
        
        .feature-price {
            color: #D97706;
            font-weight: 700;
            background: #FEF3C7;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
        }
        
        .project-requirements {
            background: white;
            border: 2px solid #E5E7EB;
            border-radius: 16px;
            padding: 35px;
            margin-bottom: 40px;
            position: relative;
        }
        
        .requirements-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 25px;
        }
        
        .requirements-header h3 {
            color: #1F2937;
            font-size: 1.4rem;
            font-weight: 700;
        }
        
        .requirements-content {
            background: #F8FAFC;
            border-radius: 12px;
            padding: 25px;
            font-size: 1.05rem;
            line-height: 1.7;
            color: #4B5563;
            white-space: pre-wrap;
            border: 1px solid #E5E7EB;
        }
        
        .action-panel {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 40px;
        }
        
        .action-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 18px 25px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            text-align: center;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #DC2626 0%, #EA580C 100%);
            color: white;
        }
        
        .btn-secondary {
            background: #374151;
            color: white;
        }
        
        .btn-success {
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            color: white;
        }
        
        .action-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.2);
        }
        
        .footer {
            background: #1F2937;
            color: #9CA3AF;
            padding: 40px;
            text-align: center;
            font-size: 0.9rem;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 25px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        
        .footer a {
            color: #60A5FA;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer a:hover {
            color: #84cc16;
        }
        
        @media (max-width: 600px) {
            .header {
                padding: 40px 25px;
            }
            
            .content {
                padding: 40px 25px;
            }
            
            .banner-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            .client-dashboard {
                grid-template-columns: 1fr;
            }
            
            .features-grid {
                grid-template-columns: 1fr;
            }
            
            .action-panel {
                grid-template-columns: 1fr;
            }
            
            .header h1 {
                font-size: 2.25rem;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="header-content">
                <div class="priority-badge">
                    ${projectValue === "premium" ? "💎" : "⭐"} ${priorityLevel}
                </div>
                <h1>💰 New Project Inquiry</h1>
                <p>${formData.serviceTitle} • ${
    formData.currency
  } ${formData.totalAmount.toLocaleString()}</p>
            </div>
        </div>
        
        <div class="content">
            <div class="value-banner">
                <div class="banner-content">
                    <div class="banner-text">
                        <h3>${
                          projectValue.charAt(0).toUpperCase() +
                          projectValue.slice(1)
                        } Value Project</h3>
                        <p>Client submitted a detailed ${
                          formData.serviceTitle
                        } inquiry with ${
    formData.selectedFeatures.length
  } premium add-ons</p>
                    </div>
                    <div class="amount-display">
                        <div class="amount-label">Total Value</div>
                        <div class="amount-value">
                            ${
                              formData.currency === "USD" ? "$" : ""
                            }${formData.totalAmount.toLocaleString()}${
    formData.currency === "TND" ? " TND" : ""
  }
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="client-dashboard">
                <div class="dashboard-card">
                    <div class="card-header">
                        <span>👤</span>
                        <h3>Client Information</h3>
                    </div>
                    <div class="info-grid">
                        <div class="info-row">
                            <span class="info-label">Full Name</span>
                            <span class="info-value highlight">${
                              formData.name
                            }</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Email Address</span>
                            <span class="info-value">${formData.email}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Service Type</span>
                            <span class="info-value">${
                              formData.serviceTitle
                            }</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Service ID</span>
                            <span class="info-value">${
                              formData.serviceId
                            }</span>
                        </div>
                    </div>
                </div>
                
                <div class="dashboard-card">
                    <div class="card-header">
                        <span>📊</span>
                        <h3>Project Details</h3>
                    </div>
                    <div class="info-grid">
                        <div class="info-row">
                            <span class="info-label">Currency</span>
                            <span class="info-value">${formData.currency}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Base Price</span>
                            <span class="info-value">
                                ${
                                  formData.currency === "USD" ? "$" : ""
                                }${formData.basePrice.toLocaleString()}${
    formData.currency === "TND" ? " TND" : ""
  }
                            </span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Add-ons</span>
                            <span class="info-value highlight">${
                              formData.selectedFeatures.length
                            } features</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">IP Address</span>
                            <span class="info-value">${ip}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            ${
              formData.selectedFeatures.length > 0
                ? `
            <div class="features-section">
                <div class="features-header">
                    <span>✨</span>
                    <h3>Selected Premium Features</h3>
                </div>
                <div class="features-grid">
                    ${formData.selectedFeatures
                      .map(
                        (feature) => `
                    <div class="feature-item">
                        <span class="feature-name">${feature.name}</span>
                        <span class="feature-price">
                            +${formData.currency === "USD" ? "$" : ""}${
                          feature.price
                        }${formData.currency === "TND" ? " TND" : ""}
                        </span>
                    </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
            `
                : ""
            }
            
            <div class="project-requirements">
                <div class="requirements-header">
                    <span>💬</span>
                    <h3>Project Requirements</h3>
                </div>
                <div class="requirements-content">
                    ${formData.projectDetails.replace(/\n/g, "<br>")}
                </div>
            </div>
            
            <div class="action-panel">
                <a href="mailto:${formData.email}?subject=Re: Your ${
    formData.serviceTitle
  } Project&body=Hi ${
    formData.name.split(" ")[0]
  }," class="action-btn btn-primary">
                    ✉️ Reply to Client
                </a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Project+Call+with+${
                  formData.name
                }&details=Discussing+${formData.serviceTitle}+project+worth+${
    formData.currency
  }+${formData.totalAmount}" class="action-btn btn-secondary" target="_blank">
                    📅 Schedule Meeting
                </a>
                <a href="[Your CRM URL]/leads/new?name=${encodeURIComponent(
                  formData.name
                )}&email=${formData.email}&project=${encodeURIComponent(
    formData.serviceTitle
  )}&value=${formData.totalAmount}" class="action-btn btn-success">
                    📊 Add to CRM
                </a>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-links">
                <a href="[Your Admin URL]">View Dashboard</a>
                <a href="[Your Analytics URL]">Analytics</a>
                <a href="[Your Leads URL]">All Leads</a>
            </div>
            <p>This high-value lead was automatically generated from your pricing form</p>
            <p>© ${new Date().getFullYear()} Gems Alexander. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `;
}

export async function sendPricingUserEmail(
  formData: PricingFormData
): Promise<void> {
  const { resend } = await import("./email");

  await resend.emails.send({
    from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
    to: [formData.email],
    subject: `🎯 Project Quote: ${formData.serviceTitle} - ${
      formData.currency
    } ${formData.totalAmount.toLocaleString()}`,
    html: createPricingUserEmailTemplate(formData),
  });
}

export async function sendPricingAdminEmail(
  formData: PricingFormData,
  ip: string
): Promise<void> {
  const { resend } = await import("./email");

  await resend.emails.send({
    from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
    to: [process.env.ADMIN_EMAIL!],
    subject: `💰 ${formData.totalAmount > 5000 ? "PREMIUM" : "NEW"} Project: ${
      formData.serviceTitle
    } - ${formData.currency} ${formData.totalAmount}`,
    html: createPricingAdminEmailTemplate(formData, ip),
  });
}