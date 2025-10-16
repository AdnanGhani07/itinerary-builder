export const ImportantNotes = () => {
  const notes = [
    {
      point: "Airlines Standard Policy",
      detail: "In Case of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost."
    },
    {
      point: "Flight/Hotel Cancellation",
      detail: "In Case of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost."
    },
    {
      point: "Trip Insurance",
      detail: "In Case of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost."
    },
    {
      point: "Hotel Check-In & Check Out",
      detail: "In Case of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost."
    },
    {
      point: "Visa Rejection",
      detail: "In Case of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost."
    },
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
        Important <span style={{ color: "#7e38b7" }}>Notes</span>
      </h2>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 2 }}>
        <thead>
          <tr>
            <th style={headerStyle}>Point</th>
            <th style={headerStyle}>Details</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, idx) => (
            <tr key={idx} style={{ backgroundColor: "#f6edfa" }}>
              <td style={cellStyle}>{note.point}</td>
              <td style={cellStyle}>{note.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
