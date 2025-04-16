// {
//   "subject": "Thanks for reaching out! (Case #{{caseNumber}})",
//   "body": `
//     <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
//       <h2 style="color: #3B82F6;">Hi {{name}},</h2>
//       <p>I've received your message about <strong>{{projectType}}</strong> and will respond by <strong>{{responseTime}}</strong>.</p>
      
//       <div style="background: #F3F4F6; padding: 16px; border-radius: 8px; margin: 20px 0;">
//         <h3 style="margin-top: 0;">Next Steps:</h3>
//         <ol>
//           <li>Review attached process document</li>
//           <li>Browse relevant portfolio pieces: <a href="{{portfolioLink}}">View Now</a></li>
//           <li>Reply to this email with any additional details</li>
//         </ol>
//       </div>

//       <a href="{{processPdf}}" download style="display: inline-block; background: #3B82F6; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-bottom: 20px;">
//         Download Process PDF
//       </a>
      
//       <p>Best regards,<br>Merveille Alexandre</p>
      
//       <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
//         <p style="font-size: 12px; color: #6B7280;">
//           Case #{{caseNumber}} | Submitted: {{timestamp}}
//         </p>
//       </div>
//     </div>
//   `,
//   "attachments": [
//     {
//       "filename": "Development_Process.pdf",
//       "path": "./assets/process.pdf"
//     }
//   ]
// }