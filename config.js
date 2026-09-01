// ==========================================
// KERALA CHRISTIAN WEDDING CONFIGURATION FILE
// Edit this file to easily customize all names, dates, venues, photos & messages!
// ==========================================

const WEDDING_CONFIG = {
  // Couple Information
  groom: {
    name: "Jeeson Joseph",
    shortName: "Jeeson",
    parents: "S/o Mr. Sebastian Biju & Mrs. Mary Seena",
    parish: "Christ the King Roman Catholic Church,Puthuvype",
    hometown: "Kochi , Kerala",
    bio: "Software Architect & Travel Enthusiast",
    image: "images/black1.jpg"
  },
  bride: {
    name: "Sandra C R",
    shortName: "Sandra",
    parents: "D/o Mr. Joseph Rexon & Mrs. Jancy Rexon",
    parish: "St. Sebastin Church,Bolgatty",
    hometown: "Kochi, Kerala",
    bio: "Pediatric Dentist & Classical Musician",
    image: "images/black2.jpg"
  },

  // Main Wedding Date (ISO format for live countdown)
  weddingDateISO: "2026-09-20T10:00:00+05:30",
  displayDate: "Sunday, 20th September 2026",
  hashtag: "#JeesonWedsSandra",
  coupleWhatsapp: "", // Add phone number e.g. "+919876543210" to receive WhatsApp blessings directly

  // Bible Verse / Welcome Quote
  bibleVerse: {
    text: "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.",
    citation: "— Matthew 19:6"
  },

  // Events Schedule
  events: [
    {
      id: "holy-matrimony",
      title: "Sacrament of Holy Matrimony",
      subtitle: "Church Wedding Mass & Nuptial Blessing",
      date: "Sunday, 20th September 2026",
      time: "11:00 AM IST (Guest Arrival 10:30 AM)",
      venue: "Christ the King Roman Catholic Church",
      address: "Puthuvype, Kochi, Kerala",
      googleMapsUrl: "https://maps.google.com/?q=Christ+the+King+Church+Puthuvype",
      badge: "Sacred Ceremony",
      image: "images/churuch.jpg",
      description: "Witness the sacred exchange of vows, Thaali Kettu, blessing of the Manthrakodi, and Holy Mass."
    },
    {
      id: "wedding-reception",
      title: "Wedding Reception & Celebration",
      subtitle: "Grand Feast, Music & Joy",
      date: "Sunday, 20th September 2026",
      time: "12:30 PM IST Onwards",
      venue: "Ochanthuruth Service Bank Auditorium",
      address: "Puthuvype, Kochi, Kerala",
      googleMapsUrl: "https://maps.google.com/?q=Ochanthuruth+Service+Bank+Auditorium",
      badge: "Grand Banquet",
      image: "images/reception.jpg",
      description: "Celebrate with us over traditional Kerala Christian feast (Sadya & delicacies), cake cutting, live music, and joy!"
    }
  ],

  // Gallery Images
  gallery: [
    { src: "images/NEL00146%20(1).jpg", caption: "Engagement Blessing" },
    { src: "images/image2.jpg", caption: "Our Sacred Church Venue" },
    { src: "images/image3.jpg", caption: "Together in Faith & Love" }
  ],

  // Guestbook wishes are managed locally in the app.
};
