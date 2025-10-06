import { Resend } from "resend";
import { ContactFormData } from "@/types/contact";

// Initialize Resend
export const resend = new Resend(process.env.RESEND_API_KEY);

// Email templates
export async function sendUserConfirmationEmail(
  formData: ContactFormData
): Promise<void> {
  try {
    await resend.emails.send({
      from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
      to: [formData.email],
      subject: `Message Received - ${formData.projectType} Inquiry`,
      html: createUserEmailTemplate(formData),
    });
  } catch (error) {
    console.error("Failed to send user confirmation email:", error);
    throw new Error("Failed to send confirmation email");
  }
}

export async function sendAdminNotificationEmail(
  formData: ContactFormData,
  ip: string
): Promise<void> {
  try {
    await resend.emails.send({
      from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.ADMIN_EMAIL!],
      subject: `New Contact: ${formData.name} - ${formData.projectType}`,
      html: createAdminEmailTemplate(formData, ip),
    });
  } catch (error) {
    console.error("Failed to send admin notification email:", error);
    throw new Error("Failed to send notification email");
  }
}

// First template functions
export function createUserEmailTemplate(formData: ContactFormData): string {
  const urgencyColor = {
    urgent: "#EF4444",
    standard: "#3B82F6",
    low: "#10B981",
  }[formData.urgency];

  const projectTypeIcons = {
    general: "💬",
    freelance: "💼",
    collaboration: "🤝",
    other: "🎯",
  };

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Received - ${formData.name}</title>
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
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #FFFFFF;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 50px 40px;
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
            background-size: 20px 20px;
            animation: float 20s linear infinite;
        }
        
        @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(-20px, -20px) rotate(360deg); }
        }
        
        .header-content {
            position: relative;
            z-index: 2;
        }
        
        .icon-wrapper {
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .icon-wrapper svg {
            width: 40px;
            height: 40px;
            fill: white;
        }
        
        .header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 10px;
            background: linear-gradient(135deg, #FFFFFF 0%, #F3F4F6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
            font-weight: 300;
        }
        
        .content {
            padding: 50px 40px;
        }
        
        .greeting {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 30px;
        }
        
        .greeting span {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
        
        .details-card {
            background: #F8FAFC;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 40px;
            border: 1px solid #E5E7EB;
            position: relative;
        }
        
        .details-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 16px 16px 0 0;
        }
        
        .details-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        .detail-item {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        
        .detail-label {
            font-size: 0.875rem;
            color: #6B7280;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .detail-value {
            font-size: 1rem;
            font-weight: 600;
            color: #1F2937;
        }
        
        .urgency-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            background: ${urgencyColor}15;
            color: ${urgencyColor};
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: 600;
            border: 1px solid ${urgencyColor}30;
        }
        
        .project-icon {
            font-size: 1.2rem;
        }
        
        .response-time {
            background: linear-gradient(135deg, #10B981 0%, #059669 100%);
            color: white;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 40px;
        }
        
        .response-time h3 {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 5px;
            opacity: 0.9;
        }
        
        .response-time p {
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .next-steps {
            background: #FEF3C7;
            border: 1px solid #F59E0B;
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 40px;
        }
        
        .next-steps h3 {
            color: #92400E;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .steps-list {
            list-style: none;
            color: #92400E;
        }
        
        .steps-list li {
            margin-bottom: 8px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }
        
        .steps-list li::before {
            content: '→';
            color: #F59E0B;
            font-weight: 700;
        }
        
        .signature {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid #E5E7EB;
        }
        
        .signature p {
            font-size: 1rem;
            color: #6B7280;
            margin-bottom: 5px;
        }
        
        .signature .name {
            font-size: 1.2rem;
            font-weight: 700;
            color: #1F2937;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .footer {
            background: #1F2937;
            color: #9CA3AF;
            text-align: center;
            padding: 30px 40px;
            font-size: 0.875rem;
        }
        
        .footer a {
            color: #60A5FA;
            text-decoration: none;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 15px;
        }
        
        @media (max-width: 600px) {
            .header {
                padding: 40px 20px;
            }
            
            .content {
                padding: 40px 20px;
            }
            
            .details-grid {
                grid-template-columns: 1fr;
            }
            
            .header h1 {
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
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                </div>
                <h1>Message Received!</h1>
                <p>Your inquiry is in good hands</p>
            </div>
        </div>
        
        <div class="content">
            <div class="greeting">
                Hello <span>${formData.name}</span>,
            </div>
            
            <div class="message">
                Thank you for reaching out! I've received your message and will get back to you within the expected timeframe. I'm excited to learn more about your project and discuss how we can bring your vision to life.
            </div>
            
            <div class="details-card">
                <div class="details-title">
                    <span class="project-icon">${
                      projectTypeIcons[formData.projectType]
                    }</span>
                    Message Details
                </div>
                <div class="details-grid">
                    <div class="detail-item">
                        <div class="detail-label">Project Type</div>
                        <div class="detail-value">${
                          formData.projectType.charAt(0).toUpperCase() +
                          formData.projectType.slice(1)
                        }</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Urgency Level</div>
                        <div class="detail-value">
                            <span class="urgency-badge">
                                ${
                                  formData.urgency === "urgent"
                                    ? "⚡"
                                    : formData.urgency === "standard"
                                    ? "⏱️"
                                    : "🐢"
                                }
                                ${
                                  formData.urgency.charAt(0).toUpperCase() +
                                  formData.urgency.slice(1)
                                }
                            </span>
                        </div>
                    </div>
                    ${
                      formData.budget
                        ? `
                    <div class="detail-item">
                        <div class="detail-label">Budget Range</div>
                        <div class="detail-value">${formData.budget}</div>
                    </div>
                    `
                        : ""
                    }
                    <div class="detail-item">
                        <div class="detail-label">Submitted</div>
                        <div class="detail-value">${new Date().toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}</div>
                    </div>
                </div>
            </div>
            
            <div class="response-time">
                <h3>Expected Response Time</h3>
                <p>${getExpectedResponseTime(formData)}</p>
            </div>
            
            <div class="next-steps">
                <h3>📋 What Happens Next?</h3>
                <ul class="steps-list">
                    <li>I'll review your project requirements personally</li>
                    <li>You'll receive a detailed response within the timeframe above</li>
                    <li>We'll schedule a call to discuss your project in depth</li>
                    <li>Together, we'll create an amazing solution</li>
                </ul>
            </div>
            
            <div class="signature">
                <p>Best regards,</p>
                <p class="name">Gems Alexander May</p>
                <p>Senior Full-Stack Developer</p>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-links">
                <a href="https://gemsalex.com" target="blank">Check out My Website</a>
                <a href="https://www.linkedin.com/in/alexandre-merveille-may/" target="blank">LinkedIn Profile</a>
                <a href="https://github.com/AlexGMAY/" target="blank">GitHub Profile</a>
            </div>
            <p>This is an automated response. Please do not reply to this email.</p>
            <p>© ${new Date().getFullYear()} Gems Alexander. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `;
}

export function createAdminEmailTemplate(
  formData: ContactFormData,
  ip: string
): string {
  const priorityColor =
    formData.urgency === "urgent"
      ? "#EF4444"
      : formData.urgency === "standard"
      ? "#3B82F6"
      : "#10B981";

  const priorityLevel =
    formData.urgency === "urgent"
      ? "HIGH PRIORITY"
      : formData.urgency === "standard"
      ? "MEDIUM PRIORITY"
      : "LOW PRIORITY";

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Lead - ${formData.name}</title>
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
            max-width: 700px;
            margin: 0 auto;
            background: #FFFFFF;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .header {
            background: linear-gradient(135deg, #DC2626 0%, #EA580C 100%);
            padding: 40px;
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
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
        }
        
        .header-content {
            position: relative;
            z-index: 2;
            text-align: center;
        }
        
        .priority-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.2);
            padding: 12px 20px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.9rem;
            margin-bottom: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px;
        }
        
        .alert-banner {
            background: linear-gradient(135deg, ${priorityColor}15 0%, ${priorityColor}05 100%);
            border: 2px solid ${priorityColor}30;
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 30px;
            position: relative;
            overflow: hidden;
        }
        
        .alert-banner::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 6px;
            background: ${priorityColor};
        }
        
        .alert-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        }
        
        .alert-text h3 {
            color: ${priorityColor};
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 5px;
        }
        
        .alert-text p {
            color: #6B7280;
            font-size: 0.95rem;
        }
        
        .urgency-indicator {
            background: ${priorityColor};
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-weight: 600;
            font-size: 0.9rem;
            white-space: nowrap;
        }
        
        .client-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }
        
        .info-card {
            background: #F8FAFC;
            border-radius: 12px;
            padding: 25px;
            border: 1px solid #E5E7EB;
        }
        
        .info-card h3 {
            font-size: 1.1rem;
            font-weight: 600;
            color: #374151;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .info-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px solid #E5E7EB;
        }
        
        .info-item:last-child {
            border-bottom: none;
        }
        
        .info-label {
            color: #6B7280;
            font-weight: 500;
            font-size: 0.9rem;
        }
        
        .info-value {
            color: #1F2937;
            font-weight: 600;
            text-align: right;
        }
        
        .project-details {
            background: #FEF3C7;
            border: 2px solid #F59E0B;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
        }
        
        .project-details h3 {
            color: #92400E;
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .message-content {
            background: white;
            border-radius: 12px;
            padding: 25px;
            border: 1px solid #E5E7EB;
            font-size: 1rem;
            line-height: 1.7;
            color: #4B5563;
            white-space: pre-wrap;
        }
        
        .action-buttons {
            display: flex;
            gap: 15px;
            margin-top: 30px;
            flex-wrap: wrap;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
            color: white;
        }
        
        .btn-secondary {
            background: #6B7280;
            color: white;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
        }
        
        .footer {
            background: #1F2937;
            color: #9CA3AF;
            padding: 30px 40px;
            text-align: center;
            font-size: 0.875rem;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 15px;
        }
        
        .footer a {
            color: #60A5FA;
            text-decoration: none;
        }
        
        @media (max-width: 600px) {
            .header {
                padding: 30px 20px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .client-info {
                grid-template-columns: 1fr;
            }
            
            .alert-content {
                flex-direction: column;
                text-align: center;
            }
            
            .action-buttons {
                flex-direction: column;
            }
            
            .btn {
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="header-content">
                <div class="priority-badge">
                    ${
                      formData.urgency === "urgent" ? "🚨" : "📥"
                    } ${priorityLevel}
                </div>
                <h1>New Project Inquiry</h1>
                <p>Potential client reached out via contact form</p>
            </div>
        </div>
        
        <div class="content">
            <div class="alert-banner">
                <div class="alert-content">
                    <div class="alert-text">
                        <h3>💰 High-Value Opportunity</h3>
                        <p>Client submitted a ${
                          formData.projectType
                        } inquiry • ${new Date().toLocaleString()}</p>
                    </div>
                    <div class="urgency-indicator">
                        ${formData.urgency.toUpperCase()} PRIORITY
                    </div>
                </div>
            </div>
            
            <div class="client-info">
                <div class="info-card">
                    <h3>👤 Client Information</h3>
                    <div class="info-item">
                        <span class="info-label">Full Name</span>
                        <span class="info-value">${formData.name}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Email Address</span>
                        <span class="info-value">${formData.email}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Project Type</span>
                        <span class="info-value" style="text-transform: capitalize;">${
                          formData.projectType
                        }</span>
                    </div>
                </div>
                
                <div class="info-card">
                    <h3>📊 Project Details</h3>
                    <div class="info-item">
                        <span class="info-label">Urgency Level</span>
                        <span class="info-value" style="color: ${priorityColor}; font-weight: 700;">
                            ${
                              formData.urgency.charAt(0).toUpperCase() +
                              formData.urgency.slice(1)
                            }
                        </span>
                    </div>
                    ${
                      formData.budget
                        ? `
                    <div class="info-item">
                        <span class="info-label">Budget Range</span>
                        <span class="info-value" style="color: #10B981; font-weight: 700;">${formData.budget}</span>
                    </div>
                    `
                        : ""
                    }
                    <div class="info-item">
                        <span class="info-label">Response Time</span>
                        <span class="info-value">${getExpectedResponseTime(
                          formData
                        )}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">IP Address</span>
                        <span class="info-value">${ip}</span>
                    </div>
                </div>
            </div>
            
            <div class="project-details">
                <h3>💬 Client Message</h3>
                <div class="message-content">
                    ${formData.message}
                </div>
            </div>
            
            <div class="action-buttons">
                <a href="mailto:${formData.email}?subject=Re: Your ${
    formData.projectType
  } Inquiry&body=Hi ${formData.name.split(" ")[0]}," class="btn btn-primary">
                    ✉️ Reply to Client
                </a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Call+with+${
                  formData.name
                }&details=Discussing+${
    formData.projectType
  }+project" class="btn btn-secondary" target="_blank">
                    📅 Schedule Meeting
                </a>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-links">
                <a href="[Your Admin URL]">View in Dashboard</a>
                <a href="[Your CRM URL]">Add to CRM</a>
            </div>
            <p>This lead was automatically generated from your portfolio contact form</p>
            <p>© ${new Date().getFullYear()} Gems Alexander. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `;
}


function getExpectedResponseTime(formData: ContactFormData): string {
  if (formData.urgency === "urgent") return "1-4 hours";
  if (formData.projectType === "freelance") return "12-24 hours";
  return "24-48 hours";
}
