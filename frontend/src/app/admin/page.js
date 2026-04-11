export default function AdminPage({ children }) {
  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="logo">MediCare</h2>

        <nav>
          <a href="/admin" className="active">Dashboard</a>
          <a href="/admin/doctors">Doctors</a>
          <a href="/admin/orders">Orders</a>
          <a href="/admin/users">Users</a>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="admin-main">
        {children}
      </main>

    </div>
  );
}