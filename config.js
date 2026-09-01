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
    image: "assets/wedding_couple.png"
  },
  bride: {
    name: "Sandra C R",
    shortName: "Sandra",
    parents: "D/o Mr. Joseph Rexon & Mrs. Jancy Rexon",
    parish: "St. Sebastin Church,Bolgatty",
    hometown: "Kochi, Kerala",
    bio: "Pediatric Dentist & Classical Musician",
    image: "assets/wedding_couple.png"
  },

  // Main Wedding Date (ISO format for live countdown)
  weddingDateISO: "2026-09-20T10:00:00+05:30",
  displayDate: "Sunday, 20th September 2026",
  hashtag: "#JeesonWedsSandra",

  // Bible Verse / Welcome Quote
  bibleVerse: {
    text: "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.",
    citation: "— Matthew 19:6"
  },

  // Events Schedule
  events: [
    {
      id: "madhuram-veppu",
      title: "Madhuram Veppu",
      subtitle: "Traditional Eve Ceremony & Sweet Blessings",
      date: "Saturday, 19th September 2026",
      time: "6:00 PM IST Onwards",
      venue: "Joseph Family Residence",
      address: "Puthuvype, Kochi, Kerala",
      googleMapsUrl: "https://maps.google.com/?q=Puthuvype+Kochi",
      badge: "Eve Ceremony",
      description: "Join us for an evening of prayer, traditional songs, sweet distribution (Madhuram), and family festivities before the big day."
    },
    {
      id: "holy-matrimony",
      title: "Sacrament of Holy Matrimony",
      subtitle: "Church Wedding Mass & Nuptial Blessing",
      date: "Sunday, 20th September 2026",
      time: "10:00 AM IST (Guest Arrival 9:30 AM)",
      venue: "Christ the King Roman Catholic Church",
      address: "Puthuvype, Kochi, Kerala",
      googleMapsUrl: "https://maps.google.com/?q=Christ+the+King+Church+Puthuvype",
      badge: "Sacred Ceremony",
      image: "assets/kerala_church.png",
      description: "Witness the sacred exchange of vows, Thaali Kettu, blessing of the Manthrakodi, and Holy Mass."
    },
    {
      id: "wedding-reception",
      title: "Wedding Reception & Celebration",
      subtitle: "Grand Feast, Music & Joy",
      date: "Sunday, 20th September 2026",
      time: "1:00 PM IST Onwards",
      venue: "Bolgatty Palace & Island Resort",
      address: "Mulavukad, Kochi, Kerala",
      googleMapsUrl: "https://maps.google.com/?q=Bolgatty+Palace+Kochi",
      badge: "Grand Banquet",
      description: "Celebrate with us over traditional Kerala Christian feast (Sadya & delicacies), cake cutting, live music, and joy!"
    }
  ],

  // Traditional Kerala Christian Ritual Highlights
  traditions: [
    {
      title: "Thaali Kettu & Minnu",
      icon: "✝️",
      description: "The groom ties the sacred Minnu (a gold pendant embossed with 21 tiny beads forming a cross) around the bride's neck, symbolizing eternal union in Christ."
    },
    {
      title: "Manthrakodi",
      icon: "👰‍♀️",
      description: "The groom places the blessed Manthrakodi (rich silk sari) over the bride's head, signifying his pledge to protect, honor, and care for her for life."
    },
    {
      title: "Madhuram Veppu",
      icon: "🍯",
      description: "A cherished eve tradition where elders bless the bride and groom by feeding them sweet plantain and milk-honey mixture amid joyful songs."
    },
    {
      title: "Crowning Ceremony",
      icon: "👑",
      description: "The priest crowns the couple during the Orthodox / Syrian liturgy, declaring them king and queen of their new Christian home."
    }
  ],

  // Gallery Images
  gallery: [
    { src: "images/NEL00146%20(1).jpg", caption: "Engagement Blessing" },
    { src: "assets/kerala_church.png", caption: "Our Sacred Church Venue" },
    { src: "assets/wedding_couple.png", caption: "Together in Faith & Love" }
  ],

  // RSVP Contact Details
  rsvpContact: {
    phone: "+91 98765 43210",
    whatsapp: "+919876543210",
    email: "rohanandsandra2026@gmail.com",
    deadline: "1st November 2026"
  }
};
