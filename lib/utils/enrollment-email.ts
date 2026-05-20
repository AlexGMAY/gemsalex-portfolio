import { Resend } from "resend";
import { EnrollmentFormData } from "@/types/enrollment";

// Initialize Resend
export const resend = new Resend(process.env.RESEND_API_KEY);

// Email templates
export async function sendEnrollmentUserEmail(
  formData: EnrollmentFormData,
  enrollmentId: string,
): Promise<void> {
  try {
    await resend.emails.send({
      from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
      to: [formData.email],
      subject: `Enrollment Request Received - ${formData.courseTitle}`,
      html: createUserEnrollmentEmailTemplate(formData, enrollmentId),
    });
  } catch (error) {
    console.error("Failed to send user enrollment email:", error);
    throw new Error("Failed to send confirmation email");
  }
}

export async function sendEnrollmentAdminEmail(
  formData: EnrollmentFormData,
  ip: string,
  enrollmentId: string,
): Promise<void> {
  try {
    await resend.emails.send({
      from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.ADMIN_EMAIL!],
      subject: `New Enrollment: ${formData.fullName} - ${formData.courseTitle}`,
      html: createAdminEnrollmentEmailTemplate(formData, ip, enrollmentId),
    });
  } catch (error) {
    console.error("Failed to send admin enrollment email:", error);
    throw new Error("Failed to send notification email");
  }
}

