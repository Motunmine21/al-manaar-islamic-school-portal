 function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-navy-dark mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Admissions</h3>
          <p className="text-3xl font-bold text-deep-wine">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Announcements</h3>
          <p className="text-3xl font-bold text-deep-wine">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Messages</h3>
          <p className="text-3xl font-bold text-deep-wine">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Results</h3>
          <p className="text-3xl font-bold text-deep-wine">0</p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;