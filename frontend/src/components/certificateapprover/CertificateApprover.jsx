import React from 'react';
import './CertificateApprover.css';

const CertificateApprover = ({ certificates, onApprove, onReject }) => {
  return (
    <div className="certificate-approver">
      <h2>Certificate Approvals</h2>
      <ul>
        {certificates.map(cert => (
          <li key={cert.id}>
            {cert.studentName} - {cert.courseTitle}
            <button onClick={() => onApprove(cert.id)}>Approve</button>
            <button onClick={() => onReject(cert.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CertificateApprover;
