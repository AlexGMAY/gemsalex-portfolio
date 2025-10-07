import { PartnershipFormData } from "@/types/partnership";

export function createPartnershipUserEmailTemplate(
  formData: PartnershipFormData
): string {
  const companySizeLabels = {
    startup: "Startup (1-10 employees)",
    small: "Small Business (11-50)",
    medium: "Medium Business (51-200)",
    enterprise: "Enterprise (201+)",
    agency: "Agency",
  };

  const partnershipTypeLabels = {
    strategic: "Strategic Partnership",
    technical: "Technical Collaboration",
    commercial: "Commercial Partnership",
    other: "Partnership Inquiry",
  };

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Partnership Request Received</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #1F2937;
            background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
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
            background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
            padding: 60px 40px;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%; left: -50%;
            width: 200%; height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 25px 25px;
            animation: float 20s linear infinite;
        }
        
        @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(-25px, -25px) rotate(360deg); }
        }
        
        .header-content { position: relative; z-index: 2; }
        
        .icon-wrapper {
            width: 90px; height: 90px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .partnership-badge {
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
        }
        
        .content { padding: 50px 40px; }
        
        .greeting {
            font-size: 1.6rem;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 30px;
        }
        
        .greeting span {
            background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
        }
        
        .partnership-details {
            background: #F8FAFC;
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 40px;
            border: 1px solid #E5E7EB;
            position: relative;
        }
        
        .partnership-details::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 6px;
            background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
            border-radius: 20px 20px 0 0;
        }
        
        .details-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
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
        
        .project-description {
            background: white;
            border-radius: 12px;
            padding: 25px;
            border: 1px solid #E5E7EB;
            margin-top: 25px;
        }
        
        .next-steps {
            background: linear-gradient(135deg, #6366F115 0%, #8B5CF615 100%);
            border: 2px solid #6366F130;
            border-radius: 20px;
            padding: 35px;
            margin-bottom: 40px;
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
            left: 15px; top: 0; bottom: 0;
            width: 2px;
            background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
        }
        
        .timeline li {
            position: relative;
            padding: 20px 0 20px 50px;
            margin-bottom: 10px;
        }
        
        .timeline li::before {
            content: '';
            position: absolute;
            left: 8px; top: 25px;
            width: 16px; height: 16px;
            background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 2px #6366F1;
        }
        
        .response-time {
            background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
            color: white;
            padding: 25px;
            border-radius: 16px;
            text-align: center;
            margin-bottom: 40px;
        }
        
        .footer {
            background: #1F2937;
            color: #9CA3AF;
            text-align: center;
            padding: 40px;
            font-size: 0.9rem;
        }
        
        @media (max-width: 600px) {
            .header { padding: 40px 25px; }
            .content { padding: 40px 25px; }
            .details-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="header-content">
                <div class="icon-wrapper">🤝</div>
                <div class="partnership-badge">
                    ${partnershipTypeLabels[formData.partnershipType]}
                </div>
                <h1>Partnership Request Received!</h1>
                <p>Excited to explore collaboration opportunities</p>
            </div>
        </div>
        
        <div class="content">
            <div class="greeting">Hello <span>${formData.name}</span>,</div>
            
            <div class="partnership-details">
                <div class="details-grid">
                    <div class="detail-item">
                        <div class="detail-label">Partnership Type</div>
                        <div class="detail-value">${
                          partnershipTypeLabels[formData.partnershipType]
                        }</div>
                    </div>
                    ${
                      formData.company
                        ? `
                    <div class="detail-item">
                        <div class="detail-label">Company</div>
                        <div class="detail-value">${formData.company}</div>
                    </div>
                    `
                        : ""
                    }
                    <div class="detail-item">
                        <div class="detail-label">Company Size</div>
                        <div class="detail-value">${
                          companySizeLabels[formData.companySize]
                        }</div>
                    </div>
                    ${
                      formData.timeline
                        ? `
                    <div class="detail-item">
                        <div class="detail-label">Timeline</div>
                        <div class="detail-value">${formData.timeline}</div>
                    </div>
                    `
                        : ""
                    }
                </div>
                
                <div class="project-description">
                    <div class="detail-label" style="margin-bottom: 10px;">Project Description</div>
                    <div style="color: #4B5563; line-height: 1.6;">${
                      formData.projectDescription
                    }</div>
                </div>
            </div>
            
            <div class="next-steps">
                <h3>🚀 Next Steps in Our Partnership Journey</h3>
                <ul class="timeline">
                    <li>
                        <div style="font-weight: 600; color: #1F2937; margin-bottom: 5px;">Initial Review</div>
                        <div style="color: #6B7280; font-size: 0.95rem;">We'll analyze your proposal and assess collaboration fit</div>
                    </li>
                    <li>
                        <div style="font-weight: 600; color: #1F2937; margin-bottom: 5px;">Discovery Call</div>
                        <div style="color: #6B7280; font-size: 0.95rem;">Schedule a video call to discuss details and opportunities</div>
                    </li>
                    <li>
                        <div style="font-weight: 600; color: #1F2937; margin-bottom: 5px;">Proposal Development</div>
                        <div style="color: #6B7280; font-size: 0.95rem;">Create a tailored partnership proposal</div>
                    </li>
                    <li>
                        <div style="font-weight: 600; color: #1F2937; margin-bottom: 5px;">Agreement & Kickoff</div>
                        <div style="color: #6B7280; font-size: 0.95rem;">Finalize terms and launch our collaboration</div>
                    </li>
                </ul>
            </div>
            
            <div class="response-time">
                <h3 style="font-size: 1.1rem; margin-bottom: 8px; opacity: 0.9;">Expected Response Time</h3>
                <p style="font-size: 1.8rem; font-weight: 800;">Within 24 Hours</p>
            </div>
            
            <div style="text-align: center; padding-top: 40px; border-top: 1px solid #E5E7EB;">
                <p style="font-size: 1.1rem; color: #6B7280; margin-bottom: 8px;">Looking forward to building something amazing together,</p>
                <p style="font-size: 1.4rem; font-weight: 800; color: #1F2937; background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 5px;">[Your Name]</p>
                <p style="color: #6B7280;">Senior Full-Stack Developer</p>
            </div>
        </div>
        
        <div class="footer">
            <div style="display: flex; justify-content: center; gap: 25px; margin-bottom: 20px; flex-wrap: wrap;">
                <a href="[Your Website URL]" style="color: #84cc16; text-decoration: none;">Portfolio</a>
                <a href="[Your LinkedIn URL]" style="color: #84cc16; text-decoration: none;">LinkedIn</a>
                <a href="[Your Calendly URL]" style="color: #84cc16; text-decoration: none;">Schedule Call</a>
            </div>
            <p>This is an automated response. Please do not reply to this email.</p>
            <p>© ${new Date().getFullYear()} Gems Alexander. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `;
}

export function createPartnershipAdminEmailTemplate(
  formData: PartnershipFormData,
  ip: string
): string {
  const companySizeLabels = {
    startup: "Startup (1-10)",
    small: "Small Business (11-50)",
    medium: "Medium Business (51-200)",
    enterprise: "Enterprise (201+)",
    agency: "Agency",
  };

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Partnership Inquiry</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #F3F4F6; padding: 20px; }
        .container { max-width: 700px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
        .header { background: linear-gradient(135deg, #DC2626 0%, #EA580C 100%); padding: 40px; color: white; text-align: center; }
        .content { padding: 40px; }
        .alert { background: #FEF3C7; border: 2px solid #F59E0B; border-radius: 12px; padding: 20px; margin-bottom: 30px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .card { background: #F8FAFC; border-radius: 12px; padding: 25px; border: 1px solid #E5E7EB; }
        .footer { background: #1F2937; color: #9CA3AF; padding: 30px; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 10px;">🤝 New Partnership Inquiry</h1>
            <p style="font-size: 1.2rem; opacity: 0.9;">${
              formData.partnershipType.charAt(0).toUpperCase() +
              formData.partnershipType.slice(1)
            } Partnership Opportunity</p>
        </div>
        
        <div class="content">
            <div class="alert">
                <h3 style="color: #92400E; font-size: 1.3rem; font-weight: 700; margin-bottom: 10px;">High-Value Partnership Opportunity</h3>
                <p style="color: #92400E;">From: ${
                  formData.company || "Individual"
                } • IP: ${ip} • ${new Date().toLocaleString()}</p>
            </div>
            
            <div class="grid">
                <div class="card">
                    <h3 style="color: #1F2937; margin-bottom: 15px;">👤 Contact Information</h3>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Company:</strong> ${
                      formData.company || "Not specified"
                    }</p>
                    <p><strong>Size:</strong> ${
                      companySizeLabels[formData.companySize]
                    }</p>
                </div>
                
                <div class="card">
                    <h3 style="color: #1F2937; margin-bottom: 15px;">📊 Partnership Details</h3>
                    <p><strong>Type:</strong> ${formData.partnershipType}</p>
                    <p><strong>Timeline:</strong> ${
                      formData.timeline || "Not specified"
                    }</p>
                    <p><strong>Budget:</strong> ${
                      formData.budget || "To be discussed"
                    }</p>
                </div>
            </div>
            
            <div class="card">
                <h3 style="color: #1F2937; margin-bottom: 15px;">💬 Project Description</h3>
                <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #E5E7EB;">
                    ${formData.projectDescription.replace(/\n/g, "<br>")}
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 30px;">
                <a href="mailto:${
                  formData.email
                }?subject=Re: Partnership Inquiry" style="background: #DC2626; color: white; padding: 15px; text-align: center; border-radius: 10px; text-decoration: none; font-weight: 600;">✉️ Reply</a>
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Partnership+Call+with+${
                  formData.name
                }" style="background: #374151; color: white; padding: 15px; text-align: center; border-radius: 10px; text-decoration: none; font-weight: 600;">📅 Schedule</a>
            </div>
        </div>
        
        <div class="footer">
            <p>Partnership inquiry generated from your portfolio website</p>
            <p>© ${new Date().getFullYear()} Gems Alexander. All Rights Reserved.</p>
        </div>
    </div>
</body>
</html>
  `;
}

export async function sendPartnershipUserEmail(
  formData: PartnershipFormData
): Promise<void> {
  const { resend } = await import("./email");

  await resend.emails.send({
    from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
    to: [formData.email],
    subject: `🤝 Partnership Request Received - ${
      formData.partnershipType.charAt(0).toUpperCase() +
      formData.partnershipType.slice(1)
    } Collaboration`,
    html: createPartnershipUserEmailTemplate(formData),
  });
}

export async function sendPartnershipAdminEmail(
  formData: PartnershipFormData,
  ip: string
): Promise<void> {
  const { resend } = await import("./email");

  await resend.emails.send({
    from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
    to: [process.env.ADMIN_EMAIL!],
    subject: `🤝 NEW PARTNERSHIP: ${formData.company || formData.name} - ${
      formData.partnershipType
    }`,
    html: createPartnershipAdminEmailTemplate(formData, ip),
  });
}
