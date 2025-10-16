export const ScopeOfService = () => {
  const services = [
    {
      service: "Flight Tickets And Hotel Vouchers",
      details: "Delivered 3 Days Post Full Payment",
    },
    {
      service: "Web Check-In",
      details: "Boarding Pass Delivery Via Email/WhatsApp",
    },
    { service: "Support", details: "Chat Support – Response Time: 4 Hours" },
    { service: "Cancellation Support", details: "Provided" },
    { service: "Trip Support", details: "Response Time: 5 Minutes" },
  ];

  const headerStyle: React.CSSProperties = {
    backgroundColor: "#45287c",
    color: "#fff",
    padding: "10px",
    borderTopLeftRadius: "18px",
    borderTopRightRadius: "18px",
    fontWeight: 600,
    fontSize: 17,
  };

  const cellStyle: React.CSSProperties = {
    padding: "10px",
    fontSize: 16,
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <h2 style={{ fontWeight: "bold", fontSize: 20, marginBottom: 12 }}>
        Scope Of <span style={{ color: "#7e38b7" }}>Service</span>
      </h2>
      <table
        style={{ width: "100%", borderCollapse: "separate", borderSpacing: 2 }}
      >
        <thead>
          <tr>
            <th style={headerStyle}>Service</th>
            <th style={headerStyle}>Details</th>
          </tr>
        </thead>
        <tbody>
          {services.map((svc, idx) => (
            <tr key={idx} style={{ backgroundColor: "#f6edfa" }}>
              <td style={cellStyle}>{svc.service}</td>
              <td style={cellStyle}>{svc.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