// User email template
export function createUserEnrollmentEmailTemplate(
  formData: EnrollmentFormData,
  enrollmentId: string,
): string {
  const experienceLevelMap = {
    beginner: "🌱 Beginner (Little to no experience)",
    intermediate: "📈 Intermediate (Some practical experience)",
    advanced: "🚀 Advanced (Regular user seeking mastery)",
    expert: "🏆 Expert (Looking for specialized knowledge)",
  };

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enrollment Request Received</title>
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
            background: linear-gradient(135deg, #10B981 0%, #059669 100%);
            padding: 40px;
            text-align: center;
            color: white;
        }
        
        .header h1 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 10px;
        }
        
        .content {
            padding: 40px;
        }
        
        .enrollment-id {
            background: #F3F4F6;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            margin-bottom: 30px;
            font-family: monospace;
            font-size: 1.1rem;
            color: #059669;
            font-weight: 600;
        }
        
        .course-card {
            background: linear-gradient(135deg, #10B981 0%, #059669 100%);
            color: white;
            padding: 30px;
            border-radius: 16px;
            text-align: center;
            margin-bottom: 30px;
        }
        
        .course-card h2 {
            font-size: 1.8rem;
            margin-bottom: 10px;
        }
        
        .info-section {
            margin-bottom: 30px;
        }
        
        .info-section h3 {
            font-size: 1.2rem;
            color: #1F2937;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .info-grid {
            background: #F8FAFC;
            border-radius: 12px;
            padding: 20px;
        }
        
        .info-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #E5E7EB;
        }
        
        .info-row:last-child {
            border-bottom: none;
        }
        
        .info-label {
            color: #6B7280;
            font-weight: 500;
        }
        
        .info-value {
            color: #1F2937;
            font-weight: 600;
            text-align: right;
        }
        
        .next-steps {
            background: #FEF3C7;
            border: 1px solid #F59E0B;
            border-radius: 12px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .next-steps h3 {
            color: #92400E;
            margin-bottom: 15px;
        }
        
        .steps-list {
            list-style: none;
            padding-left: 0;
        }
        
        .steps-list li {
            padding: 8px 0;
            display: flex;
            align-items: center;
            gap: 10px;
            color: #92400E;
        }
        
        .steps-list li::before {
            content: "→";
            color: #F59E0B;
            font-weight: bold;
        }
        
        .footer {
            background: #1F2937;
            color: #9CA3AF;
            text-align: center;
            padding: 30px;
            font-size: 0.875rem;
        }
        
        @media (max-width: 600px) {
            .header, .content {
                padding: 30px 20px;
            }
            
            .info-row {
                flex-direction: column;
                gap: 5px;
            }
            
            .info-value {
                text-align: left;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>🎓 Enrollment Request Received!</h1>
            <p>Your learning journey is about to begin</p>
        </div>
        
        <div class="content">
            <div class="enrollment-id">
                Reference: ${enrollmentId}
            </div>
            
            <div class="course-card">
                <h2>${formData.courseTitle}</h2>
                <p>Your personalized training program</p>
            </div>
            
            <div class="info-section">
                <h3>📋 Enrollment Summary</h3>
                <div class="info-grid">
                    <div class="info-row">
                        <span class="info-label">Full Name</span>
                        <span class="info-value">${formData.fullName}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Email</span>
                        <span class="info-value">${formData.email}</span>
                    </div>
                    ${
                      formData.phone
                        ? `
                    <div class="info-row">
                        <span class="info-label">Phone</span>
                        <span class="info-value">${formData.phone}</span>
                    </div>
                    `
                        : ""
                    }
                    ${
                      formData.experienceLevel
                        ? `
                    <div class="info-row">
                        <span class="info-label">Experience Level</span>
                        <span class="info-value">${experienceLevelMap[formData.experienceLevel as keyof typeof experienceLevelMap] || formData.experienceLevel}</span>
                    </div>
                    `
                        : ""
                    }
                    ${
                      formData.preferredSchedule
                        ? `
                    <div class="info-row">
                        <span class="info-label">Preferred Schedule</span>
                        <span class="info-value">${formData.preferredSchedule}</span>
                    </div>
                    `
                        : ""
                    }
                </div>
            </div>
            
            ${
              formData.message
                ? `
            <div class="info-section">
                <h3>💬 Your Message</h3>
                <div class="info-grid">
                    <p style="color: #4B5563; line-height: 1.6;">${formData.message}</p>
                </div>
            </div>
            `
                : ""
            }
            
            <div class="next-steps">
                <h3>📌 Next Steps</h3>
                <ul class="steps-list">
                    <li>You'll receive a personalized quote within 24 hours</li>
                    <li>Schedule a discovery call to discuss your goals</li>
                    <li>Receive your custom learning path</li>
                    <li>Begin your transformation journey</li>
                </ul>
            </div>
        </div>
        
        <div class="footer">
            <p>This is an automated confirmation. We'll be in touch shortly!</p>
            <p>© ${new Date().getFullYear()} Marvelbiz Solutions. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `;
}

// Admin email template
export function createAdminEnrollmentEmailTemplate(
  formData: EnrollmentFormData,
  ip: string,
  enrollmentId: string,
): string {
  const experienceLevelMap = {
    beginner: "🌱 Beginner (Little to no experience)",
    intermediate: "📈 Intermediate (Some practical experience)",
    advanced: "🚀 Advanced (Regular user seeking mastery)",
    expert: "🏆 Expert (Looking for specialized knowledge)",
  };

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Enrollment - ${formData.fullName}</title>
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
            background: linear-gradient(135deg, #10B981 0%, #059669 100%);
            padding: 40px;
            color: white;
        }
        
        .header h1 {
            font-size: 2rem;
            margin-bottom: 10px;
        }
        
        .enrollment-badge {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 0.9rem;
            font-family: monospace;
            margin-top: 10px;
        }
        
        .content {
            padding: 40px;
        }
        
        .alert-banner {
            background: #FEF3C7;
            border-left: 4px solid #F59E0B;
            padding: 20px;
            margin-bottom: 30px;
            border-radius: 8px;
        }
        
        .info-card {
            background: #F8FAFC;
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 25px;
        }
        
        .info-card h3 {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: #1F2937;
            border-bottom: 2px solid #E5E7EB;
            padding-bottom: 10px;
        }
        
        .info-grid {
            display: grid;
            gap: 15px;
        }
        
        .info-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
        }
        
        .info-label {
            color: #6B7280;
            font-weight: 500;
        }
        
        .info-value {
            color: #1F2937;
            font-weight: 600;
            text-align: right;
        }
        
        .message-box {
            background: #F8FAFC;
            padding: 20px;
            border-radius: 12px;
            margin-top: 15px;
            border-left: 4px solid #10B981;
        }
        
        .action-buttons {
            display: flex;
            gap: 15px;
            margin-top: 30px;
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
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #10B981 0%, #059669 100%);
            color: white;
        }
        
        .btn-secondary {
            background: #6B7280;
            color: white;
        }
        
        .footer {
            background: #1F2937;
            color: #9CA3AF;
            padding: 30px;
            text-align: center;
            font-size: 0.875rem;
        }
        
        @media (max-width: 600px) {
            .header, .content {
                padding: 30px 20px;
            }
            
            .info-row {
                flex-direction: column;
                gap: 5px;
            }
            
            .info-value {
                text-align: left;
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
            <h1>📚 New Course Enrollment Request</h1>
            <p>A potential student is ready to start their learning journey</p>
            <div class="enrollment-badge">ID: ${enrollmentId}</div>
        </div>
        
        <div class="content">
            <div class="alert-banner">
                <strong>⏰ Action Required:</strong> Please respond within 24 hours with a personalized quote.
            </div>
            
            <div class="info-card">
                <h3>🎓 Course Information</h3>
                <div class="info-grid">
                    <div class="info-row">
                        <span class="info-label">Selected Course</span>
                        <span class="info-value" style="color: #10B981;">${formData.courseTitle}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Enrollment ID</span>
                        <span class="info-value">${enrollmentId}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Submitted</span>
                        <span class="info-value">${new Date().toLocaleString()}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">IP Address</span>
                        <span class="info-value">${ip}</span>
                    </div>
                </div>
            </div>
            
            <div class="info-card">
                <h3>👤 Student Information</h3>
                <div class="info-grid">
                    <div class="info-row">
                        <span class="info-label">Full Name</span>
                        <span class="info-value">${formData.fullName}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Email</span>
                        <span class="info-value">${formData.email}</span>
                    </div>
                    ${
                      formData.phone
                        ? `
                    <div class="info-row">
                        <span class="info-label">Phone</span>
                        <span class="info-value">${formData.phone}</span>
                    </div>
                    `
                        : ""
                    }
                    ${
                      formData.experienceLevel
                        ? `
                    <div class="info-row">
                        <span class="info-label">Experience Level</span>
                        <span class="info-value">${experienceLevelMap[formData.experienceLevel as keyof typeof experienceLevelMap] || formData.experienceLevel}</span>
                    </div>
                    `
                        : ""
                    }
                    ${
                      formData.preferredSchedule
                        ? `
                    <div class="info-row">
                        <span class="info-label">Preferred Schedule</span>
                        <span class="info-value">${formData.preferredSchedule}</span>
                    </div>
                    `
                        : ""
                    }
                </div>
            </div>
            
            ${
              formData.message
                ? `
            <div class="info-card">
                <h3>💬 Student Message</h3>
                <div class="message-box">
                    <p style="color: #4B5563;">${formData.message}</p>
                </div>
            </div>
            `
                : ""
            }
            
            <div class="action-buttons">
                <a href="mailto:${formData.email}?subject=Your ${formData.courseTitle} Enrollment Request&body=Hi ${formData.fullName.split(" ")[0]}," class="btn btn-primary">
                    ✉️ Reply to Student
                </a>
                <a href="https://calendly.com/contact-marvelbiz/30min" target="_blank" class="btn btn-secondary">
                    📅 Schedule Discovery Call
                </a>
            </div>
        </div>
        
        <div class="footer">
            <p>Lead generated from course enrollment form</p>
            <p>© ${new Date().getFullYear()} Marvelbiz Solutions. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `;
}

