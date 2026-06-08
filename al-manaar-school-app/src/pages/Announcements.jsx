import schoolLogo from "../assets/schoolLogo.png";

function Announcement() {
const announcements = [];

return ( <section className="min-h-screen bg-white">
{/* Hero Section */} <div className="relative overflow-hidden py-20">
{/* Logo Watermark */} <img
       src={schoolLogo}
       alt="School Logo"
       className="absolute inset-0 m-auto w-72 md:w-96 opacity-5"
     />


    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-deep-wine">
        Latest News & Announcements
      </h1>

      <div className="w-24 h-1 bg-gold mx-auto mt-5 rounded-full"></div>

      <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
        Stay informed about school activities, academic updates,
        examinations, events, achievements, and important notices
        from the school administration.
      </p>
    </div>
  </div>

  {/* Announcements */}
  <div className="max-w-6xl mx-auto px-4 pb-20">
    {announcements.length === 0 ? (
      <div className="bg-gold-light border border-gold rounded-3xl p-12 text-center shadow-sm">
        <div className="mb-4">
          <span className="text-5xl">📢</span>
        </div>

        <h2 className="text-2xl font-bold text-navy-dark mb-3">
          No Announcements Available
        </h2>

        <p className="text-gray-700 max-w-xl mx-auto">
          There are currently no announcements. Important school
          updates, events, and notices will be published here by
          the administration.
        </p>
      </div>
    ) : (
      <div className="grid gap-6">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white border-l-4 border-gold rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
          >
            <h2 className="text-2xl font-semibold text-deep-wine">
              {announcement.title}
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              {announcement.date}
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              {announcement.content}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
</section>


);
}

export default Announcement;
